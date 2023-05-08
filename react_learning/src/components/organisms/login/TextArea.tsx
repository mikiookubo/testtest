import { FC, useContext, useEffect, useState } from 'react';
import { SimpleLabelAndTextInput } from '../../molecules/SimpleLabelAndTextInput';
import { formValidate } from '../../../validation/ErrorObject';
import React from 'react';
import { UserIdContext } from '../../../utils/useridContext';

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
  const [textValue, setTextValuel] = useState(valueForm);
  const [error, setError] = useState(errorForm);
  const [isDisabled, setIsDisabledl] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const kye = e.target.name;
    const value = e.target.value;
    setTextValuel((prev) => ({ ...prev, [kye]: value }));
    setError((prev) => ({
      ...prev,
      [kye]: formValidate(kye, value, textValue.password),
    }));
  };

  useEffect(() => {
    if (!textValue.login || !textValue.password) {
      setIsDisabledl(true);
    } else if (!error.login && !error.password) {
      setIsDisabledl(false);
    } else setIsDisabledl(true);
  }, [error]);
  setTextValueP(textValue);
  setIsDisabledP(isDisabled);

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
