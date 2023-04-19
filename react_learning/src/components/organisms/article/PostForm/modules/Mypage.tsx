import { Context } from '../modules/LoginTop';
import React, { useContext } from 'react';
import { LoginTop } from '../modules/LoginTop';

export const Mypage = () => {
  const InfoPost = async () => {
    const params = { userId: '123' };
    const useId = new URLSearchParams(params);
    const url = `/user/?${useId}`;
    const setting = {
      method: 'post',
    };
    const res = await fetch(url);

    try {
      console.log(url);

      const data = await res.json();
      console.log(data);
      console.log('成功');
    } catch (e) {
      console.log(e, 'ミス');
    }
  };
  InfoPost();

  return (
    <div>
      <h1>aaa</h1>
    </div>
  );
};
