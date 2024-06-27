import React from 'react';

const Games = ({ id, color }: any) => {
  const balloonWidth = 200;
  const balloonHeight = balloonWidth * 1.17;
  const threadHeight = 50;
  return (
    <div className='balloon balloon--moving' style={{ color: color }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox={`0 0 ${balloonWidth} ${balloonHeight + threadHeight}`}>
        <defs>
          <radialGradient
            id={`balloon-gradient-${id}`}
            cx={'40%'}
            cy={'40%'}
            r={'50%'}
            fx={'30%'}
            fy={'30%'}>
            <stop offset={'0%'} stopColor='#fff' />
            <stop offset={'100%'} stopColor='currentColor' />
          </radialGradient>
        </defs>
        <rect
          x={balloonWidth / 2}
          y={balloonHeight}
          width='1'
          height={threadHeight}
          //   fill='currentColor'
        />
        <polygon
          points={`${balloonWidth / 2},${balloonHeight - 3} ${balloonWidth / 2 + 8},${
            balloonHeight + 5
          } ${balloonWidth / 2 - 8},${balloonHeight + 5}`}
          fill='currentColor'
        />
        <ellipse
          cx={balloonWidth / 2}
          cy={balloonHeight / 2}
          rx={balloonWidth / 2}
          ry={balloonHeight / 2}
          fill={`url(#balloon-gradient-${id})`}
          filter={`url(#balloon-shadow-${id})`}
        />
        ...
      </svg>
    </div>
  );
};

export default Games;
