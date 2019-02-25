import React from 'react';
import {Menu, Divider,Button, Header, Icon, Image, Segment, Sidebar} from 'semantic-ui-react';
import {Route, Switch, Link} from 'react-router-dom'
import MapContainer from '../Components/MapContainer'
import Organizations from './Organizations'

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
            Menu
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
          </Button>
        </Button.Group>
        <h1>United Relief</h1>
        </div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='scale down'
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
            <Link to="/main"><Menu.Item as='a'>
              <Icon name='map' />
              Map
            </Menu.Item></Link>
          <Link to="/main/organizations"><Menu.Item as='a'>
              <Icon name='building' />
              Organizations
            </Menu.Item></Link>
            <Link to="/login"><Menu.Item as='a'>
              <Icon name='sign-out' />
              Sign Out
            </Menu.Item></Link>
          </Sidebar>
          <Sidebar.Pusher>
                 <Segment basic id="mapSegment">

                   <Switch>
                    <Route path="/main/organizations" component={Organizations}/>
                   <Route path="/main" component={MapContainer}/>
                   </Switch>
                 </Segment>
               </Sidebar.Pusher>
             </Sidebar.Pushable>
           </div>
         )
       }
     }

export default SidebarNav;
