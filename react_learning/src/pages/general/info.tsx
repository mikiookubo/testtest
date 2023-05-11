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
import { UseApi } from '../../utils/useApi';
import { promises } from 'dns';

export const InfoTop = () => {
  const naviGate = useNavigate();
  const valueForm = {
    login: '',
    password: '',
    passwordCheck: '',
    name: '',
  };
  const { data, aa } = UseApi();

  console.log(data, 'aabbbbbbbbaaaa');
  const [textValue, setTextValue] = useState(valueForm);
  const [isDisabled, setIsDisabled] = useState(true);
  const [file, setFile] = useState<string>(icon);

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
  // const resData = UseApi({
  //   url: '/user',
  //   config: {
  //     method: 'post',

  //     body: JSON.stringify(request),
  //   },
  // });

  // console.log(resData, '確認会員の方');

  // if (true) {
  //   console.log(resData, '会員の方');
  //   console.log('会員の方');
  // }
  // console.log(resData, '会員の方');

  // const { api } = UseApi({
  //   url: '/user',
  //   config: {
  //     method: 'post',
  //     headers: {
  //       Authorization: 'string',
  //     },
  //     body: JSON.stringify(request),
  //   },
  // });
  // useEffect(() => {
  //   api();
  // });
  // UseApi({
  //   url: '/user',
  //   config: {
  //     method: 'post',
  //     headers: {
  //       Authorization: 'string',
  //     },
  //     body: JSON.stringify(request),
  //   },
  // });
  // const a=()=>
  const onClick = () => {
    // console.log(resData, '会員の方');
    if (
      textValue.login === 'okubomk0012@gmail.com' &&
      textValue.password === 'kkkkkkkkkkkk9'
    ) {
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

    const setting = {
      method: 'post',
      body: JSON.stringify(request),
    };
    aa({
      url: '/user',
      config: {
        method: 'post',
        headers: {
          Authorization: 'string',
        },
        body: JSON.stringify(request),
      },
    });
    const infoPost = async () => {
      try {
        const res = await fetch('/user', setting);
        const resData: any = await res.json();
        if (!res.ok) {
          throw new Error('非同期に失敗');
        } else if (res.status === 500) {
          alert('サーバーにエラーが発生しました。');
        }
      } catch (e) {
        alert('失敗');
      }
    };

    // infoPost();

    localStorage.setItem('key', 'info');
    // naviGate(paths.loginTop, { state: 'info' });
  };
  return (
    <div>
      <Heder></Heder>
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
