import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../../utils/paths';
import { UserIdContext } from '../../../../utils/useridContext';

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
  const { userId } = useContext(UserIdContext);
  return (
    <div>
      {(() => {
        const list = [];

        for (let i = 0; i < 20; i++) {
          list.push(
            <tr key={i}>
              <td className="border-black border border-solid w-1/4 h-6">
                {articleList ? articleList[i]?.title : ''}
              </td>

              <td className="border-black border border-solid h-6">
                <Link
                  to={paths.articles.detail(String(userId))}
                  state={{
                    page: 'list',
                    name: articleList ? articleList[i]?.user_name : '',
                    content: articleList ? articleList[i]?.content : '',
                    title: articleList ? articleList[i]?.title : '',
                  }}
                >
                  {articleList ? articleList[i]?.content : ''}
                </Link>
              </td>
            </tr>
          );
        }
        return (
          <div className="border-2 border-solid border-black">
            <table className="w-full">
              <tbody>
                <tr>
                  <th className="text-left border-black border border-solid">
                    タイトル
                  </th>
                  <th className="text-left border-black border border-solid">
                    内容
                  </th>
                </tr>
                {list}
              </tbody>
            </table>
          </div>
        );
      })()}
    </div>
  );
};
