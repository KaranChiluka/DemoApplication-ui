import { Button, InputLabel, TextField } from '@mui/material';
import useNavigate from '../common/useNavigate';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { saveUser } from '../service/loginService';
const Signup = () => {
  const [navigate] = useNavigate();
  const signInSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    name: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    phoneNumber: Yup.string().required('PhoneNumber is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      phoneNumber: '',
    },
    onSubmit: (values) => {
      signup(values);
    },
    validationSchema: signInSchema,
  });

  const signup = (value: any) => {
    console.log(value);
    // gethealth()
    //   .then((resp) => {
    //     console.log(resp);
    //     alert('Sucessfully login');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert('unsucessfull login');
    //   });
    saveUser(value)
      .then((resp) => {
        console.log(resp.data);
        alert('sucessfully login');
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
              <div>
                <InputLabel className='input-label' htmlFor='email'>
                  Email:
                </InputLabel>
                <TextField
                  id='email'
                  className='new-form-field'
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className='err-msg'>{formik.errors.email}</div>
              ) : null}
              <div>
                <InputLabel className='input-label' htmlFor='name'>
                  Username:
                </InputLabel>
                <TextField
                  id='name'
                  className='new-form-field'
                  value={formik.values.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.name && formik.errors.name ? (
                <div className='err-msg'>{formik.errors.name}</div>
              ) : null}
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
              <div className='btn-block'>
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
