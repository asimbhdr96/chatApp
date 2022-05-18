import React,{useState,useEffect} from 'react'
import {Form, Segment, Button, Grid, Message} from 'semantic-ui-react'
import styles from './signup.module.css'
import { useFirebase } from 'react-redux-firebase';
import { useForm } from "react-hook-form";
import Link from 'next/link'
const Signup = () => {
  const firebase = useFirebase();
  const [fbErrors,setFbErrors] = useState([]);
  const [submitting,SetSubmitting] = useState(false);
  const { register,formState: { errors },handleSubmit,setValue} = useForm();
  useEffect(()=>{
    {register('username', {required:true})};
    {register('email',{required:true})};
    {register('password', {required:true, minLength:6})};

  },[]);

  const onSubmit = async ({username,email,password},event) => {
    SetSubmitting(true);
    setFbErrors([]);
    const [first, last] = username.split(' ');
    try{
      const user = await firebase.createUser({
        email,password
      },{name : username,avatar : `https://ui-avatars.com/api/?name=${first}+${last}&background=random&color=fff`,})
      console.log(`https://ui-avatars.com/api/?name=${first}+${last}&background=random&color=fff`);
      SetSubmitting(false)
    }catch(err){

      setFbErrors([{message : err.message}])
      SetSubmitting(false)
    }

  }
  const displayErrors= () => {

    return fbErrors.map((error,index) =><p key={index}>{error.message}</p>)
  }
  return (
    <Grid textAlign='center' verticalAlign='middle' className={styles.container}>

        <Grid.Column style= {{maxWidth : '450px'}}>
            <h1 className={styles.formHeader}>Slack Demo</h1>
            <Form
            size='large'
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}>

              <Segment>
                <Form.Input fluid icon='user' iconPosition='left' name='username' placeholder='UserName' type='text'
                onChange={(event, {name,value}) => {setValue(name,value)}}
                error={errors.username ? true : false}/>
                <Form.Input fluid icon='mail' iconPosition='left' name='email' placeholder='Email' type='email'
                onChange={(event, {name,value}) => {setValue(name,value)}}
                error={errors.email ? true : false}/>
                <Form.Input fluid icon='lock' iconPosition='left' name='password' placeholder='Password' type='password'
                onChange={(event, {name,value}) => {setValue(name,value)}}
                error={errors.password ? true : false}/>
                <Button color='blue' fluid size='large' disabled={submitting}> SignUp</Button>
              </Segment>
            </Form>
            {
              fbErrors.length > 0 && <Message error>{displayErrors()}</Message>
            }
            <Message> Already have an account <Link href='/login'> Login</Link></Message>
        </Grid.Column>

    </Grid>
  )
}

export default Signup
