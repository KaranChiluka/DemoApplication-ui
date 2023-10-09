import React, { useEffect, useState } from 'react';
import './navBar.css';
import useNavigate from '../common/useNavigate';

const NavBar = () => {
  const [navigate] = useNavigate();
  const [parentPath, setParentPath] = useState('');

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
          <p>userrole</p>
        </div>
        {/*User Initials*/}
        <div className='initials'>UI</div>
      </div>
    </div>
  );
};

export default NavBar;
