import { Title } from '../../../Title';
import { useState } from 'react';
import { useEffect } from 'react';
import { LabelAndTextInput } from '../../../../molecules';
import { Heder } from './Heder';
import { Count } from './count';

export const LoginTop = () => {
  const valueText = {
    login: '',
    info: '',

    loginError: '',
    infoError: '',
  };
  type valueProps = {
    login: string;
    info: string;

    loginError: string;
    infoError: string;
  };

  const [textValue, setTextValue] = useState<valueProps>(valueText);

  const [error, setError] = useState(valueText);
  type inputKey = {
    [key: string]: string;
  };

  const validate = (valueName: valueProps) => {
    const errorItem: inputKey = {};
    if (!valueName.login) {
      errorItem.login = 'IDを入力してください';
    }
    if (!valueName.info) {
      errorItem.info = 'パスワードを入力してください';
    }
    return errorItem;
  };
  //setError(validate(textValue));

  const test = (ev: valueProps['login']) => {};

  const loginOnChange = (e: string) => {
    setTextValue({ ...textValue, login: e });
    console.log(textValue.login);

    // else {
    //   setError({ ...valueText, loginError: '' });
    // }
  };
  useEffect(() => {
    if (!textValue.login) {
      setError({ ...textValue, loginError: 'エラー' });
    } else {
      setError({ ...textValue, loginError: '' });
    }
  }, [textValue.login]);

  console.log(textValue.login);

  console.log(textValue.loginError);
  const infoOnChange = (e: string) => {
    setTextValue({ ...textValue, info: e });
    console.log(e);

    if (!e) {
      setError({ ...valueText, infoError: 'kk' });
    } else {
      setError({ ...valueText, infoError: '' });
    }
    // else {
    //   setError({ ...valueText, infoError: '' });
    // }
  };
  // console.log(textValue.login);

  // console.log(textValue.login);

  return (
    <div>
      <Heder></Heder>
      <Title>ログイン</Title>
      <LabelAndTextInput
        labelTitle="ログインID (メールアドレス)"
        errorMessage={error && error.loginError}
        value={textValue.login}
        placeholder=""
        onChange={(e) => loginOnChange(e)}
      />
      <Count />
      <LabelAndTextInput
        labelTitle="パスワード"
        errorMessage={textValue.infoError}
        value={textValue.info}
        placeholder=""
        onChange={(e) => infoOnChange(e)}
      />
    </div>
  );
};
