import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Divider } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'
import { loggingIn } from '../Redux/actions'
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
      <video id="video"loop muted autoPlay playsInLine poster={'http://cdn.lowgif.com/full/11216b6363732104-hud-is-static.gif'}>
        <source src={'http://cdn.lowgif.com/full/11216b6363732104-hud-is-static.gif'} type="video/mp4" />
      </video>

      <h1 id="loginTitle">United Relief</h1>
      <Segment placeholder id="login">
          <Grid columns={2} relaxed='very' stackable >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Form>
                  <Form.Input
                    className='usernameInput'
                    name='email'
                    placeholder='E-mail'
                    label='E-mail'
                    fluid icon='user'
                    iconPosition='left'
                    onChange={this.handleChange}
                   value={this.state.email}
                  />
                  <Form.Input
                    className='passwordInput'
                    name='password'
                    placeholder='Password'
                    label='Password'
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
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>

              <Link to="/signup"><Button content='Sign up' icon='signup' size='big'/></Link>

            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>

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
