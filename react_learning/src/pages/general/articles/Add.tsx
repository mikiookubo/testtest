import React, { useContext } from 'react';
import { Title } from '../../../components/atoms/Title';
import { PostForm } from '../../../components/organisms/article/PostForm/Index';
import { UserIdContext } from '../../../utils/useridContext';
import { AddHeder } from '../../../components/organisms/article/PostForm/modules/AddHeder';

export const ArticleAdd: React.FC = () => {
  const { articles } = useContext(UserIdContext);

  return (
    <div className="mx-6 max-w-md md:mx-auto">
      <AddHeder></AddHeder>
      <Title>新規投稿画面</Title>
      <PostForm />
    </div>
  );
};
