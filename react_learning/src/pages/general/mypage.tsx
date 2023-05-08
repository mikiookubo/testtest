import { useContext, useEffect, useState } from 'react';

import { MyPageArea } from '../../components/organisms/mypage/MypageArea';
import { UserIdContext } from '../../utils/useridContext';
import { data } from 'msw/lib/types/context';
import { Heder } from '../../components/organisms/article/PostForm/modules/Heder';
import { useLocation } from 'react-router-dom';
import { AddHeder } from '../../components/organisms/article/PostForm/modules/AddHeder';

export const Mypage = () => {
  const { loginStatus, setInfoStatus } = useContext(UserIdContext);
  const [value, setValue] = useState('');
  const [src, setSrc] = useState('');

  setInfoStatus(true);
  const userId = localStorage.getItem('useId');

  const InfoPost = async () => {
    const setting = {
      method: 'GET',
      header: 'Content-Type: application/json; charset=utf-8',
    };

    try {
      const res = await fetch(`/user/:${userId}`, setting);
      const data = await res.json();

      setValue(data.email);
      setSrc(data.representative_image);
    } catch (e) {
      console.log(e, 'ミス');
    }
  };
  InfoPost();

  return (
    <div>
      <AddHeder></AddHeder>
      <MyPageArea value={value} src={src}></MyPageArea>
    </div>
  );
};
