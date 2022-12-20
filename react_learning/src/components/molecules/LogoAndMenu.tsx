import { Logo } from '../atoms/Logo';
import React from 'react';

type Props = {
  onClick: () => void;
  open: boolean;
};

export const LogoAndMenu: React.FC<Props> = ({ onClick, open }) => {
  return (
    <div className="bg-gray-400 fixed top-0 right-0 left-0 h-16">
      <header>
        <button
          onClick={onClick}
          className="[&>span]:bg-black absolute w-14 h-14 top-1 right-10"
        >
          <span
            className={
              'inline-block absolute bg-white w-3/5 h-1 left-5 rounded-xl top-3.5' +
              (open
                ? ' top-4 left-4 w-1/2 transform translate-y-3 -rotate-45'
                : '')
            }
          ></span>
          <span
            className={
              'inline-block absolute bg-white w-3/5 h-1 left-5 rounded-xl top-7' +
              (open ? ' opacity-0	' : '')
            }
          ></span>
          <span
            className={
              'inline-block absolute bg-white w-3/5 h-1 left-5 rounded-xl top-11' +
              (open
                ? ' top-4 left-5 w-1/2 transform -translate-y-4 rotate-45 '
                : '')
            }
          ></span>
        </button>

        <Logo />
      </header>
    </div>
  );
};
