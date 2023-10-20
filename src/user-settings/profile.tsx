import { Paper } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {
  return (
    <div>
      {/* <div
        style={{
          boxShadow: '3px 3px 3px',
          backgroundColor: 'white',
          border: '1px solid black',
          width: '40%',
          height: '150px',
          margin: 'auto',
          marginTop: '20px',
          borderRadius: '10px',
        }}> */}
      <Paper
        sx={{
          boxShadow: '3px 3px 3px',
          width: '80%',
          height: '150px',
          margin: 'auto',
          marginTop: '10px',
          paddingTop: '10px',
        }}>
        <Paper sx={{ width: '95%', margin: 'auto', paddingTop: '10px' }}>
          <div
            className='profile'
            style={{
              marginTop: '10px',
              border: 'black',
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '100px',
              width: '80px',
              height: '80px',
            }}></div>
          <div
            style={{
              color: 'black',
              backgroundColor: 'white',
              width: '10%',
              height: '10%',
            }}>
            <EditIcon />
          </div>
        </Paper>
      </Paper>
      {/* </div> */}
    </div>
  );
};

export default Profile;
