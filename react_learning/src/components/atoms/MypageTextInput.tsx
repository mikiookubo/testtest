import React from 'react';

type Props = {
  value: string;
};
export const MyPageTextInput: React.FC<Props> = ({ value }) => {
  return (
    <div className="w-7/12 mt-8">
      <input
        className="border border-gray w-full p-1.5 ml-3"
        type={'text'}
        value={value}
        readOnly={true}
      />
    </div>
  );
};
