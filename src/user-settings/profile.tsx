// import { Person } from '@mui/icons-material';
// import { Button, InputLabel, Paper, TextField } from '@mui/material';
// import React, { useState } from 'react';
// import globalObject from '../common/global-variable';
// import EditIcon from '@mui/icons-material/Edit';
// import SaveIcon from '@mui/icons-material/Save';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { UserDetails } from '../models/user-details-model';
import { Button, TextField } from '@mui/material';
// import { useEffect } from 'react';
import globalObject from '../common/global-variable';
import { updateUser } from '../service/loginService';
import { getInitials } from '../common/commonUtils';
import { useState } from 'react';
// import { updateUser } from '../service/userServices';
// import { Paper } from '@mui/material';

const Profile = () => {
  const [editProfile, setEditProfile] = useState(false);

  // const userDetailsSchema = Yup.object().shape({
  //   email: Yup.string().required('Email is required'),
  //   firstName: Yup.string().required('First Name Is required'),
  //   lastName: Yup.string().required('Last Name is required'),
  //   PhoneNumber: Yup.string().required('Phone Number is requied'),
  // });

  const formik = useFormik({
    initialValues: {
      id: globalObject.userObject.id || '',
      firstName: globalObject.userObject.firstName || '',
      lastName: globalObject.userObject.lastName || '',
      email: globalObject.userObject.email || '',
      phoneNumber: globalObject.userObject.phoneNumber || '',
    } as UserDetails,
    // validationSchema: userDetailsSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      updateUser(values)
        .then((_resp) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div style={{ height: '100%', width: '100%' }}>
      {/* <h3>Profile</h3> */}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className='initials' style={{ width: '100px', height: '100px', float: 'left' }}>
            {getInitials(globalObject.userObject)}
          </div>
          <div style={{ backgroundColor: '#282c34', height: '100%' }}>
            {editProfile ? (
              <div style={{ display: 'flex', gap: '1rem' }}>
                <TextField
                  className='new-form-field'
                  size='small'
                  color='warning'
                  value={formik.values.firstName}
                  id='firstName'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <TextField
                  className='new-form-field'
                  size='small'
                  color='warning'
                  value={formik.values.lastName}
                  id='lastName'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '2rem', color: 'white' }}>
                <div style={{ width: '10%' }}>{formik.values.firstName}</div>
                <div style={{ width: '10%' }}>{formik.values.lastName}</div>
              </div>
            )}
            {editProfile ? (
              <div style={{ display: 'flex', gap: '1rem' }}>
                <TextField
                  className='new-form-field'
                  size='small'
                  color='warning'
                  value={formik.values.email}
                  id='email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <TextField
                  className='new-form-field'
                  size='small'
                  color='warning'
                  value={formik.values.phoneNumber}
                  id='phoneNumber'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '2rem', color: 'white' }}>
                <div style={{ width: '10%' }}>{formik.values.email}</div>
                <div style={{ width: '10%' }}>{formik.values.phoneNumber}</div>
              </div>
            )}
            <div>
              {!editProfile ? (
                <Button
                  sx={{
                    color: 'white',
                    backgroundColor: '#22242b',
                    border: '1px solid white',
                  }}
                  size='small'
                  type='submit'
                  onClick={() => {
                    formik.handleSubmit();
                    setEditProfile(true);
                  }}>
                  Edit
                </Button>
              ) : (
                <Button
                  sx={{ color: 'white' }}
                  size='small'
                  type='submit'
                  onClick={() => {
                    formik.handleSubmit();
                    setEditProfile(true);
                  }}>
                  Save
                </Button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
