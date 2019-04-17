import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { signingUp } from '../Redux/actions'
import { connect } from 'react-redux'



class Signup extends Component {

  state = {
        email: "",
        password: ""
      };

      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

      handleSignUp = (e) => {
        let newUser = this.state
        debugger
        this.props.signingUp(newUser)
      }

render() {
  return (
    <div>
      <video id="video"loop muted autoPlay playsInline poster={'http://cdn.lowgif.com/full/11216b6363732104-hud-is-static.gif'}>
        <source src={'http://cdn.lowgif.com/full/11216b6363732104-hud-is-static.gif'} type="video/mp4" />
      </video>

    <div className='login-page' id="signup">
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header textAlign='center' >
                 <h4 id="signupHeader">Signup</h4>
              </Header>
              <Form>
                <Segment stacked>
                  <Form.Input
                    className='emailInput'
                    name='email'
                    placeholder='Email'
                    type='email'
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    className='passwordInput'
                    name='password'
                    placeholder='Password'
                    type='password'
                    onChange={this.handleChange}
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
  <Button className="loginButton" onClick={this.handleSignUp}>
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

const mapDispatchToProps = dispatch => {
    return {
      signingUp: (newUser) => {dispatch(signingUp(newUser))}
    }
  }

export default connect(null, mapDispatchToProps)(Signup);
