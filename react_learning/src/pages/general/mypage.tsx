import { useEffect, useState } from 'react';

import { MyPageArea } from '../../components/organisms/mypage/MypageArea';

import { AddHeder } from '../../components/organisms/article/PostForm/modules/AddHeder';
import { useApi } from '../../utils/useApi';

export const MyPage = () => {
  const [value, setValue] = useState('');
  const [src, setSrc] = useState('');

  const userId = localStorage.getItem('useId');
  const { data, ApiFunction } = useApi();
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

  useEffect(() => {
    const dataDetail: string[] = Object.values(data ?? {});
    const img: string = dataDetail[2];
    const email = dataDetail[0];

    if (img !== undefined) {
      if (img.slice(0, 7) === '/9j/4AA') {
        setSrc('data:image/JPEG;base64,' + img);
      } else {
        setSrc(img);
      }

      setValue(email);
    }
  }, [data]);

  return (
    <div>
      <AddHeder></AddHeder>
      <MyPageArea value={value} src={src}></MyPageArea>
    </div>
  );
};
