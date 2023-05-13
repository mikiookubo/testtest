import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/atoms';
import { FileProvider } from '../../components/organisms/info/FileContext';
import { Label } from '../../components/atoms/Label';
import icon from '../../img/icon2.jpg';
import { Title } from '../../components/atoms/Title';
import { paths } from '../../utils/paths';
import { TextArea } from '../../components/organisms/info/TextArea';
import { Heder } from '../../components/organisms/article/PostForm/modules/Heder';
import { useApi } from '../../utils/useApi';

export const InfoTop = () => {
  const naviGate = useNavigate();
  const valueForm = {
    login: '',
    password: '',
    passwordCheck: '',
    name: '',
  };
  const { ApiFunction, data } = useApi();
  const [textValue, setTextValue] = useState(valueForm);
  const [isDisabled, setIsDisabled] = useState(true);
  const [file, setFile] = useState<string>(icon);
  const dataDetail: string[] = Object.values(data ?? {});

  const onClick = async () => {
    const email = dataDetail[0];
    const password = dataDetail[1];

    if (
      textValue.login === 'okubomk0012@gmail.com' &&
      textValue.password === 'kkkkkkkkkkkk9'
    ) {
      alert('既に存在しているアカウントです');
      return;
    } else if (email === textValue.login && password === textValue.password) {
      alert('既に存在しているアカウントです');
      return;
    }
    const fileData = file.replace(/^data:\w+\/\w+;base64,/, '');
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789-';
    let user_id = '';
    for (let i = 0; i < 35; i++) {
      user_id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log(file);
    console.log(fileData);
    const date = new Date();
    const dateRequest =
      date.getFullYear() +
      '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + date.getDate()).slice(-2) +
      'T' +
      ('0' + date.getHours()).slice(-2) +
      ':' +
      ('0' + date.getMinutes()).slice(-2) +
      ':' +
      ('0' + date.getSeconds()).slice(-2) +
      '.' +
      date.getMilliseconds();
    const request = {
      name: textValue.name,
      email: textValue.login,
      password: textValue.password,
      password_confirmation: textValue.passwordCheck,
      representative_image: fileData,
      user_id: user_id,
      created_at: dateRequest,
      updated_at: 'test',
      deleted_at: null,
      token: '4|tPK6mcUklKR26ngBcRwdPEhVwGn5vJrY9B5gNSir',
    };

    await ApiFunction({
      url: '/user',
      config: {
        method: 'post',
        headers: {
          Authorization: 'string',
        },
        body: JSON.stringify(request),
      },
    });

    localStorage.setItem('key', 'info');
    naviGate(paths.loginTop, { state: 'info' });
  };

  useEffect(() => {
    const userGetApi = async () => {
      await ApiFunction({
        url: '/user',
        config: {
          method: 'GET',
        },
      });
    };
    userGetApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Heder />
      <Title>会員情報</Title>
      <div className="w-9/12 m-auto">
        <div className="mt-4">
          <Label labelClassName="" name="ユーザーアイコン画像"></Label>
        </div>
        <TextArea
          setTextValueP={setTextValue}
          setIsDisabledP={setIsDisabled}
        ></TextArea>
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
