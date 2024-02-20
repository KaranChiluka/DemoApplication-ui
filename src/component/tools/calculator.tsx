import { Button, Grid } from '@mui/material';
import './calculator.css';
import React, { useState } from 'react';

const Calculator = () => {
  //   const [rows, setRows] = useState(0);
  const [text, setText] = useState([] as any);

  const buttons = [
    { names: 'AC' },
    { names: 'Clear' },
    { names: '%' },
    { names: 'X' },
    { names: '/' },
    { names: '1', val: 1 },
    { names: '2', val: 2 },
    { names: '3', val: 3 },
    { names: '+' },
    { names: '-' },
    { names: '4', val: 4 },
    { names: '5', val: 5 },
    { names: '6', val: 6 },
    { names: 'Ans' },
    { names: '=' },
    { names: '7', val: 7 },
    { names: '8', val: 8 },
    { names: '9', val: 9 },
    { names: '0', val: 0 },
    { names: '.', val: '.' },
  ];

  const handleEnteredValue = (event: any) => {
    setText(event.target.value);
  };

  // const handleValue = (val: any) => {
  //   console.log('val:', val);
  //   if (text.length == 0) {
  //     setText(val);
  //   } else {
  //     setText((prev: any) => {
  //       [...prev, val];
  //     });
  //   }
  // };

  return (
    // <div>
    <Grid container className='calculator-container'>
      <Grid item className='calculator-text-item'>
        <div className='calculator-text-container'>
          <p className='calculator-text'>{text}</p>
          <textarea
            className='calculator-text-area'
            value={text}
            onChange={(e) => {
              handleEnteredValue(e);
            }}></textarea>
        </div>
      </Grid>
      <Grid item className='grid-btn-container'>
        <div className='calculator-btn-container'>
          {buttons.map((values, index) => (
            <React.Fragment key={index}>
              {index <= 4 && (
                <Button
                  className='calculator-btn'
                  // onClick={() => handleValue(values.val)}
                >
                  {values.names}
                </Button>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className='calculator-btn-container'>
          {buttons.map((values, index) => (
            <React.Fragment key={index}>
              {index >= 5 && index < 10 && (
                <Button className='calculator-btn'>{values.names}</Button>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className='calculator-btn-container'>
          {buttons.map((values, index) => (
            <React.Fragment key={index}>
              {index >= 10 && index < 15 && (
                <Button className='calculator-btn'>{values.names}</Button>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className='calculator-btn-container'>
          {buttons.map((values, index) => (
            <React.Fragment key={index}>
              {index >= 15 && index < 20 && (
                <Button className='calculator-btn'>{values.names}</Button>
              )}
            </React.Fragment>
          ))}
        </div>
      </Grid>
    </Grid>
    // </div>
  );
};

export default Calculator;
