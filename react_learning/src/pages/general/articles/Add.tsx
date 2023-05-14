import { Title } from '../../../components/atoms/Title';
import { PostForm } from '../../../components/organisms/article/PostForm/Index';
import { AddHeder } from '../../../components/organisms/article/PostForm/modules/AddHeder';

export const ArticleAdd: React.FC = () => {
  return (
    <>
      <AddHeder />
      <Title>新規投稿画面</Title>
      <div className="w-9/12 m-auto">
        <PostForm />
      </div>
    </>
  );
};
