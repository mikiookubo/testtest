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
    localStorage.removeItem('key');
    setLoginStatus(false);
  };
  console.log(open);

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

// type Props = {
//   onClick: () => void;
//   open: boolean;
// };

// export const LogoAndMenu: React.FC<Props> = ({ onClick, open }) => {
//   return (
//     <div className="bg-gray-400 fixed top-0 right-0 left-0 h-16">
//       <header>
//         <button
//           onClick={onClick}
//           className="[&>span]:bg-black absolute w-14 h-14 top-1 right-10"
//         >
//           <span
//             className={
//               'inline-block absolute bg-white w-3/5 h-1 left-5 rounded-xl top-3.5' +
//               (open
//                 ? ' top-4 left-4 w-1/2 transform translate-y-3 -rotate-45'
//                 : '')
//             }
//           ></span>
//           <span
//             className={
//               'inline-block absolute bg-white w-3/5 h-1 left-5 rounded-xl top-7' +
//               (open ? ' opacity-0	' : '')
//             }
//           ></span>
//           <span
//             className={
//               'inline-block absolute bg-white w-3/5 h-1 left-5 rounded-xl top-11' +
//               (open
//                 ? ' top-4 left-5 w-1/2 transform -translate-y-4 rotate-45 '
//                 : '')
//             }
//           ></span>
//         </button>

//         <Logo />
//       </header>
//     </div>
//   );
// };

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { paths } from '../../utils/paths';

// type Props = {
//   open: boolean;
// };

// export const Nav: React.FC<Props> = ({ open }) => {
//   return (
//     <div className={'bg-gray-400 mt-16 ' + (open ? 'block' : 'hidden')}>
//       <nav id="nav" className="ml-5 mt-1">
//         <ul>
//           <li className="my-4 border-t pt-3 ">
//             <Link to={paths.loginTop}>ログイン</Link>
//           </li>
//           <li className="my-5 border-t pt-3">
//             <a>会員登録</a>
//           </li>
//           <li className="border-t pt-3 pb-6">
//             <a>マイページ</a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };
