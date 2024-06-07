// import { Grid, List, ListItem } from '@mui/material';
// import img1 from '../assets/flappybird.png';
// import img2 from '../assets/bg-image.png';
// import img3 from '../assets/java-image.png';
// import img4 from '../assets/calculator-image.jpg';
// import GameCard from '../common/gameCard';
// import { useState } from 'react';
// import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
// import ConstructionIcon from '@mui/icons-material/Construction';
// import SchoolIcon from '@mui/icons-material/School';

import { Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import { useState } from 'react';
import GameCard from '../common/gameCard';
import img1 from '../assets/flappybird.png';
import img2 from '../assets/bg-image.png';
import img3 from '../assets/java-image.png';
import img4 from '../assets/calculator-image.jpg';
const Home = () => {
  const [selectedTab, setSelectedTab] = useState('Course');
  const handleClick = (tab: string) => {
    setSelectedTab(tab);
  };
  // const allItems = [
  //   {
  //     name:'Games',
  //     detailsType: details.games;
  //   }
  // ]

  const details = {
    games: [
      {
        name: 'Flappy Bird',
        img: img1,
        url: '/flappyBird',
        label: 'FlappyBird',
      },
      {
        name: 'Tic-Tac-Toe',
        img: img2,
        url: '/flappyBird',
        label: 'FlappyBird',
      },
    ],
    tools: [
      {
        name: 'Calculator',
        img: img4,
        url: '/calculator',
        label: 'Calculator',
      },
      {
        name: 'Calculator',
        img: img4,
        url: '/calculator',
        label: 'Calculator',
      },
      {
        name: 'Calculator',
        img: img4,
        url: '/calculator',
        label: 'Calculator',
      },
    ],
    courses: [
      {
        name: 'Java',
        img: img3,
        url: `/videoplayer/${btoa('java')}`,
        label: 'VideoPlayer',
      },
      {
        name: 'C++',
        img: img3,
        url: `/videoplayer/${btoa('c++')}`,
        label: 'VideoPlayer',
      },
    ],
  };
  const [selectedItem, setSelectedItem] = useState(details.courses);

  return (
    <div className='home'>
      <Grid container sx={{ flexDirection: 'column' }}>
        <Grid item>
          <div className='user-settings'>
            <div className='list-item-menu-settings'>
              <HomeIcon className='list-icons-settings' />
            </div>
            <div className='pipe'>|</div>
            <div
              className={
                selectedTab == 'Course'
                  ? 'list-item-menu-settings-selected'
                  : 'list-item-menu-settings'
              }
              onClick={() => {
                handleClick('Course');
                setSelectedItem(details.courses);
              }}>
              <p className='list-text'>Course</p>
              <SchoolIcon className='list-icons-settings' />
            </div>
            <div className='pipe'>|</div>
            <div
              className={
                selectedTab == 'Tools'
                  ? 'list-item-menu-settings-selected'
                  : 'list-item-menu-settings'
              }
              onClick={() => {
                handleClick('Tools');
                setSelectedItem(details.tools);
              }}>
              <p className='list-text'>Tools</p>
              <SchoolIcon className='list-icons-settings' />
            </div>
            <div className='pipe'>|</div>
            <div
              className={
                selectedTab == 'Games'
                  ? 'list-item-menu-settings-selected'
                  : 'list-item-menu-settings'
              }
              onClick={() => {
                handleClick('Games');
                setSelectedItem(details.games);
              }}>
              <p className='list-text'>Games</p>
              <SchoolIcon className='list-icons-settings' />
            </div>
          </div>
        </Grid>
        <Grid item>
          <GameCard gamesDetails={selectedItem} />
        </Grid>
      </Grid>
      {/* <div style={{ border: '1px solid black', width: '50%' }}>
        <video width='640px' height='350px'>
          <source src='./public/video/Introduction-1.mp4' type='video/mp4' />
        </video>
      </div>
      <h4>Google Drive Video Embed</h4>
      <GoogleDriveVideo /> */}
    </div>
  );
};

export default Home;
