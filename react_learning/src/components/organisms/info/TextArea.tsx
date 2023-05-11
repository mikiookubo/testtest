import { FC, useEffect, useState } from 'react';
import { SimpleLabelAndTextInput } from '../../molecules/SimpleLabelAndTextInput';
import { formValidate } from '../../../validation/ErrorObject';
import React from 'react';

const errorForm = {
  login: '',
  password: '',
  passwordCheck: '',
  name: '',
};

const valueForm = {
  login: '',
  password: '',
  passwordCheck: '',
  name: '',
};

type Props = {
  setTextValueP: React.Dispatch<
    React.SetStateAction<{
      login: string;
      password: string;
      passwordCheck: string;
      name: string;
    }>
  >;

  setIsDisabledP: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TextArea: FC<Props> = ({ setTextValueP, setIsDisabledP }) => {
  const [textValue, setTextValue] = useState(valueForm);
  const [error, setError] = useState(errorForm);
  const [isDisabled, setIsDisabled] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const kye = e.target.name;
    const value = e.target.value;
    setTextValue((prev) => ({ ...prev, [kye]: value }));
    setError((prev) => ({
      ...prev,
      [kye]: formValidate(kye, value, textValue.password),
    }));
  };

  useEffect(() => {
    if (
      !textValue.login ||
      !textValue.name ||
      !textValue.password ||
      !textValue.passwordCheck
    ) {
      setIsDisabled(true);
    } else if (
      !error.login &&
      !error.name &&
      !error.password &&
      !error.passwordCheck
    ) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [error]);
  setTextValueP(textValue);
  setIsDisabledP(isDisabled);
  return (
    <div>
      <SimpleLabelAndTextInput
        labelTitle="ログインID (メールアドレス)"
        ErrorMessage={error.login}
        value={textValue.login}
        name="login"
        onChange={onChange}
      />
      <SimpleLabelAndTextInput
        labelTitle="パスワード(英数8文字以上)"
        ErrorMessage={error.password}
        value={textValue.password}
        name="password"
        onChange={onChange}
      />
      <SimpleLabelAndTextInput
        labelTitle="パスワード確認"
        ErrorMessage={error.passwordCheck}
        value={textValue.passwordCheck}
        name="passwordCheck"
        onChange={onChange}
      />
      <SimpleLabelAndTextInput
        labelTitle="ニックネーム(8文字以上)"
        ErrorMessage={error.name}
        value={textValue.name}
        name="name"
        onChange={onChange}
      />
    </div>
  );
};
