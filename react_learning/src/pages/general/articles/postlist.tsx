import { useContext, useEffect, useState } from 'react';
import { UserIdContext } from '../../../utils/useridContext';

import { Title } from '../../../components/atoms/Title';
import { ArticlesList } from '../../../components/organisms/article/PostForm/PostList';
import { PageArticleButton } from '../../../components/organisms/article/PostForm/PageButton';
import { AddHeder } from '../../../components/organisms/article/PostForm/modules/AddHeder';
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
  const [pageNum, setPageNum] = useState<number | null>();
  const [isDisabled, setIsDisabled] = useState<isDisabledType>({
    next: false,
    prev: true,
  });
  const [articleList, setArticleList] = useState<articlesType[]>();

  const { articles } = useContext(UserIdContext);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const articlesNumber = articles.length;
  // const page = Math.ceil(articlesNumber / 20);

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
    console.log(currentPage);
    if (currentPage === 1) {
      console.log(currentPage, 'ボタン活性ステートの現在ページ');
      setIsDisabled({ ...isDisabled, prev: true, next: false });
      console.log(isDisabled?.prev, '前へボタンの活性化');
      console.log(isDisabled?.next, '次へボタンの活性化');
    } else if (currentPage <= 2) {
      console.log(currentPage, 'ボタン活性ステートの現在ページ');
      setIsDisabled({ ...isDisabled, prev: false, next: false });
    } else if (currentPage === 5) {
      console.log(currentPage, 'ボタン活性ステートの現在ページ');
      setIsDisabled({ ...isDisabled, prev: false, next: true });
    }
    console.log(isDisabled?.prev, '前へボタンの活性化');
    console.log(isDisabled?.next, '次へボタンの活性化');
  }, [currentPage]);
  console.log(isDisabled?.prev, '前へボタンの活性化');
  console.log(isDisabled?.next, '次へボタンの活性化');

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
    const articlePost = async () => {
      const postSetting = {
        method: 'post',
        body: JSON.stringify(dataRequest),
      };
      try {
        await fetch('/articlelist/', postSetting);
      } catch (e) {
        console.log(e);
      }

      const url = '/articles?page=' + String(pageNum);

      const getSetting = {
        method: 'GET',
      };
      try {
        await fetch(url, getSetting);
      } catch (e) {
        console.log(e);
      }
    };
    articlePost();
  }, [pageNum]);

  useEffect(() => {}, [isDisabled]);

  // 次へボタンクリック処理
  const Next = () => {
    setCurrentPage((prev) => prev + 1);
    console.log(currentPage, '次へボタンおし現在のページ');
    if (currentPage === 5) {
      return false;
    }
  };
  console.log(currentPage, '現在のページ');
  // 前ボタンクリック処理
  const prev = () => {
    setCurrentPage(currentPage - 1);
    console.log(currentPage, '現在のページ');
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
