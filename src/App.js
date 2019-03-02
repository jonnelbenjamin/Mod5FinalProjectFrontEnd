import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Sidebar from './Containers/Sidebar'
import MapContainer from './Components/MapContainer'
import Organizations from './Containers/Organizations'
import {stayLoggedInOnRefresh} from './Redux/actions'


class App extends Component {

  componentDidMount(){
    this.props.stayLoggedInOnRefresh()
  }

  render() {
    return (
      <div className="App">
      <Switch>
      <Route path="/signup" component={Signup}/>
      <Route path="/main" component={Sidebar}/>
      <Route path="/organizations" component={Organizations}/>
      <Route path="/" render={(props) => (this.props.currentUser ? <Redirect to='/main' /> : (<Login />) )} />
      </Switch>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    stayLoggedInOnRefresh: () => {dispatch(stayLoggedInOnRefresh())}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
