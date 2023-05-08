import { createContext, ReactNode, useState, FC } from 'react';

type Props = {
  children: ReactNode;
};

type UserIdContextType = {
  userId: number;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
  loginStatus: boolean;
  setLoginStatus: React.Dispatch<React.SetStateAction<boolean>>;
  infoStatus: boolean;
  setInfoStatus: React.Dispatch<React.SetStateAction<boolean>>;
  articles: articlesType[];
  setArticles: React.Dispatch<React.SetStateAction<articlesType[]>>;
};

export const UserIdContext = createContext<UserIdContextType>(
  {} as UserIdContextType
);
type articlesType = {
  article_id: number;
  title: string;
  user_name: string;
  content: string;
  created_at: string;
  updated_at: string;
};

export const UserIdProvider: FC<Props> = ({ children }) => {
  const [userId, setUserId] = useState(0);
  const [loginStatus, setLoginStatus] = useState(false);
  const [infoStatus, setInfoStatus] = useState(false);
  const [articles, setArticles] = useState<articlesType[]>([
    {
      article_id: 1,
      title: '',
      content: '',
      user_name: '',
      created_at: '',
      updated_at: '',
    },
  ]);

  return (
    <UserIdContext.Provider
      value={{
        userId,
        setUserId,
        loginStatus,
        setLoginStatus,
        infoStatus,
        setInfoStatus,
        articles,
        setArticles,
      }}
    >
      {children}
    </UserIdContext.Provider>
  );
};
