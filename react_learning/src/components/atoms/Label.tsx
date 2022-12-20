import React from 'react';

type Props = {
  labelClassName: string;
  name: string;
};

export const Label: React.FC<Props> = ({ labelClassName, name }) => {
  return <label className={labelClassName}>{name}</label>;
};
