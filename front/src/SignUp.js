import React from 'react';
import {TextField, Button, Snackbar, Icon} from '@material-ui/core';
import './SignUp.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      lastname: '',
      flash: '',
      open: false,
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

    const {email, password, name, lastname} = this.state;

    // Validate fields before sending to BE.

    const payload = {
      email,
      password,
      name,
      lastname,
    };

    fetch('/auth/signup', {
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
            name: '',
            lastname: '',
          }),
        error => this.setState({flash: error.flash}),
      );
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Sign up!</h1>
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
            <label>Password</label>
            <TextField
              type='text'
              value={this.state.password}
              name='password'
              onChange={this.handleChange}
            />
            <label>Name</label>
            <TextField
              type='text'
              value={this.state.name}
              name='name'
              onChange={this.handleChange}
            />
            <label>Last name</label>
            <TextField
              type='text'
              value={this.state.lastname}
              name='lastname'
              onChange={this.handleChange}
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
              Sign up
            </Button>
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

export default SignUp;
