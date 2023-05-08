import { FC } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../../utils/paths';

type articlesType = {
  articleList?: {
    article_id: number;
    title: string;
    user_name: string;
    content: string;
    created_at: string;
    updated_at: string;
  }[];
};

export const ArticlesList: FC<articlesType> = ({ articleList }) => {
  return (
    <div>
      {articleList?.map((article) => (
        <div key={article.article_id}>
          <ul>
            <li>{article.title}</li>
            <li>
              <Link
                to={paths.articles.detail(article.article_id + '')}
                state={{
                  title: article.title,
                  content: article.content,
                  name: article.user_name,
                  page: 'list',
                }}
              >
                {article.content}
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
