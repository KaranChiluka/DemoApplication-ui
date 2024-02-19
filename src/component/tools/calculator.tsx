import { Button, Grid } from '@mui/material';
import './calculator.css';
import React, { useState } from 'react';

const Calculator = () => {
  //   const [rows, setRows] = useState(0);
  const [text, setText] = useState('');

  const buttons = [
    { names: 'AC' },
    { names: 'Clear' },
    { names: '%' },
    { names: '/' },
    { names: '1' },
  ];

  return (
    // <div>
    <Grid container className='calculator-container'>
      <Grid item className='calculator-text-item'>
        <div className='calculator-text-container'>
          <p className='calculator-text'>{text}</p>
          <textarea
            className='calculator-text-area'
            onChange={(e) => setText(e.target.value)}></textarea>
        </div>
      </Grid>
      <Grid item>
        <div className='calculator-btn-container'>
          {buttons.map((values, index) => (
            <React.Fragment key={index}>
              {index > 0 && index % 5 === 0 && <div style={{ clear: 'both' }}></div>}
              <div style={{ float: 'left', margin: '5px' }} className='calculator-buttons'>
                <Button className='calculator-btn'>{values.names}</Button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </Grid>
    </Grid>
    // </div>
  );
};

export default Calculator;
