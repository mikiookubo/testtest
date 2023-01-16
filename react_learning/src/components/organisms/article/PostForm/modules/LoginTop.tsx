import { Title } from '../../../Title';
import { useState } from 'react';
import { LabelAndTextInput } from '../../../../molecules';
import { Heder } from './Heder';
import { Button } from '../../../../atoms/Button';
import { validationCheck } from '../../../../atoms/ErrorObject';

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
  const [isDisabled, setIsDisabled] = useState(true);

  const loginOnChange = (loginValue: string) => {
    setTextValue((prev) => ({ ...prev, login: loginValue }));

    if (!loginValue) {
      setError((prev) => ({
        ...prev,
        loginError: 'ログインIDを入力してください',
      }));
      setIsDisabled(true);
    } else if (!validationCheck.mailCheck.test(loginValue)) {
      setError((prev) => ({
        ...prev,
        loginError: 'メールアドレスを入力してください',
      }));

      setIsDisabled(true);
    } else if (!textValue.info) {
      setIsDisabled(true);
      // setError((prev) => ({
      //   ...prev,
      //   loginError: '',
      // }));
    } else {
      setError((prev) => ({
        ...prev,
        loginError: '',
      }));
      setIsDisabled(false);
    }
  };

  const infoOnChange = (infoValue: string) => {
    setTextValue((prev) => ({ ...prev, info: infoValue }));
    setError((prev) => ({ ...prev, infoError: '' }));

    if (!infoValue) {
      setError({ ...textValue, infoError: 'パスワードを入力してください' });
      setIsDisabled(true);
    } else if (!validationCheck.passwordCheck.test(infoValue)) {
      setError({ ...textValue, infoError: '英数8文字以上で入力してください' });
      setIsDisabled(true);
    } else if (!textValue.login) {
      setIsDisabled(true);
      // setError({ ...textValue, infoError: '' });
    } else {
      setError({ ...textValue, infoError: '' });
      setIsDisabled(false);
    }
  };
  const onClick = () => {};

  return (
    <div className="">
      <Heder></Heder>
      <Title>ログイン</Title>
      <div className="w-9/12 m-auto">
        <LabelAndTextInput
          labelTitle="ログインID (メールアドレス)"
          errorMessage={error.loginError}
          value={textValue.login}
          placeholder=""
          onChange={(e) => {
            loginOnChange(e);
          }}
        />

        <LabelAndTextInput
          labelTitle="パスワード"
          errorMessage={error.infoError}
          value={textValue.info}
          placeholder=""
          onChange={(e) => {
            infoOnChange(e);
          }}
        />

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
