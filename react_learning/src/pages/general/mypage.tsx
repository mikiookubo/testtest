import { useContext, useEffect, useState } from 'react';
import { MyPageArea } from '../../components/organisms/mypage/MypageArea';
import { AddHeder } from '../../components/organisms/article/PostForm/modules/AddHeder';
import { useApi } from '../../utils/useApi';
import { Title } from '../../components/atoms/Title';
import { UserIdContext } from '../../utils/useridContext';

export const MyPage = () => {
  const [value, setValue] = useState('');
  const [src, setSrc] = useState('');
  const { infoStatus } = useContext(UserIdContext);
  const { data, ApiFunction } = useApi();
  useEffect(() => {
    if (!infoStatus) {
      const userGetApi = async () => {
        await ApiFunction({
          url: '/login',
          config: {
            method: 'get',
          },
        });
      };
      userGetApi();
    } else if (infoStatus) {
      const userChangeGetApi = async () => {
        await ApiFunction({
          url: '/changeuser/',
          config: {
            method: 'get',
          },
        });
      };
      userChangeGetApi();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const dataDetail: string[] = Object.values(data ?? {});
    const img = dataDetail[3];
    const email = dataDetail[0];
    const changeMail = dataDetail[1];
    const changeImg = dataDetail[2];

    if (!infoStatus) {
      if (img !== undefined) {
        if (img.slice(0, 3) === '/9j') {
          setSrc('data:image/jpeg;base64,' + img);
        } else {
          setSrc(img);
        }

        setValue(email);
      }
    } else if (infoStatus) {
      if (changeImg !== undefined) {
        if (changeImg.slice(0, 3) === '/9j') {
          setSrc('data:image/jpeg;base64,' + changeImg);
        } else {
          setSrc(changeImg);
        }

        setValue(changeMail);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div>
      <AddHeder />
      <Title>マイページ</Title>
      <MyPageArea value={value} src={src} />
    </div>
  );
};
