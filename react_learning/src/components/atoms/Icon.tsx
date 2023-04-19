import React from 'react';
import { FileProvider } from './FileContext';

type Props = {
  src: string;
};

export const Icon: React.FC<Props> = ({ src }) => {
  const a = btoa('../../img/icon.jpg');
  console.log(btoa('../../img/icon.jpg'));
  console.log(atob(a));

  return (
    <div>
      <img src={src} alt="icon" className="m-auto w-24 h-24 rounded-full"></img>
    </div>
  );
};
