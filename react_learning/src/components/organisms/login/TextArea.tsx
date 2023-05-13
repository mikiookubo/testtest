import { FC, useEffect, useState } from 'react';
import { SimpleLabelAndTextInput } from '../../molecules/SimpleLabelAndTextInput';
import { formValidate } from '../../../validation/ErrorObject';
import React from 'react';

const errorForm = {
  login: '',
  password: '',
};

const valueForm = {
  login: '',
  password: '',
};

type Props = {
  setTextValueP: React.Dispatch<
    React.SetStateAction<{
      login: string;
      password: string;
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
    if (!textValue.login || !textValue.password) {
      setIsDisabled(true);
    } else if (!error.login && !error.password) {
      setIsDisabled(false);
    } else setIsDisabled(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  useEffect(() => {
    setTextValueP(textValue);
    setIsDisabledP(isDisabled);
  });

  return (
    <div>
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
    </div>
  );
};
