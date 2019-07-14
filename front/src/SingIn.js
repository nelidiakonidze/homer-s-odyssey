import React from 'react';
import {TextField, Button, Snackbar} from '@material-ui/core';
import './SignUp.css';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import PasswordInput from './components/PasswordInput';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      flash: '',
      open: false,
      toProfile: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(event) {
    // alert('Your form was submitted!');
    event.preventDefault();
    console.log(this.state);
    this.setState({open: true});

    const {email, password} = this.state;

    // Validate fields before sending to BE.

    const payload = {
      email,
      password,
    };

    fetch('/auth/signin', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(payload),
    })
      .then(res => res.json())
      .then(
        res =>
          this.setState({
            flash: res.flash,
            email: '',
            password: '',
            toProfile: true,
          }),
        error =>
          this.setState({
            flash: error.flash ? error.flash : 'Something wrong happened!',
          }),
      );
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    if (this.state.toProfile === true) {
      return <Redirect to='/profile' />;
    }
    return (
      <React.Fragment>
        <div>
          <h1>Sign In!</h1>
          <form
            onSubmit={this.handleSubmit}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              margin: '10px',
            }}>
            <label>Email</label>
            <TextField
              type='email'
              value={this.state.email}
              name='email'
              onChange={this.handleChange}
            />
            <PasswordInput
              password={this.state.password}
              handleChange={this.handleChange}
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              component='span'
              onClick={this.handleSubmit}
              style={{
                margin: '5px',
                display: 'flex',
                alignSelf: 'flex-end',
              }}>
              Sign In
            </Button>
            <Link to='/signup'>Go to Sign Up</Link>
          </form>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={this.state.open}
            autoHideDuration={2000}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id='message-id'>{this.state.flash}</span>}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SignIn;
