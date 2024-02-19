import {
  Box,
  Grid,
  List,
  ListItem,
  // ListItemIcon,
  // ListItemText,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useEffect, useState } from 'react';
import GlobalSettings from './globalSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import Profile from './profile';

const UserSettings = () => {
  const SETTINGS_TABS = {
    PROFILE: 'Profile',
    GLOBAL_SETTING: 'Global Setting',
  };

  const [selectedTab, setSelectedTab] = useState('');
  const handleClick = (tab: string) => {
    setSelectedTab(tab);
  };

  useEffect(() => setSelectedTab(SETTINGS_TABS.PROFILE), []);
  return (
    <Box className='home'>
      <Grid container className='grid-container'>
        <Grid item className='grid-item-list'>
          <nav aria-label='user settings'>
            <List className='list-container' disablePadding={true}>
              <ListItem className='list-item-menu'>
                <p className='list-text'>Settings</p>
                <SettingsIcon className='list-icons' />
              </ListItem>
              <ListItem
                // disablePadding
                // selected={selectedTab == SETTINGS_TABS.PROFILE}
                className={
                  selectedTab == SETTINGS_TABS.PROFILE ? 'list-item-selected' : 'list-item'
                }
                onClick={() => handleClick(SETTINGS_TABS.PROFILE)}>
                <p className='list-text'>{SETTINGS_TABS.PROFILE}</p>
                <PersonIcon className='list-icons' />
              </ListItem>
              <ListItem
                // disablePadding
                // selected={selectedTab == SETTINGS_TABS.GLOBAL_SETTING}
                // sx={{ borderBottom: '1px solid #888' }}
                className={
                  selectedTab == SETTINGS_TABS.GLOBAL_SETTING ? 'list-item-selected' : 'list-item'
                }
                onClick={() => handleClick(SETTINGS_TABS.GLOBAL_SETTING)}>
                <p className='list-text'>{SETTINGS_TABS.GLOBAL_SETTING}</p>
                <SettingsIcon className='list-icons' />
              </ListItem>
            </List>
          </nav>
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
