import React, { useContext, useEffect, useState } from 'react';
import { Title } from '../../../components/atoms/Title';
import { UserIdContext } from '../../../utils/useridContext';
import { useLocation } from 'react-router-dom';
import { DetailArea } from '../../../components/organisms/article/PostForm/Detail';
import { AddHeder } from '../../../components/organisms/article/PostForm/modules/AddHeder';
import { useApi } from '../../../utils/useApi';

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
  const { data, ApiFunction } = useApi();

  setInfoStatus(true);

  useEffect(() => {
    const detailApi = async () => {
      await ApiFunction({
        url: '/articles/' + userId,
        config: {
          method: 'GET',
        },
      });
    };
    if (state.page === 'add') {
      detailApi();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataDetail: string[] = Object.values(data ?? {});

  useEffect(() => {
    const Api = async () => {
      setName(String(dataDetail[2]));
    };
    if (state.page === 'add') {
      Api();
    }

    setName(dataDetail[2]);
    setTitle(dataDetail[0]);
    setContent(dataDetail[1]);
    if (
      dataDetail[0] !== '' &&
      dataDetail[0] !== undefined &&
      dataDetail[0] !== 'TypeError'
    ) {
      setArticles([
        ...articles,
        {
          article_id: Number(dataDetail[3]),
          title: dataDetail[0],
          content: dataDetail[1],
          created_at: dataDetail[4],
          updated_at: dataDetail[5],
          user_name: dataDetail[2],
        },
      ]);
    }

    if (state.page === 'list') {
      setName(state.name);
      setContent(state.content);
      setTitle(state.title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div>
      <AddHeder />
      <Title>詳細画面</Title>
      <div className="w-9/12 m-auto">
        <DetailArea name={name} title={title} content={content}></DetailArea>
      </div>
    </div>
  );
};
