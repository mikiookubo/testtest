import React from 'react';
import { SimpleButton } from '../atoms/simpleButton';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../utils/paths';
import { useState } from 'react';

export const TopPageButtonAndButton: React.FC = () => {
  const [push, setPush] = useState<boolean>(false);

  const naviGate = useNavigate();
  const loginClick = () => {
    naviGate(paths.loginTop);
    setPush(!push);
  };

  const infoClick = () => {
    naviGate(paths.infoTop);
    setPush(!push);
  };

  return (
    <>
      <SimpleButton
        onClick={loginClick}
        name="ログイン"
        className="bg-black text-white py-3 px-4 border m-4 w-36"
        isDisabled={push}
      />
      <SimpleButton
        onClick={infoClick}
        name="会員登録"
        className="bg-white text-black py-3 px-4 border m-4 w-36"
        isDisabled={push}
      />
    </>
  );
};
