import { Box, Paper } from '@mui/material';
import React from 'react';

const globalSettings = () => {
  return (
    <div>
      <Box sx={{ width: 200, marginLeft: 2 }}>
        <Paper
          sx={{
            boxShadow: '2px 2px 2px 2px',
            minWidth: '80vw',
            textAlign: 'left',
            paddingLeft: '20px',
            marginRight: '16px',
          }}>
          <h3>Global Settings</h3>
        </Paper>
        <Paper></Paper>
      </Box>
    </div>
  );
};

export default globalSettings;
