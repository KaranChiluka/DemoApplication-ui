import {
  Button,
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
// import Signup from './signup';
import useNavigate from '../common/useNavigate';

const Login = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshtoken');
  const signInSchema = Yup.object().shape({
    username: Yup.string().email('Please enter valid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [navigate] = useNavigate();

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

  const handleNavigation = () => {
    navigate([
      {
        label: 'Signup',
        link: '/signup',
      },
    ]);
  };

  return (
    <div className='new-login'>
      <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <span>
          <h1>DemoApplication</h1>
        </span>
      </div>
      <div className='form-block'>
        <div className='block-border'>
          <div>
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
                  error={formik.touched.username && Boolean(formik.errors.username)}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}></TextField>
              </div>
              {formik.touched.username && formik.errors.username ? (
                <div className='err-msg'>{formik.errors.username}</div>
              ) : null}
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
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='password'
                  endAdornment={
                    formik.values.password !== '' && (
                      <InputAdornment position='end'>
                        <IconButton
                          size='small'
                          aria-label='toggle password visibility'
                          onClick={() => setShowPassword((show) => !show)}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className='err-msg'>{formik.errors.password}</div>
              ) : null}
              <div className='btn-block'>
                <Button size='small' type='submit'>
                  Login
                </Button>
              </div>
            </form>
          </div>
          <div className='signup'>
            <span onClick={() => handleNavigation()}>Create New User</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
