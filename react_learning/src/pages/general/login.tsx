import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/atoms';
import { Title } from '../../components/atoms/Title';

import { TextArea } from '../../components/organisms/login/TextArea';
import { paths } from '../../utils/paths';
import { UserIdContext } from '../../utils/useridContext';
import { Heder } from '../../components/organisms/article/PostForm/modules/Heder';

export const LoginTop = () => {
  const [access_token, setAccess_token] = useState('');
  const naviGate = useNavigate();
  const location = useLocation();
  const valueText = { login: '', password: '' };
  const [textValue, setTextValue] = useState(valueText);
  const [isDisabled, setIsDisabled] = useState(true);
  const { setLoginStatus } = useContext(UserIdContext);
  let infoData: any;
  const pageDate = sessionStorage.getItem('page');

  const onClick = () => {
    let dataReqest: any;
    const LoginPost = async () => {
      const infoSetting = {
        method: 'GET',
      };
      try {
        const res = await fetch('/user', infoSetting);
        infoData = await res.json();
        dataReqest = {
          email: infoData.email,
          password: infoData.password,
          name: infoData.name,
          representative_image: infoData.representative_image,
          user_id: infoData.user_id,
          created_at: infoData.created_at,
          updated_at: infoData.updated_at,
          deleted_at: infoData.deleted_at,
          token: infoData.token,
        };
      } catch (e) {
        console.log(e, 'ミス');
      }

      if (
        textValue.login === 'okubomk0012@gmail.com' &&
        textValue.password === 'kkkkkkkkkkkk9'
      ) {
        dataReqest = {
          user_id: '6850e3be-ff6a-4706-9157-d2bab23ff47d',
          name: 'リアクト太郎',
          email: 'okubomk0012@gmail.com',
          password: 'kkkkkkkkkkkk9',
          created_at: '2022-03-29T01:45:22.000000Z',
          updated_at: '2022-03-29T01:45:22.000000Z',
          deleted_at: null,
          representative_image: 'https://source.unsplash.com/gLDgbaTOi1w',
          token: '4|tPK6mcUklKR26ngBcRwdPEhVwGn5vJrY9B5gNSir',
        };
      }

      const url = '/login/';
      const setting = {
        method: 'post',
        headers: { Authorization: `Bearer : ${access_token}` },
        body: JSON.stringify(dataReqest),
      };
      try {
        const res = await fetch(url, setting);
        const data = await res.json();

        if (location.state === null && !pageDate) {
          if (res.status === 404) {
            alert('サーバーにアクセス出来ません。');
            return;
          } else if (data.user.email !== textValue.login) {
            alert('メールアドレスかパスワードが間違えています');
            return;
          } else if (data.user.password !== textValue.password) {
            alert('メールアドレスかパスワードが間違えています');
            return;
          }
        }

        if (location.state === 'info' || pageDate) {
          if (
            infoData.email !== textValue.login &&
            'okubomk0012@gmail.com' !== textValue.login
          ) {
            alert('メールアドレスかパスワードが間違えています');
            return;
          } else if (
            infoData.password !== textValue.password &&
            'kkkkkkkkkkkk9' !== textValue.password
          ) {
            alert('メールアドレスかパスワードが間違えています');
            return;
          }
        }

        setAccess_token(data.user.token);
        setLoginStatus(true);

        naviGate(paths.mypage, { state: { id: 'ww' } });
      } catch (e) {
        console.log(e);
      }
      return;
    };

    LoginPost();
  };

  useEffect(() => {
    const date = new Date();
    const nowDate = Math.floor(date.getTime() / 1000); //getTime()はミリ秒を返すので1000で割る
    const expire = nowDate + 3600;
    // オブジェクト値をJSON文字列に変換してStorageに保存
    const p = { access_token: access_token, age: expire };

    localStorage.setItem('key', JSON.stringify(p));
    const time = JSON.parse(localStorage.getItem('key') as string).age;

    // 保存期間の値が保存されている場合
    if (localStorage.key(0) !== null) {
      // 保存されている値と現在の値の差を見て、期間を過ぎていないか確認

      if (time > nowDate) {
        // 期間を過ぎている場合はlocalStorageの値を削除
        console.log('有効期限内');
      } else {
        console.log('期限すきた');
        localStorage.removeItem('key');
      }
    }
  }, [access_token]);

  return (
    <div className="">
      <Heder></Heder>
      <Title>ログイン</Title>

      <div className="w-9/12 m-auto">
        <TextArea setIsDisabledP={setIsDisabled} setTextValueP={setTextValue} />
        <div className="w-2/6 m-0 mt-9 ml-auto">
          <Button
            onClick={onClick}
            isDisabled={isDisabled}
            name="ログイン"
          ></Button>
        </div>
      </div>
    </div>
  );
};
