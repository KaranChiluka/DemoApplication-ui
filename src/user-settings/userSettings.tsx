import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
                <ListItemText className='list-text'>Settings</ListItemText>
              </ListItem>
              <ListItem
                disablePadding
                selected={selectedTab == SETTINGS_TABS.PROFILE}
                sx={{ borderBottom: '1px solid #888' }}
                onClick={() => handleClick(SETTINGS_TABS.PROFILE)}>
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={SETTINGS_TABS.PROFILE} />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                selected={selectedTab == SETTINGS_TABS.GLOBAL_SETTING}
                sx={{ borderBottom: '1px solid #888' }}
                onClick={() => handleClick(SETTINGS_TABS.GLOBAL_SETTING)}>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary={SETTINGS_TABS.GLOBAL_SETTING} />
                </ListItemButton>
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
