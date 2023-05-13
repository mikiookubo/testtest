import React from 'react';

type Props = {
  value: string;
  name: string;
  placeholder?: string;
  ErrorMessage: string;
  disabled?: boolean;
  onBlue?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const SimpleTextInput: React.FC<Props> = ({
  value,
  name,
  onChange,
  placeholder,
  ErrorMessage,
  disabled,
  onBlue,
}) => {
  return (
    <div>
      <input
        className="border border-gray rounded-sm w-full"
        type={'text'}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        onBlur={onBlue}
      />
      <p className="text-red-600">{ErrorMessage}</p>
    </div>
  );
};
