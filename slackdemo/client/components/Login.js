import React,{useState,useEffect} from 'react'
import {Form, Segment, Button, Grid, Message} from 'semantic-ui-react'
import { useForm } from "react-hook-form";
import { useFirebase } from 'react-redux-firebase';
import styles from './login.module.css'
import Link from 'next/link'
const Login = () => {
  const firebase = useFirebase();
  const [fbErrors,setFbErrors] = useState([]);
  const [submitting,SetSubmitting] = useState(false);
  const { register,formState: { errors },handleSubmit,setValue} = useForm();
  useEffect(()=>{
    {register('email',{required:true})};
    {register('password', {required:true, minLength:{value: 6,
      message: "This password must exceed 6 characters"}})};
  },[]);
  const onSubmit = async ({email,password},event) => {
    SetSubmitting(true);
    setFbErrors([]);
    try{
      const user = await firebase.login({
        email,password
      })
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
                <Form.Input fluid icon='mail' iconPosition='left' name='email' placeholder='Email' type='email' onChange={(event, {name,value}) => {setValue(name,value)}}
                error={errors.email ? true : false}/>
                <Form.Input fluid icon='lock' iconPosition='left' name='password' placeholder='Password' type='password' onChange={(event, {name,value}) => {setValue(name,value)}}
                error={errors.password ? true : false}/>
                <p>{errors.password?.message}</p>
                <Button color='blue' fluid size='large' disabled={submitting}> LogIn</Button>
              </Segment>
            </Form>
            {
              fbErrors.length > 0 && <Message error>{displayErrors()}</Message>
            }
            <Message> Are you new here? <Link href='/signup'> SingUp</Link></Message>
        </Grid.Column>

    </Grid>
  )
}

export default Login
