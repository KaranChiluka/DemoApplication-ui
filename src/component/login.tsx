import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshtoken');
  const signInSchema = Yup.object().shape({
    username: Yup.string().email('Please enter valid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const [showPassword, setShowPassword] = useState(false);
  // const [navigate] = useNavigate();

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const login = (values: any) => {
    if (values) alert('Sucessfull Login');
    else alert('Unsucessfull Login');
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      login(values);
    },
    validationSchema: signInSchema,
  });

  return (
    <div className='new-login'>
      <div className='form-block'>
        <Grid>
          <div className='welcome-text'>
            <h1>Login</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <InputLabel className='input-label' htmlFor='username'>
                Username:{' '}
              </InputLabel>
              <TextField
                id='username'
                className='new-form-field'
                placeholder='enter your username'
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}></TextField>
            </div>
            <div>
              <InputLabel className='input-label' htmlFor='password-field'>
                Password:{' '}
              </InputLabel>
              <OutlinedInput
                id='password-field'
                type={showPassword ? 'text' : 'password'}
                value={formik.values.password}
                className='new-form-field'
                placeholder='enter your password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name='password'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowPassword((show) => !show)}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <div className='btn-block'>
              <Button size='small' type='submit'>
                Login
              </Button>
            </div>
          </form>
          <a href='/signup' className='signup'>
            signup
          </a>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
