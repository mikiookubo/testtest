import { Heder } from './Heder';
import { LabelAndTextInput } from '../../../../molecules';
import { Title } from '../../../Title';
import { Icon } from '../../../../atoms/Icon';
import { Label } from '../../../../atoms/Label';
import { useState } from 'react';
import { FileProvider } from '../../../../atoms/FileContext';
import { Button } from '../../../../atoms';

import { Count } from '../../../../atoms/cont';
import { errorobj, formValidate } from '../../../../atoms/ErrorObject';

export const InfoTop = () => {
  const valueForm = {
    login: '',
    password: '',
    passwordCheck: '',
    name: '',
  };
  const errorForm = {
    loginError: '',
    passwordError: '',
    passwordCheckError: '',
    nameError: '',
  };

  const [textValue, setTextValue] = useState(valueForm);
  const [error, setError] = useState(errorForm);

  const loginChange = (loginValue: string) => {
    setTextValue((prev) => ({ ...prev, login: loginValue }));
    console.log(textValue, 'textValue');
    // setError({...error,valueForm(loginError,loginValue)});
    if (!loginValue) {
      setError((prev) => ({
        ...prev,
        loginError: 'ログインIDを入力してください',
      }));
    } else if (!errorobj.mailCheck.test(loginValue)) {
      setError((prev) => ({
        ...prev,
        loginError: 'メールアドレスを入力してください',
      }));
    } else {
      setError((prev) => ({
        ...prev,
        loginError: '',
      }));
    }
  };
  console.log(textValue.login);

  const passwordChange = (passwordValue: string) => {
    setTextValue((prev) => ({ ...prev, password: passwordValue }));

    console.log(textValue.password);
    console.log(textValue.passwordCheck);
    if (!passwordValue) {
      setError((prev) => ({
        ...prev,
        passwordError: 'パスワードを入力してください',
      }));
    } else if (!errorobj.passwordCheck.test(passwordValue)) {
      setError((prev) => ({
        ...prev,
        passwordError: '英数8文字以上で入力してください',
      }));
    } else {
      setError((prev) => ({
        ...prev,
        passwordError: '',
      }));
    }
  };

  const passwordCheckChange = (passwordCheckValue: string) => {
    setTextValue((prev) => ({ ...prev, passwordCheck: passwordCheckValue }));

    if (!passwordCheckValue) {
      setError((prev) => ({
        ...prev,
        passwordCheckError: 'パスワードを入力してください',
      }));
    } else if (!textValue.password === !textValue.passwordCheck) {
      setError((prev) => ({
        ...prev,
        passwordCheckError: '一致していません',
      }));
      console.log(textValue);

      console.log(textValue.password);
      console.log(textValue.passwordCheck);
    } else {
      setError((prev) => ({
        ...prev,
        passwordCheckError: '',
      }));
    }
  };

  // const nameChange = (nameValue: string) => {
  //   setTextValue((prev) => ({ ...prev, name: nameValue }));
  //   if (!nameValue) {
  //     setError((prev) => ({
  //       ...prev,
  //       nameError: 'パスワードを入力してください',
  //     }));
  //   } else if (!validationCheck.passwordCheck.test(nameValue)) {
  //     setError((prev) => ({
  //       ...prev,
  //       nameError: '英数8文字以上で入力してください',
  //     }));
  //   } else {
  //     setError((prev) => ({
  //       ...prev,
  //       nameError: '',
  //     }));
  //   }
  // };

  const onClick = () => {};

  return (
    <div>
      <Heder></Heder>
      <Title>会員情報</Title>
      <div className="w-9/12 m-auto">
        <LabelAndTextInput
          labelTitle="ログインID (メールアドレス)"
          errorMessage={error.loginError}
          value={textValue.login}
          placeholder=""
          onChange={(e) => loginChange(e)}
        />
        <LabelAndTextInput
          labelTitle="パスワード(英数8文字以上)"
          errorMessage={error.passwordError}
          value={textValue.password}
          placeholder=""
          onChange={(e) => passwordChange(e)}
        />
        <LabelAndTextInput
          labelTitle="パスワード確認"
          errorMessage={error.passwordCheckError}
          value={textValue.passwordCheck}
          placeholder=""
          onChange={(e) => passwordCheckChange(e)}
        />
        {/* <LabelAndTextInput
          labelTitle="ニックネーム(8文字以上)"
          errorMessage={error.nameError}
          value={textValue.name}
          placeholder=""
          onChange={(e) => nameChange(e)}
        /> */}
        <div className="mt-4">
          <Label labelClassName="" name="ユーザーアイコン画像"></Label>
        </div>
        <FileProvider img={<Icon />} imgLabel="タップして画像を変更" />
        <div className="w-1/5 ml-auto mt-5">
          <Button onClick={onClick} isDisabled={false} name="登録"></Button>
        </div>
      </div>
      <Count />
    </div>
  );
};
