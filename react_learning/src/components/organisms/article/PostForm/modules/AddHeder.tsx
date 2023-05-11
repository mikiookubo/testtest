import { Link } from 'react-router-dom';
import logo from '../../../../../img/logo_a11.png';
import { useContext, useState } from 'react';
import { UserIdContext } from '../../../../../utils/useridContext';

export const AddHeder: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { setLoginStatus } = useContext(UserIdContext);
  const onClickOpen = () => {
    setOpen(!open);
  };
  const onClick = () => {
    localStorage.removeItem('key');
    setLoginStatus(false);
  };

  return (
    <header id="heder" className="bg-gray-400 pt-8 sm:pt-16">
      <button
        onClick={onClickOpen}
        className="[&>span]:bg-black absolute w-14 h-14 top-1 right-10 hidden sm:block"
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
      <div className="mb-28 m-auto w-full">
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
        <nav className={'sm:h-56 ' + (open ? 'sm:block' : 'sm:hidden')}>
          <ul className="flex justify-center mt-3 sm:block text-center">
            <li className="text-sm mr-2.5 sm:border-t-4 border-t-white border-t-solid p-2.5">
              <Link to={'/general/article/add'}>新規投稿画面</Link>
            </li>
            <li className="text-sm mr-2.5 sm:border-t-4 border-t-white border-t-solid p-2.5">
              <Link to={'/general/articles'}>投稿一覧画面</Link>
            </li>
            <li className="text-sm mr-2.5 sm:border-t-4 border-t-white border-t-solid p-2.5">
              <Link to={'/myPage'}>マイページ</Link>
            </li>
            <li className="text-sm mr-2.5 sm:border-t-4 border-t-white border-t-solid p-2.5">
              <Link to={'/infoChange'}>会員情報変更ボタン</Link>
            </li>
            <li className="text-sm mr-2.5 sm:border-t-4 border-t-white border-t-solid p-2.5">
              <Link to={'/'} onClick={onClick}>
                ログアウト
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
