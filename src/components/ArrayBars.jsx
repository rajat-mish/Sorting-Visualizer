import React from 'react';

const ArrayBars = ({ array }) => {
  return (
    <div className="flex items-end justify-center h-[60vh] px-2 gap-[2px] bg-gray-100">
      {array.map((value, idx) => (
        <div
          key={idx}
          className="bg-blue-400"
          style={{
            height: `${value}px`,
            width: `${Math.floor(800 / array.length)}px`,
            transition: 'height 0.2s ease',
          }}
        ></div>
      ))}
    </div>
  );
};

export default ArrayBars;

