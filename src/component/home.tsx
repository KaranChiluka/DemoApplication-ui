import { Grid, List, ListItem } from '@mui/material';
import img1 from '../assets/flappybird.png';
import img2 from '../assets/bg-image.png';
import img3 from '../assets/java-image.png';
import img4 from '../assets/calculator-image.jpg';
import GameCard from '../common/gameCard';
import { useState } from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ConstructionIcon from '@mui/icons-material/Construction';
import SchoolIcon from '@mui/icons-material/School';
const Home = () => {
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
      },
      {
        name: 'Tic-Tac-Toe',
        img: img2,
      },
    ],
    tools: [
      {
        name: 'Calculator',
        img: img4,
      },
      {
        name: 'Calculator',
        img: img4,
      },
    ],
    courses: [
      {
        name: 'Java',
        img: img3,
        url: '/flappyBird',
        label: 'FlappyBird',
      },
      {
        name: 'Java',
        img: img3,
        url: '/flappyBird',
        label: 'FlappyBird',
      },
    ],
  };

  const [items, setItems] = useState(details.games);

  return (
    <div>
      <Grid container sx={{}} wrap='nowrap' className='grid-container'>
        <Grid item xs={1.3} className='grid-item-list'>
          <List className='list-container' disablePadding={true}>
            {/* {allItems.map((value:any,index:any)=>(
              <ListItem key={index} className='list-item' onClick={() => setItems(details.games)}>
              Games
            </ListItem>
            ))} */}
            <ListItem
              className='list-item'
              sx={{ justifyContent: 'space-between' }}
              onClick={() => setItems(details.games)}>
              <p>Games</p>
              <SportsEsportsIcon className='list-icons' />
            </ListItem>
            <ListItem
              className='list-item'
              sx={{ justifyContent: 'space-between' }}
              onClick={() => setItems(details.tools)}>
              <p>Tools</p>
              <ConstructionIcon className='list-icons' />
            </ListItem>
            <ListItem
              className='list-item'
              sx={{ justifyContent: 'space-between' }}
              onClick={() => setItems(details.courses)}>
              <p>Courses</p>
              <SchoolIcon className='list-icons' />
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <GameCard gamesDetails={items} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
