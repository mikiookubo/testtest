import { Title } from '../../../Title';
import { useState } from 'react';
import { Heder } from './Heder';
import { Button } from '../../../../atoms/Button';
import { formValidate } from '../../../../atoms/ErrorObject';
import { SimpleLabelAndTextInput } from '../../../../molecules/SimpleLabelAndTextInput';

export const LoginTop = () => {
  const valueText = { login: '', password: '' };

  const errorValue = {
    login: '',
    password: '',
  };

  const [textValue, setTextValue] = useState(valueText);
  const [error, setError] = useState(errorValue);
  const [isDisabled, setIsDisabled] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const key = e.target.name;
    const value = e.target.value;
    setTextValue((prev) => ({ ...prev, [key]: value }));
    console.log(error);

    setError((prev) => ({
      ...prev,
      [key]: formValidate(key, value),
    }));
    console.log(error);
    if (!textValue.login || !textValue.password) {
      //   setIsDisabled(true);
      // } else if (!error.login && !error.password) {
      //   setIsDisabled(false);
      // } else {
      //   setIsDisabled(true);
    }

    console.log(isDisabled);
  };
  const onClick = () => {};

  // const submit = (): boolean => {
  //   const vinfo =
  //     Object.values(textValue).filter((value) => {
  //       return value === '';
  //     }).length === 0;

  //   const vmassege =
  //     Object.values(error).filter((value) => {
  //       return value !== '';
  //     }).length === 0;
  //   return vinfo || vmassege || !isDisabled;
  // };
  // console.log(isDisabled);
  // submit();
  // console.log(isDisabled);

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
          id="loginError"
        />

        <SimpleLabelAndTextInput
          labelTitle="パスワード"
          value={textValue.password}
          onChange={onChange}
          ErrorMessage={error.password}
          name="password"
          id="passwordError"
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
