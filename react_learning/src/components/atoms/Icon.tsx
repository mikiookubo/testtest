import React from 'react';
import icon from '../../img/icon.jpg';

export const Icon: React.FC = () => {
  return (
    <div>
      <img
        src={icon}
        alt="icon"
        className="m-auto w-24 h-24 rounded-full"
      ></img>
    </div>
  );
};
