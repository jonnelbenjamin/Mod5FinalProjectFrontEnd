import React from 'react';
import {Menu, Button, Icon, Segment, Sidebar} from 'semantic-ui-react';
import {Route, Switch, Link, withRouter} from 'react-router-dom'
import MapContainer from '../Components/MapContainer'
import Organizations from './Organizations'
import { connect } from 'react-redux'
import MyProfile from './MyProfile'
import About from '../Components/About'
import Analysis from '../Components/Analysis'
import { loggingOut} from '../Redux/actions'
import UnitedReliefLogo from '../UnitedReliefLogo.png'

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
          name='rss square'
          className="rss"
          />
        <img className="navbarOrgName"src={UnitedReliefLogo} alt=""/>
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
        <div className="earth">
          <div></div>
        </div>

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
            <Link to="/main/myprofile"><Menu.Item>
              <Icon name='address card outline' />
              My Profile
            </Menu.Item></Link>
            <Link to="/main"><Menu.Item>
              <Icon name='map' />
              Map
            </Menu.Item></Link>
          <Link to="/main/organizations"><Menu.Item>
              <Icon name='building' />
              Organizations
            </Menu.Item></Link>
          <Link to="/main/analysis"><Menu.Item>
              <Icon name='chart area' />
              Analysis
            </Menu.Item></Link>
          <Link to="/main/about"><Menu.Item>
              <Icon name='file alternate outline' />
              About
            </Menu.Item></Link>
          <Link to="/login" onClick={this.handleLogout}><Menu.Item>
              <Icon name='sign-out' />
              Sign Out
            </Menu.Item></Link>
            <Button circular color='facebook' href='https://www.facebook.com/'icon='facebook' className="socialMediaButtons"/>
            <Button circular color='twitter' href='https://www.twitter.com/'icon='twitter' className="socialMediaButtons"/>
            <Button circular color='linkedin' href='https://www.linkedin.com/'icon='linkedin' className="socialMediaButtons"/>
            <Button circular color='google plus' href='https://www.googleplus.com/'icon='google plus' className="socialMediaButtons"/>
            <Button circular color='instagram' href='https://www.instagram.com/'icon='instagram' className="socialMediaButtons"/>

          </Sidebar>
          <Sidebar.Pusher>
                 <Segment basic id="mapSegment">

                   <Switch>
                     <Route path="/main/myprofile" component={MyProfile}/>
                    <Route path="/main/organizations" component={Organizations}/>
                    <Route path="/main/about" component={About}/>
                    <Route path="/main/analysis" component={Analysis}/>
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
