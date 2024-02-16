// import { Person } from '@mui/icons-material';
// import { Button, InputLabel, Paper, TextField } from '@mui/material';
// import React, { useState } from 'react';
// import globalObject from '../common/global-variable';
// import EditIcon from '@mui/icons-material/Edit';
// import SaveIcon from '@mui/icons-material/Save';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateUser } from '../service/loginService';
import { UserDetails } from '../models/user-details-model';
// import { Paper } from '@mui/material';

const Profile = () => {
  // const [editProfile, setEditProfile] = useState(false);

  const userDetailsSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    firstName: Yup.string().required('First Name Is required'),
    lastName: Yup.string().required('Last Name is required'),
    PhoneNumber: Yup.string().required('Phone Number is requied'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    } as UserDetails,
    onSubmit: () => {
      updateUser(formik.values)
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err));
    },
    validationSchema: userDetailsSchema,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  return (
    <div>
      {/* <Paper variant='outlined' className='profile'> */}
      {/* <div> */}
      <h3>Profile</h3>
      {/* </div> */}
      {/* <div className='profile-card'>
          <form onSubmit={(values) => formik.handleSubmit(values)}>
            <Person sx={{ marginTop: '20px', minHeight: '100px', minWidth: '100px' }}></Person>
            {!editProfile && (
              <>
                <h2
                  style={{
                    marginTop: '10px',
                  }}>{`${globalObject.userObject.firstName} ${globalObject.userObject.lastName}`}</h2>
                <div style={{ marginBottom: '20px' }}>{globalObject.userObject.email}</div>
              </>
            )}
            {editProfile && (
              <>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px',
                  }}>
                  <InputLabel>UserName: </InputLabel>
                  <TextField
                    size='small'
                    id='firstName'
                    value={formik.values.firstName}
                    defaultValue={globalObject.userObject.firstName}
                    sx={{ width: '120px', marginLeft: '10px' }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='new-form-field'
                    label='FirstName'></TextField>
                  <TextField
                    id='lastName'
                    value={formik.values.lastName}
                    defaultValue={globalObject.userObject.lastName}
                    sx={{ width: '120px', marginLeft: '10px' }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='new-form-field'
                    label='LastName'></TextField>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <InputLabel>Email: </InputLabel>
                  <TextField
                    id='email'
                    value={formik.values.email}
                    defaultValue={globalObject.userObject.email}
                    sx={{ width: '200px', marginLeft: '10px' }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='new-form-field'
                    label='Email'></TextField>
                </div>
              </>
            )}
            <div className='btn-bg'>
              {!editProfile && (
                <Button onClick={() => setEditProfile(true)}>
                  <EditIcon fontSize='small' />
                  Edit Profile
                </Button>
              )}
              {editProfile && (
                <Button
                  onClick={() => {
                    formik.handleSubmit();
                    setEditProfile(false);
                  }}>
                  <SaveIcon fontSize='small' />
                  Save
                </Button>
              )}
            </div>
          </form>
        </div> */}
      {/* </Paper> */}
    </div>
  );
};

export default Profile;
