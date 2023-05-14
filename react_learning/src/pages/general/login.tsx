import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/atoms';
import { Title } from '../../components/atoms/Title';
import { TextArea } from '../../components/organisms/login/TextArea';
import { paths } from '../../utils/paths';
import { UserIdContext } from '../../utils/useridContext';
import { Heder } from '../../components/organisms/article/PostForm/modules/Heder';
import { useApi } from '../../utils/useApi';

export const LoginTop = () => {
  const [access_token, setAccess_token] = useState('');
  const naviGate = useNavigate();
  const location = useLocation();
  const valueText = { login: '', password: '' };
  const [textValue, setTextValue] = useState(valueText);
  const [isDisabled, setIsDisabled] = useState(true);
  const pageDate = sessionStorage.getItem('page');
  const { setLoginStatus, infoStatus } = useContext(UserIdContext);
  const { data, ApiFunction, setData } = useApi();
  const dataDetail: string[] = Object.values(data ?? {});
  const changeEmail = dataDetail[1];
  const infoEmail = dataDetail[0];
  const infoPasswaord = dataDetail[1];

  useEffect(() => {
    if (
      textValue.login === 'okubomk0012@gmail.com' &&
      textValue.password === 'kkkkkkkkkkkk9' &&
      !infoStatus
    ) {
      setData({
        email: 'okubomk0012@gmail.com',
        password: 'kkkkkkkkkkkk9',
        name: 'リアクト太郎',
        representative_image: 'https://source.unsplash.com/gLDgbaTOi1w',
        user_id: '6850e3be-ff6a-4706-9157-d2bab23ff47d',

        created_at: '2022-03-29T01:45:22.000000Z',
        updated_at: '2022-03-29T01:45:22.000000Z',
        deleted_at: null,
        token: '4|tPK6mcUklKR26ngBcRwdPEhVwGn5vJrY9B5gNSir',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textValue]);

  const onClick = async () => {
    const token = dataDetail[7];

    if (data) {
      await ApiFunction({
        url: '/login',
        config: {
          method: 'post',
          headers: { Authorization: `Bearer : ${access_token}` },
          body: JSON.stringify(data),
        },
      });
    }

    if (location.state === null && !pageDate) {
      if (infoEmail !== textValue.login) {
        alert('メールアドレスかパスワードが間違えています');
        return;
      } else if (infoPasswaord !== textValue.password) {
        alert('メールアドレスかパスワードが間違えています');
        return;
      }
    }
    if (location.state === 'info' || !infoStatus) {
      if (
        infoEmail !== textValue.login &&
        'okubomk0012@gmail.com' !== textValue.login
      ) {
        alert('メールアドレスかパスワードが間違えています');
        return;
      } else if (
        infoPasswaord !== textValue.password &&
        'kkkkkkkkkkkk9' !== textValue.password
      ) {
        alert('メールアドレスかパスワードが間違えています');
        return;
      }
    }
    if (infoStatus) {
      if (changeEmail !== textValue.login) {
        alert('メールアドレスかパスワードが間違えています');
        return;
      }
    }

    setAccess_token(token);
    setLoginStatus(true);
    naviGate(paths.myPage, { state: { id: 'ww' } });
  };

  useEffect(() => {
    if (!infoStatus || location.state === 'info') {
      const userGetApi = async () => {
        await ApiFunction({
          url: '/user',
          config: {
            method: 'GET',
          },
        });
      };
      userGetApi();
    } else if (infoStatus || location.state !== 'info') {
      const userChangeGetApi = async () => {
        await ApiFunction({
          url: '/changeuser/',
          config: {
            method: 'get',
          },
        });
      };
      userChangeGetApi();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const date = new Date();
    const nowDate = Math.floor(date.getTime() / 1000);
    const expire = nowDate + 3600;
    // オブジェクト値をJSON文字列に変換してStorageに保存
    const storage = { access_token: access_token, age: expire };

    localStorage.setItem('key', JSON.stringify(storage));
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
      <Heder />
      <Title>ログイン</Title>

      <div className="w-9/12 m-auto">
        <TextArea setIsDisabledP={setIsDisabled} setTextValueP={setTextValue} />
        <div className="w-2/6 m-0 mt-9 ml-auto">
          <Button onClick={onClick} isDisabled={isDisabled} name="ログイン" />
        </div>
      </div>
    </div>
  );
};
