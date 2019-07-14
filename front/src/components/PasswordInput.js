import React from 'react';
import {TextField} from '@material-ui/core';

const PasswordInput = props => {
  return (
    <React.Fragment>
      <label>Password</label>
      <TextField
        type='password'
        value={props.password}
        name='password'
        onChange={props.handleChange}
      />
    </React.Fragment>
  );
};

export default PasswordInput;
