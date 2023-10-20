import React, { useEffect, useState } from 'react';
import './navBar.css';
import useNavigate from '../common/useNavigate';
import { Menu, MenuItem } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';

const NavBar = () => {
  const [navigate, redirect] = useNavigate();
  const [parentPath, setParentPath] = useState('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(
        [
          {
            label: 'Home',
            link: '/home',
          },
        ],
        true,
      );
    }
  });

  useEffect(() => {
    getParentPath(location.pathname);
  }, [location.pathname]);

  function getParentPath(path: string) {
    const parent = path.slice(1).split('/')[0];
    setParentPath((_perv) => `/${parent}`);
  }

  const tabs = [
    {
      label: 'Home',
      link: '/home',
    },
    {
      label: 'ErrorPage',
      link: '/error',
    },
  ];

  const handleTabs = (tab: any) => {
    navigate([
      {
        ...tab,
      },
    ]);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    localStorage.removeItem('Authorization');
    redirect('/login');
  };

  const handleSettings = () => {
    navigate([
      {
        label: 'UserSettings',
        link: '/settings',
      },
    ]);
    setAnchorEl(null);
  };

  return (
    <div className='nav-bar' id='nav-bar'>
      <div className='left-div'>
        <a href='/home' className='logo-anchor'>
          <div className='logo'>DemoApplication</div>
        </a>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={parentPath == tab.link ? 'nav-menu nav-menu-selected' : 'nav-menu'}
            onClick={() => handleTabs(tab)}>
            {tab.label}
            {/* <span>{JSON.stringify({ parent: parentPath, tabs: tab.link })}</span> */}
          </div>
        ))}
      </div>
      <div className='right-div'>
        <div className='user-name'>
          <p>User Name</p>
          <p>user@gmail.com</p>
        </div>
        {/*User Initials*/}
        <div className='initials' onClick={handleOpenMenu}>
          UN
        </div>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          onClose={handleCloseMenu}
          disableAutoFocusItem>
          <MenuItem onClick={handleSettings}>
            <SettingsIcon sx={{ paddingRight: '10px' }} />
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogOut}>
            <PowerSettingsNewIcon sx={{ paddingRight: '10px' }} />
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default NavBar;
