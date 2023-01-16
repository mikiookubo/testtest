import React from 'react';
import { LogoAndMenu } from '../../../../molecules/LogoAndMenu';
import { Nav } from '../../../../molecules/Nav';
import { useState } from 'react';

export const Heder: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onClick = () => {
    setOpen(!open);
  };
  console.log(open);

  return (
    <div className="mb-28">
      <LogoAndMenu onClick={onClick} open={open}></LogoAndMenu>
      <Nav open={open} />
    </div>
  );
};
