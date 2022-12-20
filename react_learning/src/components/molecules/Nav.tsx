import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../utils/paths';

type Props = {
  open: boolean;
};

export const Nav: React.FC<Props> = ({ open }) => {
  return (
    <div className={'bg-gray-400 mt-16 ' + (open ? 'block' : 'hidden')}>
      <nav id="nav" className="ml-5 mt-1">
        <ul>
          <li className="my-4 border-t pt-3 ">
            <Link to={paths.loginTop}>ログイン</Link>
          </li>
          <li className="my-5 border-t pt-3">
            <a>会員登録</a>
          </li>
          <li className="border-t pt-3 pb-6">
            <a>マイページ</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
