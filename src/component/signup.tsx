import { Button, InputLabel, TextField } from '@mui/material';
import useNavigate from '../common/useNavigate';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { saveUser } from '../service/loginService';
const Signup = () => {
  const [navigate] = useNavigate();
  const signInSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    firstName: Yup.string().required('FirstName is required'),
    lastName: Yup.string().required('LastName is required'),
    password: Yup.string().required('Password is required'),
    phoneNumber: Yup.string().required('PhoneNumber is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      phoneNumber: '',
    },
    onSubmit: (values) => {
      signup(values);
    },
    validationSchema: signInSchema,
  });

  const signup = (value: any) => {
    saveUser(value)
      .then((_resp) => {
        navigate([
          {
            label: 'Login',
            link: '/login',
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
        alert('unSucessfull login');
      });
  };

  const handleNavigation = () => {
    navigate([
      {
        label: 'Login',
        link: '/login',
      },
    ]);
  };
  return (
    <div className='new-login'>
      <div className='welcome' style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <span>
          <h1>DemoApplication</h1>
        </span>
      </div>
      <div className='form-block'>
        <div className='block-border'>
          <div>
            <div className='welcome-text'>
              <h1>Signup</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div style={{ width: '100%' }}>
                <InputLabel className='input-label' htmlFor='email'>
                  Email:
                </InputLabel>
                <TextField
                  sx={{
                    width: '100%',
                    backgroundColor: 'rgba(250, 250, 250, 0.7)',
                    borderRadius: '5px',
                    marginBottom: '20px',
                  }}
                  size='small'
                  id='email'
                  // className='new-form-field'
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className='err-msg'>{formik.errors.email}</div>
              ) : null}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '45%' }}>
                  <InputLabel className='input-label' htmlFor='firstName'>
                    FirstName:
                  </InputLabel>
                  <TextField
                    id='firstName'
                    sx={{
                      width: '100%',
                      backgroundColor: 'rgba(250, 250, 250, 0.7)',
                      borderRadius: '5px',
                      marginBottom: '20px',
                    }}
                    size='small'
                    value={formik.values.firstName}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className='err-msg'>{formik.errors.firstName}</div>
                  ) : null}
                </div>
                <div style={{ width: '45%' }}>
                  <InputLabel className='input-label' htmlFor='lastName'>
                    LastName:
                  </InputLabel>
                  <TextField
                    id='lastName'
                    sx={{
                      width: '100%',
                      backgroundColor: 'rgba(250, 250, 250, 0.7)',
                      borderRadius: '5px',
                      marginBottom: '20px',
                    }}
                    size='small'
                    value={formik.values.lastName}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className='err-msg'>{formik.errors.lastName}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <InputLabel className='input-label' htmlFor='password'>
                  Password:
                </InputLabel>
                <TextField
                  id='password'
                  className='new-form-field'
                  value={formik.values.password}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className='err-msg'>{formik.errors.password}</div>
              ) : null}
              <div>
                <InputLabel className='input-label' htmlFor='phoneNumber'>
                  PhoneNumber:
                </InputLabel>
                <TextField
                  id='phoneNumber'
                  className='new-form-field'
                  value={formik.values.phoneNumber}
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className='err-msg'>{formik.errors.phoneNumber}</div>
                ) : null}
              </div>
              <div className='btn-block' style={{}}>
                <Button size='small' type='submit'>
                  Signup
                </Button>
              </div>
            </form>
            <div className='signup'>
              <span onClick={() => handleNavigation()}>Already a user</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
