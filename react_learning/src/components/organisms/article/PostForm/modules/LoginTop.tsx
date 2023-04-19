import { Title } from '../../../Title';
import { useContext, useEffect, useState } from 'react';
import { Heder } from './Heder';
import { Button } from '../../../../atoms/Button';
import { formValidate } from '../../../../atoms/ErrorObject';
import { SimpleLabelAndTextInput } from '../../../../molecules/SimpleLabelAndTextInput';
import { paths } from '../../../../../utils/paths';
import { useNavigate } from 'react-router-dom';

import { LoginAp } from '../../../../../mocks/Context';
import { LoginApi } from './context';

type Props = {
  userId: string;
  setUserId: (value: React.SetStateAction<string>) => void;
  access_token: string;
  setAccess_token: (value: React.SetStateAction<string>) => void;
};

export const LoginTop = () => {
  // const { userId, setUserId, access_token, setAccess_token } =
  //   useContext(LoginApi);

  const [userId, setUserId] = useState('aa');
  const [access_token, setAccess_token] = useState('sss');

  const { count, setCount } = useContext(LoginAp);
  console.log(count);

  console.log(userId);
  console.log(access_token);
  const naviGate = useNavigate();
  const valueText = { login: '', password: '' };

  const errorValue = {
    login: '',
    password: '',
  };
  console.log(userId);
  console.log(access_token);

  const [textValue, setTextValue] = useState(valueText);
  const [error, setError] = useState(errorValue);
  const [isDisabled, setIsDisabled] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const key = e.target.name;
    const value = e.target.value;
    setTextValue((prev) => ({ ...prev, [key]: value }));

    console.log(error);

    setError((prev) => ({
      ...prev,
      [key]: formValidate(key, value),
    }));
  };
  useEffect(() => {
    if (!textValue.login || !textValue.password) {
      setIsDisabled(true);
    } else if (!error.login && !error.password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    console.log(isDisabled);
  }, [error]);
  console.log(isDisabled);

  const onClick = () => {
    let data = {
      email: textValue.login,
      password: textValue.password,
    };
    const LoginPost = async () => {
      const url = '/login/';
      const setting = {
        method: 'post',
        headers: { Authorization: `Bearer : ${access_token}` },
        body: JSON.stringify(data),
      };
      try {
        const res = await fetch(url, setting);
        const data = await res.json();
        // setUserId(data.user.user_id);
        console.log(count);
        setUserId((prev) => 'aaa');

        console.log(data.user.user_id);

        setAccess_token(data.user.token);
        localStorage.setItem('key', access_token);
        console.log();
        console.log(data.user.email);
        if (res.status === 404) {
          alert('サーバーにアクセス出来ません。');
          return;
        } else if (
          data.user.email !== textValue.login ||
          data.user.password !== textValue.password
        ) {
          alert('メールアドレスかパスワードが間違えています');
          return;
        }
        console.log(count);
        console.log(userId);
        console.log(access_token);
      } catch (e) {
        console.log(e);
      }
      return;
    };
    LoginPost();
    console.log(count);
  };
  const onClicka = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="">
      <Heder></Heder>
      <Title>ログイン</Title>

      <div className="w-9/12 m-auto">
        <SimpleLabelAndTextInput
          labelTitle="ログインID (メールアドレス)"
          ErrorMessage={error && error.login}
          value={textValue.login}
          name="login"
          onChange={onChange}
        />
        <SimpleLabelAndTextInput
          labelTitle="パスワード"
          value={textValue.password}
          onChange={onChange}
          ErrorMessage={error.password}
          name="password"
        />
        <button onClick={onClicka}>ボタン</button>
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
