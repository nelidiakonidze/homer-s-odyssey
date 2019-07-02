import React from 'react';
import './App.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      verificationPassword: '',
      name: '',
      lastName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Your form was submitted!');
    event.preventDefault();
    console.log(this.state);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className='form'>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>email</label>
          <input
            type='email'
            value={this.state.value}
            name='email'
            onChange={this.handleChange}
          />
          <label>password</label>
          <input
            type='text'
            value={this.state.value}
            name='password'
            onChange={this.handleChange}
          />
          <label>Verification password</label>
          <input
            type='text'
            value={this.state.value}
            name='verificationPassword'
            onChange={this.handleChange}
          />
          <label>name</label>
          <input
            type='text'
            value={this.state.value}
            name='name'
            onChange={this.handleChange}
          />
          <label>lastName</label>
          <input
            type='text'
            value={this.state.value}
            name='lastName'
            onChange={this.handleChange}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default SignUp;
