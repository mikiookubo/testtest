import { createContext, useState } from 'react';
import { LoginTop } from './LoginTop';

export const LoginApi = createContext(
  {} as {
    userId: string;
    setUserId: React.Dispatch<React.SetStateAction<string>>;
    access_token: string;
    setAccess_token: React.Dispatch<React.SetStateAction<string>>;
  }
);

export const ApiData = () => {
  const [userId, setUserId] = useState('aa');
  const [access_token, setAccess_token] = useState('sss');
  const value = { userId, setUserId, access_token, setAccess_token };

  console.log(userId);
  console.log(access_token);

  return (
    <div>
      <LoginApi.Provider value={value}>
        <LoginTop />
      </LoginApi.Provider>
    </div>
  );
};
