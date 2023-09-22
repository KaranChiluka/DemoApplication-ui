import { Button, InputLabel, TextField } from '@mui/material';
import useNavigate from '../common/useNavigate';

const Signup = () => {
  const [navigate] = useNavigate();
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
      <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
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
            <form>
              <div>
                <InputLabel className='input-lable' htmlFor='email'>
                  Email:
                </InputLabel>
                <TextField className='new-form-field' />
              </div>
              <div>
                <InputLabel className='input-lable' htmlFor='username'>
                  Username:
                </InputLabel>
                <TextField id='username' className='new-form-field' />
              </div>
              <div>
                <InputLabel className='input-lable' htmlFor='password'>
                  Password:
                </InputLabel>
                <TextField className='new-form-field' />
              </div>
              <div>
                <InputLabel className='input-lable' htmlFor='phoneNumber'>
                  PhoneNumber:
                </InputLabel>
                <TextField className='new-form-field' />
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
