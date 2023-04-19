import { Heder } from './Heder';
import { paths } from '../../../../../utils/paths';
import { Title } from '../../../Title';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../../../atoms/Label';
import { useEffect, useState } from 'react';
import { FileProvider } from '../../../../atoms/FileContext';
import { Button } from '../../../../atoms';
import { Count } from '../../../../atoms/cont';
import { formValidate } from '../../../../atoms/ErrorObject';
import { SimpleLabelAndTextInput } from '../../../../molecules/SimpleLabelAndTextInput';
import { async } from 'q';
import Logo from '../../../../../img/icon2.jpg';

type bodyP = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  representative_image: string;
};

export const InfoTop = () => {
  const naviGate = useNavigate();
  const valueForm = {
    login: '',
    password: '',
    passwordCheck: '',
    name: '',
  };
  const errorForm = {
    login: '',
    password: '',
    passwordCheck: '',
    name: '',
  };

  const [textValue, setTextValue] = useState(valueForm);
  const [error, setError] = useState(errorForm);
  const [isDisabled, setIsDisabled] = useState(true);
  const [file, setFile] = useState<string>(Logo);

  // const base64EncodedFile = file.replace(/data:.*\/.*;base64,/, '');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const kye = e.target.name;
    const value = e.target.value;
    setTextValue((prev) => ({ ...prev, [kye]: value }));
    setError((prev) => ({
      ...prev,
      [kye]: formValidate(kye, value, textValue.password),
    }));
    console.log(error);
    console.log(textValue.passwordCheck);
    console.log(textValue.password);
  };
  console.log(file);

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
    console.log(isDisabled);
  }, [error]);

  const onClick = () => {
    const fileData = file.replace(/^data:\w+\/\w+;base64,/, '');
    let data = [
      {
        name: textValue.name,
        email: textValue.login,
        password: textValue.password,
        password_confirmation: textValue.passwordCheck,
        representative_image: fileData,
      },
    ];

    const infoPost = async () => {
      const res = await fetch('/user', {
        method: 'post',
        body: JSON.stringify(data),
      });
      try {
        if (!res.ok) {
          throw new Error('非同期に失敗');
        } else if (res.status === 500) {
          alert('サーバーにエラーが発生しました。');
          naviGate(paths.loginTop);
        }
      } catch (e) {
        alert('失敗');
      }
      console.log(res.body);
    };

    infoPost();
    setIsDisabled(true);
  };

  return (
    <div>
      <Heder></Heder>
      <Title>会員情報</Title>
      <div className="w-9/12 m-auto">
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

        <div className="mt-4">
          <Label labelClassName="" name="ユーザーアイコン画像"></Label>
        </div>
        <FileProvider
          src={file}
          imgLabel="タップして画像を変更"
          setFile={setFile}
        />
        <div className="w-1/5 ml-auto mt-5">
          <Button
            onClick={onClick}
            isDisabled={isDisabled}
            name="登録"
          ></Button>
        </div>
      </div>
    </div>
  );
};
