import React from 'react';

type Props = {
  value: string;
};
export const MyPageTextInput: React.FC<Props> = ({ value }) => {
  return <input className="border border-gray" type={'text'} value={value} />;
};
