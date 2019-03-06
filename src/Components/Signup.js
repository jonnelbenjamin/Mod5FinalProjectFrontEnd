import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon, Message, Segment, Container } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import loginVid from '../ezgif.com-gif-maker.gif'



class Signup extends Component {
render() {
  return (
    <div>
      <video id="video"loop muted autoplay playsinline poster={'http://cdn.lowgif.com/full/11216b6363732104-hud-is-static.gif'}>
        <source src={'http://cdn.lowgif.com/full/11216b6363732104-hud-is-static.gif'} type="video/mp4" />
      </video>

    <div className='login-page' id="signup">
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' textAlign='center' >
                 <h4 id="signupHeader">Signup</h4>
              </Header>
              <Form>
                <Segment stacked>
                  <Form.Input
                    className='emailInput'
                    name='email'
                    placeholder='Email'
                    type='email'
                  />
                  <Form.Input
                    className='passwordInput'
                    name='password'
                    placeholder='Password'
                    type='password'
                  />
                  <Form.Input
                    className='firstnameInput'
                    name='firstname'
                    placeholder='First Name'
                    type='name'
                  />
                  <Form.Input
                    className='lastnameInput'
                    name='lastname'
                    placeholder='Last Name'
                    type='name'
                  />
                  <Form.Input
                    className='professionInput'
                    name='profession'
                    placeholder='Profession'
                    type='text'
                  />
                  <Form.Input
                    className='creditcardInput'
                    name='creditcard'
                    placeholder='Credit Card #'
                    type='creditcard'
                  />
                  <Link to="/login"><Button animated='fade'>
      <Button.Content visible>Back</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow left' />
      </Button.Content>
    </Button></Link>
                  <Button className="loginButton">
                    Signup
                  </Button>
                </Segment>
              </Form>
              <div className='spacing'></div>

            </Grid.Column>
          </Grid>
        </div>
        </div>
  )
}
}



export default Signup;
