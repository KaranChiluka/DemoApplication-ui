import {
  Box,
  Grid,
  // List,
  // ListItem,
  // ListItemIcon,
  // ListItemText,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import GlobalSettings from './globalSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import Profile from './profile';

const UserSettings = () => {
  const SETTINGS_TABS = {
    PROFILE: 'Profile',
    GLOBAL_SETTING: 'Global Setting',
  };

  const [selectedTab, setSelectedTab] = useState(SETTINGS_TABS.PROFILE);
  const handleClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <Box>
      <Grid container sx={{ flexDirection: 'column' }}>
        <Grid item>
          <div className='user-settings'>
            <div className='list-item-menu-settings'>
              <SettingsIcon className='list-icons-settings' />
            </div>
            <div className='pipe'>|</div>
            <div
              // disablePadding
              // selected={selectedTab == SETTINGS_TABS.PROFILE}
              className={
                selectedTab == SETTINGS_TABS.PROFILE
                  ? 'list-item-menu-settings-selected'
                  : 'list-item-menu-settings'
              }
              onClick={() => handleClick(SETTINGS_TABS.PROFILE)}>
              <PersonIcon className='list-icons-settings' />
              <p className='list-text'>{SETTINGS_TABS.PROFILE}</p>
            </div>
            <div className='pipe'>|</div>
            <div
              // disablePadding
              // selected={selectedTab == SETTINGS_TABS.GLOBAL_SETTING}
              // sx={{ borderBottom: '1px solid #888' }}
              className={
                selectedTab == SETTINGS_TABS.GLOBAL_SETTING
                  ? 'list-item-menu-settings-selected'
                  : 'list-item-menu-settings'
              }
              onClick={() => handleClick(SETTINGS_TABS.GLOBAL_SETTING)}>
              <SettingsIcon className='list-icons-settings' />
              <p className='list-text'>{SETTINGS_TABS.GLOBAL_SETTING}</p>
            </div>
          </div>
        </Grid>
        <Grid item className='grid-item-gamecard'>
          {selectedTab == SETTINGS_TABS.GLOBAL_SETTING && <GlobalSettings />}
          {selectedTab == SETTINGS_TABS.PROFILE && <Profile />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserSettings;
