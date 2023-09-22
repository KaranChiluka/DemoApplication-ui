import { InputLabel, TextField } from '@mui/material';
import React from 'react';

const signup = () => {
  return (
    <div>
      <div>
        <InputLabel>Username:</InputLabel>
        <TextField />
        <InputLabel>Password:</InputLabel>
        <TextField />
        <InputLabel>Email:</InputLabel>
        <TextField />
        <InputLabel>PhoneNumber:</InputLabel>
      </div>
    </div>
  );
};

export default signup;
