import React from 'react';
import {TextField} from '@material-ui/core';

const EmailInput = props => {
  return (
    <React.Fragment>
      <label>Email</label>
      <TextField
        type='email'
        value={props.email}
        name='email'
        onChange={props.handleChange}
      />
    </React.Fragment>
  );
};

export default EmailInput;
