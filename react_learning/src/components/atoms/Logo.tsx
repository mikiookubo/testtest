import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../utils/paths';
import logo from '../../img/logo_a11.png';

export const Logo: React.FC = () => {
  return (
    <div>
      <Link to={paths.top}>
        <img
          src={logo}
          alt="logo"
          className="w-14 absolute top-0 inset-x-0 m-auto"
        ></img>
      </Link>
    </div>
  );
};
