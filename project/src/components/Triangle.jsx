import React from 'react';

const Triangle = ({ width, height, color }) => {
  return (
    <svg lassName={`bg-${color} w-[${width}] h-${height}`}>
      <polygon points={`0,${height} ${width},0 0,0`} />
    </svg>
  );
};

Triangle.defaultProps = {
  width: '5vw',
  height: 'full',
  color: 'orange-600'
};

export default Triangle;