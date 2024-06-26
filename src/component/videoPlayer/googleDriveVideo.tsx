import { Backdrop, CircularProgress, Grid, List, ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideos } from '../../service/googleDriveService';
// import { Pause, PlayArrow, VolumeOff, VolumeUp } from '@mui/icons-material';
// import ReactPlayer from 'react-player';

const GoogleDriveVideo: React.FC = () => {
  let { courseId } = useParams();
  if (courseId) courseId = atob(courseId);

  const [videos, setVideos] = useState({ courseName: '', list: [] as any[] });
  const [loading, setLoading] = useState(false);
  const [selectedvideo, setSelectedVideo] = useState({ name: '', id: '' });
  // const [playing, setPlaying] = useState(false);
  // const [muted, setMuted] = useState(false);
  // const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setLoading(true);
    getVideos(courseId)
      .then((resp: any) => {
        setLoading(false);
        const initialVideos = sort(sort(resp.data[0].children)[0].children);
        setVideos({ courseName: resp.data[0].name, list: resp.data[0].children });
        if (initialVideos.length > 0) {
          setSelectedVideo({ name: initialVideos[0].name, id: initialVideos[0].id });
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [courseId]);

  const extractNumber = (title: any) => {
    let match;
    if (title.includes('-')) {
      match = title.match(/^(\d+)-/);
    } else {
      match = title.match(/^(\d+)./);
    }
    return match ? parseInt(match[1], 10) : 0;
  };

  const sort = (val: any) => {
    return val.sort((a: any, b: any) => extractNumber(a.name) - extractNumber(b.name));
  };

  // const videoUrls = [
  //   {
  //     id: '1PWdykiEKiocATLEZoY9RyVu9EUtr6J2i/preview',
  //     name: '1-Introduction',
  //   },
  //   {
  //     id: '17iRxgfEhkPAnZGh1q6Jsbo17oXz8pIsK/preview',
  //     name: '2-What is Angular?',
  //   },
  //   {
  //     id: '1BF2SZzdwUfvlAlyL22uvkLz1bb8ruq8z/preview',
  //     name: '3-Architecture of Angular Apps',
  //   },
  // ];

  useEffect(() => {
    console.log('selectedvideos: ', selectedvideo);
  }, [selectedvideo]);

  // const handlePlayPause = () => {
  //   const iframe = iframeRef.current;
  //   if (iframe) {
  //     const player = iframe.contentWindow;
  //     if (player) {
  //       player.postMessage(JSON.stringify({ event: playing ? 'pause' : 'play' }), '*');
  //       setPlaying(!playing);
  //     }
  //   }
  // };

  // const handleMuteUnmute = () => {
  //   const iframe = iframeRef.current;
  //   if (iframe) {
  //     const player = iframe.contentWindow;
  //     if (player) {
  //       player.postMessage(JSON.stringify({ event: muted ? 'unmute' : 'mute' }), '*');
  //       setMuted(!muted);
  //     }
  //   }
  // };

  return (
    <div className='home'>
      {!loading ? (
        <Grid container className='grid-container'>
          <Grid item style={{ height: '100vh', width: '20%' }}>
            <List
              className='list-container'
              style={{ width: '100%', height: '90%', overflow: 'auto' }}>
              <h3 style={{ color: 'white', textAlign: 'center' }}>{videos.courseName}</h3>
              {sort(videos.list).map((val: any, index: any) => (
                <List key={index} disablePadding>
                  <ListItem
                    className='list-item-menu'
                    style={{ cursor: 'pointer', paddingBottom: '10px', height: '100%' }}>
                    {val.name}
                  </ListItem>
                  {sort(val.children).map((e: any, index: any) => (
                    // console.log(e.name);
                    <List key={index} disablePadding>
                      <ListItem
                        style={{
                          cursor: 'pointer',
                          paddingBottom: '10px',
                          borderBottom: '1px solid black',
                          color: 'white',
                          fontSize: 'small',
                          width: '100%',
                        }}
                        onClick={() => {
                          setSelectedVideo({ name: e.name, id: e.id });
                        }}>
                        {e.name}
                      </ListItem>
                    </List>
                  ))}
                </List>
              ))}
            </List>
          </Grid>
          <Grid item>
            {selectedvideo.id && selectedvideo.name && (
              <div
                style={{
                  border: '1px solid black',
                  marginTop: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                {/* <ReactPlayer
                  url={`https://drive.google.com/uc?export=preview&id=${selectedvideo.id}`}
                  controls
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                    facebook: {
                      appId: '12345',
                    },
                  }}
                  playing
                  // width='100%'
                  // height='100%'
                /> */}
                <iframe
                  style={{ border: '0', borderBottom: '1px solid black' }}
                  sandbox='allow-scripts allow-same-origin'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  title={selectedvideo.name}
                  src={`https://drive.google.com/file/d/${selectedvideo.id}/preview`}
                  width='999'
                  height='520'></iframe>
                {/* <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    zIndex: 1000,
                    display: 'flex',
                    gap: '10px',
                  }}>
                  <IconButton onClick={handlePlayPause} style={{ color: 'white' }}>
                    {playing ? <Pause /> : <PlayArrow />}
                  </IconButton>
                  <IconButton onClick={handleMuteUnmute} style={{ color: 'white' }}>
                    {muted ? <VolumeOff /> : <VolumeUp />}
                  </IconButton>
                </div> */}
                <span
                  style={{
                    color: 'white',
                    backgroundColor: '#282c34',
                    height: '50px',
                    paddingLeft: '10px',
                    alignContent: 'center',
                  }}>
                  <strong>{selectedvideo.name}</strong>
                </span>
              </div>
            )}
          </Grid>
        </Grid>
      ) : (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
          <CircularProgress color='inherit' />
        </Backdrop>
      )}
    </div>
  );
};

export default GoogleDriveVideo;
