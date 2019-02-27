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


class App extends Component {
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


export default withRouter(connect(mapStateToProps)(App));
