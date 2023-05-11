import { useContext, useState } from 'react';

import { MyPageArea } from '../../components/organisms/mypage/MypageArea';
import { UserIdContext } from '../../utils/useridContext';

import { AddHeder } from '../../components/organisms/article/PostForm/modules/AddHeder';

export const Mypage = () => {
  const { setInfoStatus } = useContext(UserIdContext);
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

      if (data.representative_image.slice(0, 7) === '/9j/4AA') {
        setSrc('data:image/jpeg;base64,' + data.representative_image);
      } else {
        setSrc(data.representative_image);
      }

      setValue(data.email);
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
