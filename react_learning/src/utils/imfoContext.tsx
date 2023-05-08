import { createContext, ReactNode, useState, FC } from 'react';

type Props = {
  children: ReactNode;
};

type InfoContextType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  passwordCheck: string;
  setPasswordCheck: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
};

export const InfoContext = createContext<InfoContextType>(
  {} as InfoContextType
);

// ユーザーID情報を保持するcontext
export const InfoProvider: FC<Props> = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [image, setImage] = useState('');

  return (
    <InfoContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        passwordCheck,
        setPasswordCheck,
        image,
        setImage,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};
