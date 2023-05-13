import { FC, useEffect, useState } from 'react';
import { SimpleLabelAndTextInput } from '../../molecules/SimpleLabelAndTextInput';
import {
  formValidate,
  passwordCheckValidation,
} from '../../../validation/ErrorObject';

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
  const [passwordDisabled, setPasswordDisabled] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const kye = e.target.name;
    const value = e.target.value;
    setTextValue((prev) => ({ ...prev, [kye]: value }));
    setError((prev) => ({
      ...prev,
      [kye]: formValidate(
        kye,
        value,
        textValue.password,
        textValue.passwordCheck
      ),
    }));
  };
  const a = () => {
    if (!textValue.passwordCheck) {
      return;
    }
    if (textValue.passwordCheck === textValue.password) {
      setError((prev) => ({ ...prev, password: '', passwordCheck: '' }));
    }
  };
  useEffect(() => {
    if (textValue.password && !error.password) {
      setPasswordDisabled(false);
    }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        onBlue={a}
      />
      <SimpleLabelAndTextInput
        labelTitle="パスワード確認"
        ErrorMessage={error && error.passwordCheck}
        value={textValue.passwordCheck}
        name="passwordCheck"
        onChange={onChange}
        onBlue={a}
        disabled={passwordDisabled}
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
