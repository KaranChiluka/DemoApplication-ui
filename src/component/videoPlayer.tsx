import { Grid, List, ListItem } from '@mui/material';
import React from 'react';

const VideoPlayer = () => {
  return (
    <Grid container className='grid-container'>
      <Grid item className='grid-item-list'>
        <List className='list-container'>
          <ListItem className='list-item'>
            <p className='list-text'>Titles</p>
          </ListItem>
        </List>
      </Grid>
      <Grid item>
        <p>Video Player</p>
      </Grid>
    </Grid>
  );
};

export default VideoPlayer;
