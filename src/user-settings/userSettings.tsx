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
    <Box sx={{ backgroundBlendMode: 'darken' }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <nav aria-label='user settings'>
            <List sx={{ borderRight: '1px solid #888', marginTop: '8px' }} disablePadding={true}>
              <ListItem
                sx={{
                  borderBottom: '1px solid #888',
                  textAlign: 'center',
                  backgroundColor: 'black',
                  opacity: '4px',
                  color: 'white',
                }}>
                <ListItemText>Settings</ListItemText>
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
        <Grid item xs={10}>
          {selectedTab == SETTINGS_TABS.GLOBAL_SETTING && <GlobalSettings />}
          {selectedTab == SETTINGS_TABS.PROFILE && <Profile />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserSettings;
