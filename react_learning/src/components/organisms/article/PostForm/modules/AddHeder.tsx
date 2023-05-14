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
    setLoginStatus(false);
  };

  return (
    <header id="heder" className="bg-gray-400 pt-8 sm:pt-16">
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
