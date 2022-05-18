import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import SidePanel from './SidePanel/SidePanel'
import ChatPanel from './ChatPanel/ChatPanel'
import { useSelector } from 'react-redux'
const MainPage = () => {
  const currentChannel = useSelector((state)=> state.channels.currentChannel)
  return (
    <Grid columns ='2' style={{background: "#eee",height : '110vh'}} >
      <GridColumn width = '3' >
      <SidePanel/>
      </GridColumn>

      <GridColumn width = '13' style={{background : '#fff'}}>
       {currentChannel && <ChatPanel currentChannel={currentChannel}/>}
      </GridColumn>
    </Grid>
  )
}

export default MainPage
