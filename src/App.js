import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Login from './Components/Login'
import Map from './Components/Map'
import Signup from './Components/Signup'
import Sidebar from './Containers/Sidebar'



class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/" component={Sidebar}/>
      </Switch>
      </div>
    );
  }
}


// const mapStateToProps = state => {
//   return{
//     countValue: state.count
//   }
// }

// export default connect(mapStateToProps)(App)
export default App;
