import { Button, Grid } from '@mui/material';
import './calculator.css';
import React, { useState } from 'react';

const Calculator = () => {
  //   const [rows, setRows] = useState(0);
  const [text, setText] = useState([] as any);
  // const [historyText, setHistroyText] = useState([] as any);

  const buttons = [
    { names: '1', val: 1 },
    { names: '2', val: 2 },
    { names: '3', val: 3 },
    { names: 'AC', val: 'ac' },
    { names: 'Clear', val: 'cls' },
    { names: '4', val: 4 },
    { names: '5', val: 5 },
    { names: '6', val: 6 },
    { names: '*', val: 'mul' },
    { names: '/', val: 'div' },
    { names: '7', val: 7 },
    { names: '8', val: 8 },
    { names: '9', val: 9 },
    { names: '+', val: 'add' },
    { names: '-', val: 'sub' },
    { names: '0', val: 0 },
    { names: '.', val: '.' },
    { names: '%', val: 'mod' },
    { names: 'Ans', val: 'ans' },
    { names: '=', val: 'equal' },
  ];

  const handleEnteredValue = (event: any) => {
    setText(`${event.target.value} `);
  };

  const handleValue = (val: any) => {
    console.log('val:', val);
    switch (val) {
      case 'add':
        setText(`${text} +`);
        break;
      case 'sub':
        setText(`${text} -`);
        break;
      case 'mul':
        setText(`${text} *`);
        break;
      case 'div':
        setText(`${text} /`);
        break;
      case 'cls':
        handleClear('cls');
        break;
      case 'ac':
        handleClear('ac');
        break;
    }
  };

  const handleClear = (string: any) => {
    if (string == 'ac') {
      setText('');
    } else {
      setText(text.slice(1, text.length - 2));
    }
    console.log('clear:', text);
  };

  return (
    <div>
      <span
        style={{
          left: '47.5%',
          position: 'relative',
          color: 'white',
          fontWeight: 'bolder',
          fontSize: 'x-larg',
        }}>
        Calculator
      </span>
      <Grid container className='calculator-container'>
        <Grid item className='calculator-text-item'>
          <div className='calculator-text-container'>
            <p className='calculator-text'>{text}</p>
            <input
              type='text'
              className='calculator-text-area'
              value={text}
              onChange={(e) => {
                handleEnteredValue(e);
              }}></input>
          </div>
        </Grid>
        <Grid item className='grid-btn-container'>
          <div className='calculator-btn-container'>
            {buttons.map((values, index) => (
              <React.Fragment key={index}>
                {index <= 4 && (
                  <Button className='calculator-btn' onClick={() => handleValue(values.val)}>
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
                  <Button className='calculator-btn' onClick={() => handleValue(values.val)}>
                    {values.names}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className='calculator-btn-container'>
            {buttons.map((values, index) => (
              <React.Fragment key={index}>
                {index >= 10 && index < 15 && (
                  <Button className='calculator-btn' onClick={() => handleValue(values.val)}>
                    {values.names}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className='calculator-btn-container'>
            {buttons.map((values, index) => (
              <React.Fragment key={index}>
                {index >= 15 && index < 20 && (
                  <Button className='calculator-btn' onClick={() => handleValue(values.val)}>
                    {values.names}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Calculator;
