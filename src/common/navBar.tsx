import React, { useState } from 'react';
import './navBar.css';
import useNavigate from '../common/useNavigate';
import { IconButton, Menu, MenuItem } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';
import globalObject from './global-variable';
import { getInitials } from './commonUtils';
import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => {
  const [navigate, redirect] = useNavigate();
  // const [parentPath, setParentPath] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(null);
  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     navigate(
  //       [
  //         {
  //           label: 'Home',
  //           link: '/home',
  //         },
  //       ],
  //       true,
  //     );
  //   }
  // });

  // useEffect(() => {
  //   getParentPath(location.pathname);
  // }, [location.pathname]);

  // function getParentPath(path: string) {
  //   const parent = path.slice(1).split('/')[0];
  //   setParentPath((_perv) => `/${parent}`);
  // }

  // const tabs = [
  //   {
  //     label: 'Home',
  //     link: '/home',
  //   },
  // {
  //   label: 'ErrorPage',
  //   link: '/error',
  // },
  // ];

  // const handleTabs = (tab: any) => {
  //   navigate([
  //     {
  //       ...tab,
  //     },
  //   ]);
  // };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleNav = (value: any, path: any) => {
  //   navigate([
  //     {
  //       label: value,
  //       link: path,
  //     },
  //   ]);
  //   setAnchorElProfile(null);
  // };

  // const handleCloseMenuProfile = () => {
  //   setAnchorElProfile(null);
  // };

  // const handleOpenMenuProfile = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElProfile(event.currentTarget);
  // };

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
        <div className='menu-icon-container'>
          <IconButton>
            <MenuIcon className='menu-icons' />
          </IconButton>
        </div>
        {/* <Menu
          anchorEl={anchorElProfile}
          open={Boolean(anchorElProfile)}
          // id='long-menu'
          // MenuListProps={{
          //   'aria-labelledby': 'long-button',
          // }}
          // anchorOrigin={{
          //   vertical: 'bottom',
          //   horizontal: 'right',
          // }}
          // keepMounted
          // transformOrigin={{
          //   vertical: 'top',
          //   horizontal: 'right',
          // }}
          onClose={handleCloseMenuProfile}
          disableAutoFocusItem>
          <MenuItem
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            onClick={() => handleNav('Home', '/home')}>
            <HomeIcon />
            <Typography>Home</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleNav('Home', '/home')}>
            <Typography>Courses</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleNav('Home', '/home')}>
            <Typography>Tools</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleNav('Home', '/home')}>
            <Typography>Games</Typography>
          </MenuItem>
        </Menu> */}
        <a href='/home' className='logo-anchor'>
          <div className='logo'>DemoApplication</div>
        </a>
        {
          // tabs.map((tab, index) => (
          //   <div
          //     key={index}
          //     className={parentPath == tab.link ? 'nav-menu nav-menu-selected' : 'nav-menu'}
          //     onClick={() => handleTabs(tab)}>
          //     {tab.label}
          //     {/* <span>{JSON.stringify({ parent: parentPath, tabs: tab.link })}</span> */}
          //   </div>
          // ))
        }
      </div>
      <div className='right-div'>
        <div className='user-name'>
          <p
            style={{
              fontWeight: 'bold',
            }}>{`${globalObject.userObject.firstName} ${globalObject.userObject.lastName}`}</p>
          <p>{globalObject.userObject.email}</p>
        </div>
        {/*User Initials*/}
        <div className='initials' onClick={handleOpenMenu}>
          {getInitials(globalObject.userObject)}
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
