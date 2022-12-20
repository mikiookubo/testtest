import { Title } from '../../../Title';
import { LabelAndTextInput } from '../../../../molecules';
import { Heder } from './Heder';
import { useState } from 'react';
import { ErrorMessage } from '../../../../atoms';

export const LoginTop = () => {
  const valueText = {
    login: '',
    info: '',
  };
  type valueProps = {
    login: string;
    info: string;
  };

  const [textValue, setTextValue] = useState<valueProps>(valueText);
  const [error, setError] = useState<inputKey>({});
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
  setError(validate(textValue));
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { placeholder, value } = e.target;
    setTextValue({ ...textValue, [placeholder]: value });
  };

  return (
    <div>
      <Heder></Heder>
      <Title>ログイン</Title>
      <LabelAndTextInput
        labelTitle="ログインID (メールアドレス)"
        errorMessage=""
        value={textValue.login}
        placeholder=""
        onChange={setTextValue(textValue.login)}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};
