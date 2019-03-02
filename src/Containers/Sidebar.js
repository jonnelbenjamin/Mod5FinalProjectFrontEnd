import React from 'react';
import {Menu, Button, Icon, Segment, Sidebar} from 'semantic-ui-react';
import {Route, Switch, Link, withRouter} from 'react-router-dom'
import MapContainer from '../Components/MapContainer'
import Organizations from './Organizations'
import { connect } from 'react-redux'
import MyProfile from './MyProfile'
import { loggingOut} from '../Redux/actions'

class SidebarNav extends React.Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  handleLogout = () => {
    this.props.loggingOut()
    localStorage.clear()
    
  }


  render() {
    const { visible } = this.state

    return (
      <div>
      <div id="mainTop">
        <Icon
          name='signal'
          className="signal"
          />
        <h1 className="navbarOrgName">United Relief</h1>
        <div>
        <Button.Group className="menuButton">
          <Button inverted disabled={visible} onClick={this.handleShowClick}>
            Menu
          </Button>
          <Button
            className='disableMenuButton'
            inverted disabled={!visible}
            onClick={this.handleHideClick}>
            Menu
          </Button>
        </Button.Group>
   <Button circular color='facebook' icon='facebook' className="socialMediaButtons"/>
   <Button circular color='twitter' icon='twitter' className="socialMediaButtons"/>
   <Button circular color='linkedin' icon='linkedin' className="socialMediaButtons"/>
   <Button circular color='google plus' icon='google plus' className="socialMediaButtons"/>

   </div>
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
            <Link to="/main/myprofile"><Menu.Item as='a'>
              <Icon name='address card outline' />
              My Profile
            </Menu.Item></Link>
            <Link to="/main"><Menu.Item as='a'>
              <Icon name='map' />
              Map
            </Menu.Item></Link>
          <Link to="/main/organizations"><Menu.Item as='a'>
              <Icon name='building' />
              Organizations
            </Menu.Item></Link>
          <Link to="/login" onClick={this.handleLogout}><Menu.Item as='a'>
              <Icon name='sign-out' />
              Sign Out
            </Menu.Item></Link>
          </Sidebar>
          <Sidebar.Pusher>
                 <Segment basic id="mapSegment">

                   <Switch>
                     <Route path="/main/myprofile" component={MyProfile}/>
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

     const mapDispatchToProps = dispatch => {
       return {
         loggingOut: () => {dispatch(loggingOut())}
       }
     }


export default withRouter(connect(null,mapDispatchToProps)(SidebarNav));
