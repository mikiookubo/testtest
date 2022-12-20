export const paths = {
  top: '/',
  form: '/form',
  blackJack: '/blackJack',
  general: '/general',
  loginTop: '/loginTop',

  article: {
    add: '/general/article/add',
  },
  articles: {
    index: '/general/articles',
    detail: (id: string) => `/general/articles/${id}`,
  },
};
