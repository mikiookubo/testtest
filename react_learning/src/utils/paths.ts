export const paths = {
  top: '/',
  form: '/form',
  blackJack: '/blackJack',
  general: '/general',
  loginTop: '/loginTop',
  infoTop: '/infoTop',
  myPage: '/myPage',

  infoChange: '/infoChange',

  postList: '/myPage/postlist',

  notfound: '*',
  article: {
    add: '/general/article/add',
  },
  articles: {
    index: '/general/articles',
    detail: (id: string) => `/general/articles/${id}`,
  },
};
