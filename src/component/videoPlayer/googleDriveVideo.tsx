import { Grid, List, ListItem } from '@mui/material';
import React, { useState } from 'react';

const GoogleDriveVideo: React.FC = () => {
  const videoUrls = [
    {
      id: '1PWdykiEKiocATLEZoY9RyVu9EUtr6J2i/preview',
      name: '1-Introduction',
    },
    {
      id: '17iRxgfEhkPAnZGh1q6Jsbo17oXz8pIsK/preview',
      name: '2-What is Angular?',
    },
    {
      id: '1BF2SZzdwUfvlAlyL22uvkLz1bb8ruq8z/preview',
      name: '3-Architecture of Angular Apps',
    },
  ];

  const [selectedvideo, setSelectedVideo] = useState('1PWdykiEKiocATLEZoY9RyVu9EUtr6J2i/preview');

  return (
    <Grid container className='grid-container'>
      <Grid item style={{ height: '100vh' }}>
        <List className='list-container'>
          {videoUrls.map((val, index) => (
            <ListItem
              className='list-item-menu'
              key={index}
              onClick={() => setSelectedVideo(val.id)}
              style={{ cursor: 'pointer', paddingBottom: '10px' }}>
              {val.name}
            </ListItem>
          ))}
        </List>
      </Grid>
      <iframe
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        // title={'java'}
        src={`https://drive.google.com/file/d/${selectedvideo}`}
        width='640'
        height='480'></iframe>
    </Grid>
  );
};

export default GoogleDriveVideo;
