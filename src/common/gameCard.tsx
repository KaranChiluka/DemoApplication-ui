import { Button } from '@mui/material';
import React from 'react';
import useNavigate from '../common/useNavigate';

const GameCard = ({ gamesDetails }: any) => {
  const [navigate] = useNavigate();

  const handleNavigation = (url: any, label: any) => {
    navigate([
      {
        label: label,
        link: url,
      },
    ]);
  };

  return (
    <div className='game-cards-container'>
      {gamesDetails.map((item: any, index: any) => (
        <div key={index} className='game-cards'>
          <div className='game-card'>
            <div className='game-image'>
              <img src={item.img} className='flappy-bird' alt='flappy-bird'></img>
              <div className='middle'>
                <div className='text'>{item.name}</div>
                <Button
                  className='btn-game-card'
                  sx={{ top: '100px' }}
                  onClick={() => handleNavigation(item.url, item.label)}>
                  Play
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCard;
