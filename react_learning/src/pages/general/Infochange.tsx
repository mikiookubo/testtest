import { Button } from '../../components/atoms';
import { Title } from '../../components/atoms/Title';
import { SimpleLabelAndTextInput } from '../../components/molecules/SimpleLabelAndTextInput';
import { FileProvider } from '../../components/organisms/info/FileContext';
import { useEffect, useState } from 'react';
import { formValidate } from '../../validation/ErrorObject';
import { paths } from '../../utils/paths';
import { useNavigate } from 'react-router-dom';
import { AddHeder } from '../../components/organisms/article/PostForm/modules/AddHeder';
import { useApi } from '../../utils/useApi';

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
  const userId = localStorage.getItem('useId');
  useEffect(() => {
    const myPageApi = async () => {
      await ApiFunction({
        url: `/user/:${userId}`,
        config: {
          method: 'GET',
        },
      });
    };
    myPageApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [textValue, setTextValue] = useState<ValueFormType>(valueForm);
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(errorForm);
  const [file, setFile] = useState<ArrayBuffer | string | null>('');
  const naviGate = useNavigate();
  const { ApiFunction, data } = useApi();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const kye = e.target.name;
    const value = e.target.value;
    setTextValue((prev) => ({ ...prev, [kye]: value }));
    setError((prev) => ({
      ...prev,
      [kye]: formValidate(kye, value),
    }));
  };
  useEffect(() => {
    const dataDetail: string[] = Object.values(data ?? {});
    const img: string = dataDetail[2];

    if (img !== undefined) {
      if (img.slice(0, 3) === '/9j') {
        setFile('data:image/JPEG;base64,' + img);
      } else {
        setFile(img);
      }
    }
  }, [data]);
  const onClick = () => {
    const userId = localStorage.getItem('useId');
    const fileData = file + ''?.replace(/^data:\w+\/\w+;base64,/, '');

    const request = {
      name: textValue.name,
      email: textValue.email,
      representative_image: fileData,
    };

    const infoPut = async () => {
      await ApiFunction({
        url: `/user/:${userId}`,
        config: {
          method: 'put',
          body: JSON.stringify(request),
        },
      });

      sessionStorage.setItem('page', 'change');
      naviGate(paths.myPage, { state: { id: 'ww' } });
    };

    infoPut();
  };

  useEffect(() => {
    if (!textValue.email || !textValue.name) {
      setIsDisabled(true);
    } else if (!error.email && !error.name) {
      setIsDisabled(false);
    } else setIsDisabled(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  return (
    <div>
      <AddHeder />
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
        src={file + ''}
        imgLabel="タップして画像を変更"
        setFile={setFile}
      />
      <div className="w-1/5 ml-auto mt-5">
        <Button onClick={onClick} isDisabled={isDisabled} name="登録"></Button>
      </div>
    </div>
  );
};
