import { Card, Paper } from '@mui/material';
import React from 'react';
import globalObject from '../common/global-variable';
import { getInitials } from '../common/commonUtils';

const Profile = () => {
  return (
    <div>
      <Paper variant='outlined' className='profile'>
        <div>
          <Card variant='outlined' className='profile-card' sx={{ marginTop: '10px' }}>
            <div></div>
          </Card>
          <div
            className='initials initial-card'
            style={{ width: '20px', backgroundColor: 'black' }}>
            {getInitials(globalObject.userObject)}
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Profile;
