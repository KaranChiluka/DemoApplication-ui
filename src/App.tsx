import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Navigate, Outlet } from 'react-router-dom';
import { Backdrop, Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavBar from './common/navBar';
import { getCurrentUser } from './service/userServices';
import globalObject from './common/global-variable';
import { redirectToLogin } from './common/commonUtils';

const getLoginUrl = () => {
  return `/login?from=${btoa(window.location.pathname + window.location.search)}`;
};

export default function App() {
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');
  useEffect(() => {
    if(token){
      setLoading(true);
    getCurrentUser(token)
      .then((resp) => {
        globalObject.userObject = resp.data;
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        redirectToLogin();
      });
    }
  }, [token]);
  return (
    <React.Fragment>
      {token && (
        <div id='detail'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {!loading && globalObject.userObject.id && (
              <>
                <NavBar />
                <div>
                  <Box>
                    <Outlet />
                  </Box>
                </div>
              </>
            )}
            {loading && (
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}>
                <CircularProgress color='inherit' />
              </Backdrop>
            )}
          </LocalizationProvider>
        </div>
      )}
      {!token && (
        <div>
          <Navigate to={getLoginUrl()} />
        </div>
      )}
    </React.Fragment>
  );
}
