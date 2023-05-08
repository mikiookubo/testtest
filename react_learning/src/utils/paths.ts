export const paths = {
  top: '/',
  form: '/form',
  blackJack: '/blackJack',
  general: '/general',
  loginTop: '/loginTop',
  infoTop: '/infoTop',
  mypage: '/myPage',

  infochange: '/infoChange',

  postlist: '/myPage/postlist',

  notfound: '*',
  article: {
    add: '/general/article/add',
  },
  articles: {
    index: '/general/articles',
    detail: (id: string) => `/general/articles/${id}`,
  },
};
