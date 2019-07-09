import React from 'react';
import './App.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      lastname: '',
      flash: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(event) {
    alert('Your form was submitted!');
    event.preventDefault();
    console.log(this.state);
    
    fetch('/auth/signup', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.state),
    })
      .then(res => res.json())
      .then(
        res => this.setState({flash: res.flash}),
        error => this.setState({flash: error.flash}),
      );
  }

  render() {
    return (
      <div className='form'>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>email</label>
          <input
            type='email'
            value={this.state.email}
            name='email'
            onChange={this.handleChange}
          />
          <label>password</label>
          <input
            type='text'
            value={this.state.password}
            name='password'
            onChange={this.handleChange}
          />
          <label>name</label>
          <input
            type='text'
            value={this.state.name}
            name='name'
            onChange={this.handleChange}
          />
          <label>lastName</label>
          <input
            type='text'
            value={this.state.lastname}
            name='lastname'
            onChange={this.handleChange}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default SignUp;
