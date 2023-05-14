import { Link } from 'react-router-dom';
import logo from '../../../../../img/logo_a11.png';
import { useContext, useState } from 'react';
import { UserIdContext } from '../../../../../utils/useridContext';

export const Heder: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { loginStatus, setLoginStatus } = useContext(UserIdContext);
  const onClickOpen = () => {
    setOpen(!open);
  };
  const onClick = () => {
    setLoginStatus(false);
  };

  return (
    <header id="heder" className="bg-gray-400 pt-8 sm:pt-16 relative">
      <button
        onClick={onClickOpen}
        className="w-10 h-11 absolute top-2.5 right-3.5 hidden sm:block"
      >
        <span
          className={
            'w-full h-1 absolute block bg-white top-2 ' +
            (open ? 'transform rotate-45 top-8' : '')
          }
        ></span>
        <span
          className={
            'w-full h-1 absolute block bg-white top-5 ' +
            (open ? ' opacity-0	' : '')
          }
        ></span>
        <span
          className={
            'w-full h-1 absolute block bg-white top-8 ' +
            (open ? 'transform -rotate-45 top-8' : '')
          }
        ></span>
      </button>
      <div className="mb-28 m-auto w-3/4">
        <div className="">
          <Link to={'/'}>
            <img
              src={logo}
              alt="ロゴ"
              className="w-14 absolute top-0 m-auto sm:inset-x-0 "
              onClick={() => {}}
            ></img>
          </Link>
        </div>
        <nav className={'sm:h-52 ' + (open ? 'sm:block' : 'sm:hidden')}>
          {!loginStatus && (
            <ul className="flex justify-around mt-3 sm:block text-center">
              <li className="sm:border-t-4 border-t-white border-t-solid p-2.5">
                <Link to={'/loginTop'}>ログイン</Link>
              </li>
              <li className="sm:border-t-4 border-t-white border-t-solid p-2.5">
                <Link to={'/infoTop'}>会員登録</Link>
              </li>
            </ul>
          )}
          {loginStatus && (
            <ul className="flex justify-around mt-3 sm:block text-center">
              <li className="sm:border-t-4 border-t-white border-t-solid p-2.5">
                <Link to={'/'} onClick={onClick}>
                  ログアウト
                </Link>
              </li>
              <li className="sm:border-t-4 border-t-white border-t-solid p-2.5">
                <Link to={'/infochange'}>会員情報変更ボタン</Link>
              </li>
              <li className="sm:border-t-4 border-t-white border-t-solid p-2.5">
                <Link to={'/myPage'}>マイページ</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};
