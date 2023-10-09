import React, { useState } from 'react';
import NavBar from '../common/navBar';
import { Button } from '@mui/material';
import FirstPage from './firstPage';

const Home = () => {
  const [firstImg, setFirstImg] = useState(false);
  const [secondImg, setSecondImg] = useState(false);

  return (
    <div>
      <NavBar />
      <div
        className='btn-block'
        style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#0c5e94' }}>
        <Button
          onClick={(_e) => {
            setFirstImg(true);
            setSecondImg(false);
          }}>
          First page
        </Button>
        <Button
          onClick={(_e) => {
            setFirstImg(false);
            setSecondImg(true);
          }}>
          Second page
        </Button>
      </div>
      <div>
        {firstImg && <FirstPage image='first' />}
        {secondImg && <FirstPage image='second' />}
      </div>
    </div>
  );
};

export default Home;
