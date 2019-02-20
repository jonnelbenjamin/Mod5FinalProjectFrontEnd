import React from 'react';
import {Menu, Divider,Button, Header, Icon, Image, Segment, Sidebar} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class SidebarNav extends React.Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
      <div id="mainTop">
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show sidebar
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide sidebar
          </Button>
        </Button.Group>
        <h1>United Relief!</h1>
        </div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='address card outline' />
              My Profile
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='map' />
              Map
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='building' />
              Organizations
            </Menu.Item>
            <Link to="/login"><Menu.Item as='a'>
              <Icon name='sign-out' />
              Sign Out
            </Menu.Item></Link>
          </Sidebar>
          <Sidebar.Pusher>
                 <Segment basic>

                   <h1>Maybe I can put the Map Component in here?</h1>
                   <h1>Maybe I can put the Map Component in here?</h1>
                   <h1>Maybe I can put the Map Component in here?</h1>
                   <h1>Maybe I can put the Map Component in here?</h1>
                   <h1>Maybe I can put the Map Component in here?</h1>
                   <h1>Maybe I can put the Map Component in here?</h1>
                   <h1>Maybe I can put the Map Component in here?</h1>
                   <h1>Maybe I can put the Map Component in here?</h1>
                   <h1>Maybe I can put the Map Component in here?</h1>
                 </Segment>
               </Sidebar.Pusher>
             </Sidebar.Pushable>
           </div>
         )
       }
     }

export default SidebarNav;
