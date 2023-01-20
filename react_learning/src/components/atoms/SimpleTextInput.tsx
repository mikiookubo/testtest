import React from 'react';
import { ErrorMessage } from './ErrorMessage';

type Props = {
  value: string;
  name: string;
  id: string;
  ErrorMessage: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const SimpleTextInput: React.FC<Props> = ({
  value,
  name,
  onChange,
  id,
  ErrorMessage,
}) => {
  return (
    <div>
      <input
        className="border border-gray rounded-sm w-full"
        type={'text'}
        value={value}
        name={name}
        onChange={onChange}
      />
      <p className="text-red-600" id={id}>
        {ErrorMessage}
      </p>
    </div>
  );
};
