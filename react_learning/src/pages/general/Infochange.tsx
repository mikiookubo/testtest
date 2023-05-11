import { Button } from '../../components/atoms';
import { Title } from '../../components/atoms/Title';
import { SimpleLabelAndTextInput } from '../../components/molecules/SimpleLabelAndTextInput';

import { FileProvider } from '../../components/organisms/info/FileContext';
import { useEffect, useState } from 'react';

import icon from '../../img/icon2.jpg';
import { formValidate } from '../../validation/ErrorObject';
import { paths } from '../../utils/paths';
import { useNavigate } from 'react-router-dom';
import { AddHeder } from '../../components/organisms/article/PostForm/modules/AddHeder';
export const InfoChange = () => {
  type ValueFormType = {
    name: string;
    email: string;
    representative_image: string; //base64対応必須
  };
  const valueForm = {
    email: '',
    name: '',
    representative_image: '',
  };
  const errorForm = {
    email: '',
    name: '',
    representative_image: '',
  };
  const [textValue, setTextValue] = useState<ValueFormType>(valueForm);
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(errorForm);
  const [file, setFile] = useState<string>(icon);
  const naviGate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const kye = e.target.name;
    const value = e.target.value;
    setTextValue((prev) => ({ ...prev, [kye]: value }));
    setError((prev) => ({
      ...prev,
      [kye]: formValidate(kye, value),
    }));
  };

  const onClick = () => {
    const userId = localStorage.getItem('useId');
    const fileData = file.replace(/^data:\w+\/\w+;base64,/, '');

    const request = {
      name: textValue.name,
      email: textValue.email,
      representative_image: fileData,
    };
    const setting = {
      method: 'put',
      body: JSON.stringify(request),
    };

    const infoPut = async () => {
      try {
        const res = await fetch(`/user/:${userId}`, setting);

        if (!res.ok) {
          throw new Error('非同期に失敗');
        } else if (res.status === 500) {
          alert('サーバーにエラーが発生しました。');
        }
      } catch (e) {
        alert('失敗');
      }
      sessionStorage.setItem('page', 'change');
      naviGate(paths.mypage, { state: { id: 'ww' } });
    };

    infoPut();
  };

  useEffect(() => {
    if (!textValue.email || !textValue.name) {
      setIsDisabled(true);
    } else if (!error.email && !error.name) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [error]);
  return (
    <div>
      <AddHeder></AddHeder>
      <Title>会員情報</Title>
      <SimpleLabelAndTextInput
        labelTitle="ログインID (メールアドレス)"
        ErrorMessage={error.email}
        value={textValue.email}
        name="email"
        onChange={onChange}
      />
      <SimpleLabelAndTextInput
        labelTitle="ニックネーム(8文字以上)"
        ErrorMessage={error.name}
        value={textValue.name}
        name="name"
        onChange={onChange}
      />
      <FileProvider
        src={file}
        imgLabel="タップして画像を変更"
        setFile={setFile}
      />
      <div className="w-1/5 ml-auto mt-5">
        <Button onClick={onClick} isDisabled={isDisabled} name="登録"></Button>
      </div>
    </div>
  );
};
