import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Login from './Components/Login'



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Login/>
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