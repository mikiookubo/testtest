import { TopPageButtonAndButton } from '../../components/molecules/ToppageButtonAndButton';

import React from 'react';
import { Heder } from '../../components/organisms/article/PostForm/modules/Heder';

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const LoginAp = React.createContext({} as Props);

export const General: React.FC = () => {
  return (
    <div className="App">
      <Heder />
      <div className="text-center">
        <h1 className="text-xl">ブログサービス課題</h1>
        <p className="mt-5">React.jsを利用したブログサービス課題です。</p>

        <div className="flex mx-auto w-40 flex-col ">
          <TopPageButtonAndButton />
        </div>
      </div>
    </div>
  );
};
