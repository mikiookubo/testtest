import React from 'react';

type Props = {
  className: string;
  onClick: () => void;
  isDisabled: boolean;
  name: string;
};

export const SimpleButton: React.FC<Props> = ({
  className,
  onClick,
  isDisabled,
  name,
}) => {
  return (
    <button className={className} onClick={onClick} disabled={isDisabled}>
      {name}
    </button>
  );
};
