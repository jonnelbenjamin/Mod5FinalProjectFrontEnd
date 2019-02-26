import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon, Message, Segment, Container } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import loginVid from '../ezgif.com-gif-maker.gif'



class Login extends Component {
render() {
  return (
    <div>
      <video id="video"loop muted autoplay playsinline poster={loginVid}>
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
                    name='username'
                    placeholder='Username'
                    fluid icon='user'
                    iconPosition='left'
                  />
                  <Form.Input
                    className='passwordInput'
                    name='password'
                    placeholder='Password'
                    type='password'
                    fluid icon='lock'
                    iconPosition='left'
                  />
                  <Button className="loginButton">
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



export default Login;
