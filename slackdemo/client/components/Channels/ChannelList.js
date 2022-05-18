import React,{useEffect,useState} from 'react'
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { useSelector , useDispatch} from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { setCurrentChannel } from '../../store/channels'
const ChannelList = () => {
  useFirebaseConnect([{path:'channels'}])
  const dispatch = useDispatch();
  const channels = useSelector((state)=> state.firebase.ordered.channels)
  const currentChannel = useSelector((state)=>state.channels.currentChannel)
  const [mounted,setMounted] =useState(false);

  useEffect(()=>{
    if(!mounted && !isEmpty(channels)){
      const {key, value} = channels[0];
      dispatch(setCurrentChannel({key,...value}))
      setMounted(true)
    }
    })

  if(!isLoaded(channels)){
    return 'loading channels'
  }
  if(isEmpty(channels)){
    return 'no channels'
  }
  return (
    <Menu.Menu>
      {
        channels.map(({key,value})=>{
          return (<Menu.Item
          key={key}
          name={value?.name}
          as='a'
          icon='hashtag'
          active={currentChannel?.key===key}
          onClick={()=>dispatch(setCurrentChannel({key,...value}))}
          />)
        })
      }
    </Menu.Menu>
  )
}

export default ChannelList
