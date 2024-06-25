import { Button } from '@mui/material';
import React from 'react';
import useNavigate from '../common/useNavigate';

const GameCard = ({ gamesDetails }: any) => {
  const [navigate] = useNavigate();

  const handleNavigation = (id: any, type: any) => {
    navigate([
      {
        label: type? 'VideoPlayer': '',
        link: `/videoplayer/${btoa(id)}`,
      },
    ]);
  };

  return (
    <div className='game-cards-container'>
      {gamesDetails.map((item: any, index: any) => (
        <div key={index} className='game-card'>
          <div className='game-image'>
            <img src={item.img} className='flappy-bird' alt={item.name}></img>
            <div className='middle'>
              <div className='text'>{item.name}</div>
              <Button
                className='btn-game-card'
                sx={{ top: '100px' }}
                onClick={() => handleNavigation(item.id, item.type)}>
                Play
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCard;
