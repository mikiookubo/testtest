import { useContext, useEffect, useState } from 'react';
import { UserIdContext } from '../../../utils/useridContext';
import { Title } from '../../../components/atoms/Title';
import { ArticlesList } from '../../../components/organisms/article/PostForm/PostList';
import { PageArticleButton } from '../../../components/organisms/article/PostForm/PageButton';
import { AddHeder } from '../../../components/organisms/article/PostForm/modules/AddHeder';
import { useApi } from '../../../utils/useApi';
type articlesType = {
  article_id: number;
  title: string;
  user_name: string;
  content: string;
  created_at: string;
  updated_at: string;
};
type isDisabledType = {
  next: boolean;
  prev: boolean;
};

export const PostList = () => {
  const [lastPage, setLastPage] = useState('1');
  const [pageNum, setPageNum] = useState<number | null>(1);
  const [isDisabled, setIsDisabled] = useState<isDisabledType>({
    next: false,
    prev: true,
  });
  const [articleList, setArticleList] = useState<articlesType[]>();
  const { articles } = useContext(UserIdContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesNumber = articles.length;
  const { ApiFunction } = useApi();

  useEffect(() => {
    if (articlesNumber <= 21) {
      setLastPage('1');
      setPageNum(1);
    } else if (articlesNumber <= 41) {
      setLastPage('2');
      setPageNum(2);
    } else if (articlesNumber <= 61) {
      setLastPage('3');
      setPageNum(3);
    } else if (articlesNumber <= 81) {
      setLastPage('4');
      setPageNum(4);
    } else if (articlesNumber <= 101) {
      setLastPage('5');
      setPageNum(5);
    }

    if (currentPage === 1) {
      setArticleList(articles.slice(1, 21));
    } else if (currentPage === 2) {
      setArticleList(articles.slice(21, 41));
    } else if (currentPage === 3) {
      setArticleList(articles.slice(41, 61));
    } else if (currentPage === 4) {
      setArticleList(articles.slice(61, 81));
    } else if (currentPage === 5) {
      setArticleList(articles.slice(81, 101));
    }

    if (currentPage === 1) {
      setIsDisabled({ ...isDisabled, prev: true, next: false });
    } else if (currentPage <= 2) {
      setIsDisabled({ ...isDisabled, prev: false, next: false });
    } else if (currentPage === 5) {
      setIsDisabled({ ...isDisabled, prev: false, next: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const dataRequest = {
    total: articlesNumber,
    per_page: 20,
    current_page: currentPage,
    last_page: lastPage,
    first_page_url: '/articles?page=' + currentPage,
    last_page_url: '/articles?page=' + lastPage,
    next_page_url: '/articles?page=' + Number(currentPage + 1),
    prev_page_url: `/articles?page=${Number(currentPage) - 1}`,
    path: 'articles/list',
    from: 1,
    to: 20,

    data: articles,
  };
  useEffect(() => {
    const detailApi = async () => {
      await ApiFunction({
        url: '/articlelist/',
        config: {
          method: 'post',
          body: JSON.stringify(dataRequest),
        },
      });
    };
    detailApi();
    const articlePost = async () => {
      await ApiFunction({
        url: '/articles?page=' + String(pageNum),
        config: {
          method: 'GET',
        },
      });
    };
    articlePost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  // 次へボタンクリック処理
  const Next = () => {
    setCurrentPage((prev) => prev + 1);

    if (currentPage === 5) {
      return false;
    }
  };

  // 前ボタンクリック処理
  const prev = () => {
    setCurrentPage(currentPage - 1);

    if (currentPage === 1) {
      return false;
    }
  };

  return (
    <>
      <AddHeder></AddHeder>
      <Title>投稿一覧画面</Title>

      <div className="w-9/12 m-auto">
        <ArticlesList articleList={articleList}></ArticlesList>
        <PageArticleButton
          setCurrentPage={setCurrentPage}
          prevOnClick={prev}
          nextDisabled={isDisabled.next}
          prevDisabled={isDisabled.prev}
          nextOnClick={Next}
          lastPage={lastPage}
        />
      </div>
    </>
  );
};
