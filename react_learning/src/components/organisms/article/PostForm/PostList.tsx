import { FC } from 'react';

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
      {(() => {
        const list = [];

        for (let i = 0; i < 20; i++) {
          list.push(
            <>
              <tr>
                <td className="border-black border border-solid w-1/4 h-6">
                  {articleList ? articleList[i]?.title : ''}
                </td>

                <td className="border-black border border-solid h-6">
                  {articleList ? articleList[i]?.content : ''}
                </td>
              </tr>
            </>
          );
        }
        return (
          <div className="border-2 border-solid border-black">
            <table className="w-full">
              <tr>
                <th className="text-left border-black border border-solid">
                  タイトル
                </th>
                <th className="text-left border-black border border-solid">
                  内容
                </th>
              </tr>
              {list}
            </table>
          </div>
        );
      })()}
    </div>
  );
};
