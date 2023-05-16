import React from 'react';

type Props = {
  src: string;
};

export const Icon: React.FC<Props> = ({ src }) => {
  return (
    <div>
      <img src={src} alt="icon" className="m-auto w-24 h-24 rounded-full" />
    </div>
  );
};
