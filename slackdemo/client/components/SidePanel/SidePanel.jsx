import React,{useState} from 'react'
import {Popup,Menu,Icon} from 'semantic-ui-react'
import ChannelList from '../Channels/ChannelList';
import CreateChannel from '../Channels/CreateChannel';
import UserPanel from '../UserPanel/UserPanel';
import { TwitterPicker } from "react-color";
const SidePanel = () => {
  const [open,setOpen] = useState(false);
  const [color, setColor] = useState("#22194d");
  const handleOpen = () =>{
    setOpen(true)
  }
  const handleClose = () =>{
    setOpen(false)
  }

  return (
    <>
    <Menu
    vertical
    inverted
    secondary
    style={{
      width :'346px',
      fontSize: '1.3rem',
      background: `${color}`,
      height : '100vh'

    }}>
      <Menu.Item>
          <TwitterPicker
            color={color}
            onChangeComplete={(color) => setColor(color.hex)}
          />
        </Menu.Item>
      <Menu.Item>
        {/* {userpanel} */}
        <UserPanel/>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>
          Kanallar
          <span style={{float : 'right'}}>
            <Popup
            content='New channel'
            trigger={<Icon name='add' onClick={event => handleOpen()} />}>
            </Popup>
          </span>
        </Menu.Header>
        {/* channels */}
        <ChannelList/>
      </Menu.Item>

    </Menu>
    <CreateChannel
    open={open}
    onOpen={handleOpen}
    onClose={handleClose}/>
    </>
  )
}

export default SidePanel
