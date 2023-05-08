import { Link } from 'react-router-dom';
import logo from '../../../../../img/logo_a11.png';
import { useContext, useState } from 'react';
import { UserIdContext } from '../../../../../utils/useridContext';

export const AddHeder: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { loginStatus, infoStatus, setLoginStatus } = useContext(UserIdContext);
  const onClicka = () => {
    setOpen(!open);
  };
  const onClick = () => {
    localStorage.removeItem('key');
    setLoginStatus(false);
  };

  return (
    <header id="heder">
      <div className="mb-28">
        <div className="">
          <Link to={'/'}>
            <img
              src={logo}
              alt="ロゴ"
              className="w-14 absolute top-0 inset-x-0 m-auto"
              onClick={() => {}}
            ></img>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={'/general/article/add'}>新規投稿画面</Link>
            </li>
            <li>
              <Link to={'/general/articles'}>投稿一覧画面</Link>
            </li>
            <li>
              <Link to={'/myPage'}>マイページ</Link>
            </li>
            <li>
              <Link to={'/infoChange'}>会員情報変更ボタン</Link>
            </li>
            <li>
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
