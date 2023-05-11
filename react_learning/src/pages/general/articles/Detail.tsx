import React, { useContext, useEffect, useState } from 'react';
import { Title } from '../../../components/atoms/Title';

import { UserIdContext } from '../../../utils/useridContext';
import { useLocation } from 'react-router-dom';
import { DetailArea } from '../../../components/organisms/article/PostForm/Detail';
import { AddHeder } from '../../../components/organisms/article/PostForm/modules/AddHeder';

type state = {
  title: string;
  content: string;
  name: string;
  page: string;
};

export const Detail: React.FC = () => {
  const { setInfoStatus, userId, setArticles, articles } =
    useContext(UserIdContext);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const location = useLocation();
  const state = location.state as state;

  setInfoStatus(true);
  useEffect(() => {
    if (location.state === 'add') {
      const LoginPost = async () => {
        const infoSetting = {
          method: 'GET',
        };
        String(userId);
        const url = '/articles/' + userId;

        try {
          const res = await fetch(url, infoSetting);
          const data = await res.json();
          setName(data.user_name);
          setTitle(data.title);
          setContent(data.content);

          setArticles([
            ...articles,
            {
              article_id: data.article_id,
              title: data.title,
              content: data.content,
              created_at: data.created_at,
              updated_at: data.updated_at,
              user_name: data.user_name,
            },
          ]);
        } catch (e) {
          console.log(e, 'ミス');
        }
      };
      LoginPost();
    }
    if (state.page === 'list') {
      setName(state.name);
      setContent(state.content);
      setTitle(state.title);
    }
  }, []);

  return (
    <div>
      <AddHeder></AddHeder>
      <Title>詳細画面</Title>
      <div className="w-9/12 m-auto">
        <DetailArea name={name} title={title} content={content}></DetailArea>
      </div>
    </div>
  );
};
