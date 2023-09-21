import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Navigate, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import React from 'react';

const getLoginUrl = () => {
  return `/login?from=${btoa(window.location.pathname + window.location.search)}`;
};

export default function App() {
  const token = localStorage.getItem('token');

  return (
    <div className='App'>
      <React.Fragment>
        {token && (
          <div>
            <h1>Hello</h1>
            <>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <Box>
                    <Outlet />
                  </Box>
                </div>
              </LocalizationProvider>
            </>
          </div>
        )}
        {!token && (
          <div>
            <h1>hiiiiiii</h1>
            <Navigate to={getLoginUrl()} />
          </div>
        )}
      </React.Fragment>
    </div>
  );
}
