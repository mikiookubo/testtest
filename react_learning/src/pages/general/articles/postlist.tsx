import { useContext, useEffect, useState } from 'react';
import { UserIdContext } from '../../../utils/useridContext';
import { Heder } from '../../../components/organisms/article/PostForm/modules/Heder';
import { Link } from 'react-router-dom';
import { paths } from '../../../utils/paths';
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
  const page = Math.ceil(articlesNumber / 20);

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

    if (currentPage <= 1) {
      setIsDisabled({ ...isDisabled, prev: true });
      setIsDisabled({ ...isDisabled, next: false });
    } else if (currentPage === 5) {
      setIsDisabled({ ...isDisabled, next: true });
      setIsDisabled({ ...isDisabled, prev: false });
    }
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
    const articlePost = async () => {
      const postSetting = {
        method: 'post',
        body: JSON.stringify(dataRequest),
      };
      try {
        const postRes = await fetch('/articlelist/', postSetting);
        const postData = await postRes.json();
      } catch (e) {
        console.log(e);
      }

      const url = '/articles?page=' + String(pageNum);

      const getSetting = {
        method: 'GET',
      };
      try {
        const getRes = await fetch(url, getSetting);
        const getData = await getRes.json();
      } catch (e) {
        console.log(e);
      }
    };
    articlePost();
  }, [pageNum]);

  useEffect(() => {}, [isDisabled]);

  // 次へボタンクリック処理
  const Next = () => {
    if (currentPage === 5) {
      return false;
    }
    setCurrentPage(currentPage + 1);
  };
  // 前ボタンクリック処理
  const prev = () => {
    if (currentPage === 1) {
      return false;
    }
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <AddHeder></AddHeder>
      <Title>一覧</Title>
      <ArticlesList articleList={articleList}></ArticlesList>
      <PageArticleButton
        setCurrentPage={setCurrentPage}
        prevOnClick={prev}
        nextDisabled={isDisabled.next}
        prevDisabled={isDisabled.prev}
        nextOnClick={Next}
        lastPage={lastPage}
      />
    </>
  );
};
