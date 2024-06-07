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
// import { updateUser } from '../service/userServices';
// import { Paper } from '@mui/material';

const Profile = () => {
  // const [editProfile, setEditProfile] = useState(true);

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
    <div
      style={{
        backgroundColor: '#282c34',
        color: '#3380b3',
        borderRadius: '6px',
        width: '90%',
        margin: 'auto',
      }}>
      <h3>Profile</h3>
      <form onSubmit={formik.handleSubmit} style={{ width: '70%', margin: 'auto' }}>
        <div className='initials' style={{ width: '100px', height: '100px', float: 'left' }}>
          {getInitials(globalObject.userObject)}
        </div>
        <div style={{ width: '40%', margin: 'auto' }}>
          <TextField
            size='small'
            color='warning'
            value={formik.values.firstName}
            id='firstName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            size='small'
            color='warning'
            value={formik.values.lastName}
            id='lastName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            size='small'
            color='warning'
            value={formik.values.email}
            id='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            size='small'
            color='warning'
            value={formik.values.phoneNumber}
            id='phoneNumber'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className='btn-block'>
          <Button size='small' type='submit' onClick={() => formik.handleSubmit}>
            Edit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
