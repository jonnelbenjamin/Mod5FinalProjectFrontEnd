import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon, Message, Segment, Container } from 'semantic-ui-react'


class Login extends Component {
render() {
  return (
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
                  />
                  <Form.Input
                    className='passwordInput'
                    name='password'
                    placeholder='Password'
                    type='password'
                  />
                  <Button className="loginButton">
                    Login
                  </Button>
                </Segment>
              </Form>
              <div className='spacing'></div>
              <Message className='signUpMessage'>
                Sign Up Here
              </Message>
            </Grid.Column>
          </Grid>
        </div>
  )
}
}



export default Login;
