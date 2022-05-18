import React,{useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { Modal, Form, Button, ModalActions} from 'semantic-ui-react'
import { useFirebase } from 'react-redux-firebase'
import {useSelector} from 'react-redux'
const CreateChannel = ({open, onOpen, onClose}) => {
  const profile = useSelector((state)=> state.firebase.profile)
  const firebase = useFirebase();
  const {register, formState: { errors }, handleSubmit,setValue} = useForm()
  useEffect(()=>{
    {register('name', {required:true})}
    {register('description', {required:true, minLength:10})}
  },[])
  const onSubmit = ({name,description}) => {
    firebase.push('channels',{
      name,
      description,
      createdBy : {
        name: profile.name,
        avatar: profile.avatar,
      }
    })
    onClose()
  }
  return (
    <Modal open={open} onOpen={onOpen} onClose={onClose}>
      <Modal.Header>New Channel Create</Modal.Header>

      <Modal.Content>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Input
          fluid
          icon='hashtag'
          iconPosition='left'
          name='name'
          placeholder='#General'
          onChange= {(e, {name,value})=> {
            setValue(name,value)
          }}
          error={errors.name ? true : false}
          />

          <Form.Input
          fluid
          icon='hashtag'
          iconPosition='left'
          name='description'
          placeholder='#Description'
          onChange= {(e, {name,value})=> {
            setValue(name,value)
          }}
          error={errors.name ? true : false}/>

        </Form>

      </Modal.Content>
      <ModalActions>
        <Button color='purple' onClick={() => onClose()}>Cancel</Button>
        <Button color='green' positive onClick={() => handleSubmit(onSubmit) ()}>Create</Button>
      </ModalActions>



    </Modal>
  )
}

export default CreateChannel
