import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon, Message, Segment, Container } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'
import { loggingIn } from '../Redux/actions'
import loginVid from '../ezgif.com-gif-maker.gif'
import { connect } from 'react-redux'




class Login extends Component {
  state = {
        email: "",
        password: ""
      };

      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
  //
      handleLogin = () => {
        let user = this.state
        console.log(user)
        this.props.loggingIn(user)
      }


render() {
  return (
    <div>
      <video id="video"loop muted autoPlay playsInLine poster={loginVid}>
        <source src={loginVid} type="video/mp4" />
      </video>

    <h1>United Relief</h1>
    <div className='login-page'>
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' textAlign='center'>
                 Login
              </Header>
              <Form>
                <Segment stacked>
                  <Form.Input
                    className='usernameInput'
                    name='email'
                    placeholder='E-mail'
                    fluid icon='user'
                    iconPosition='left'
                    onChange={this.handleChange}
                   value={this.state.email}
                  />
                  <Form.Input
                    className='passwordInput'
                    name='password'
                    placeholder='Password'
                    type='password'
                    fluid icon='lock'
                    iconPosition='left'
                    onChange={this.handleChange}
                   value={this.state.password}
                  />
                  <Button className="loginButton"
                    onClick={this.handleLogin}
                    >
                    Login
                  </Button>
                </Segment>
              </Form>
              <div className='spacing'></div>
              <Message className='signUpMessage'>
                <Link to="/signup">Sign Up Here</Link>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
        </div>
  )
}
}

const mapDispatchToProps = dispatch => {
    return {
      loggingIn: (user) => {dispatch(loggingIn(user))}
    }
  }



export default withRouter(connect(null, mapDispatchToProps)(Login));
