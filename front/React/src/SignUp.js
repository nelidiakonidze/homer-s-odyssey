import React from 'react';
import './App.css';

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <input type='email' name='email' />
        <button>Submit</button>
      </div>
    );
  }
}

export default SignUp;
