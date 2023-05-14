import { rest } from 'msw';

type articlesListDataType = {
  total: string;
  per_page: string;
  current_page: string;
  last_page: string;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string;
  prev_page_url: string;
  path: string;
  from: string;
  to: string;
  data: string;
};

type infoDataType = {
  email: string;
  password: string;
  name: string;
  representative_image: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  token: string;
};

type articlesDataType = {
  title: string;
  content: string;
  user_name: string;
  article_id: string;
  created_at: string;
  updated_at: string;
};
type dataType = {
  name: string;
  email: string;
  representative_image: string;

  password: string;

  user_id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  token: string;
};

type infoChangeType = {
  name: string;
  email: string;
  representative_image: string;
};
let infoData: infoDataType;
let articlesData: articlesDataType;
let articlesListData: articlesListDataType;
let data: dataType;
let infoChange: infoChangeType;
let articlesId;

let id;
let reqData;

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    if (req.body === null) {
      return res(ctx.status(404));
    }
    reqData = req.body;
    data = JSON.parse(reqData as string);
    id = data.user_id;
    localStorage.setItem('useId', data.user_id);

    return res(
      ctx.status(200),
      ctx.json({
        user: {
          email: data.email,
          password: data.password,
          name: data.name,
          representative_image: data.representative_image,
          user_id: data.user_id,
          created_at: data.created_at,
          updated_at: data.updated_at,
          deleted_at: data.deleted_at,
          token: data.token,
        },
      })
    );
  }),

  rest.post('user', (req, res, ctx) => {
    const dataBody = req.body;
    infoData = JSON.parse(dataBody as string);

    return res(
      ctx.status(201),
      ctx.json({
        email: infoData.email,
        password: infoData.password,
        name: infoData.name,
        representative_image: infoData.representative_image,
        user_id: infoData.user_id,
        created_at: infoData.created_at,
        updated_at: infoData.updated_at,
        deleted_at: infoData.deleted_at,
        token: infoData.token,
      })
    );
  }),

  rest.get('user', (req, res, ctx) => {
    if (!infoData) {
      return;
    }
    return res(
      ctx.status(201),
      ctx.json({
        email: infoData.email,
        password: infoData.password,
        name: infoData.name,
        representative_image: infoData.representative_image,
        user_id: infoData.user_id,
        created_at: infoData.created_at,
        updated_at: infoData.updated_at,
        deleted_at: infoData.deleted_at,
        token: infoData.token,
      })
    );
  }),

  rest.get('/user/:' + id, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        name: data.name,
        email: data.email,
        representative_image: data.representative_image,
      })
    );
  }),
  rest.put('/user/:' + id, (req, res, ctx) => {
    const dataBody = req.body;
    infoChange = JSON.parse(dataBody as string);

    return res(
      ctx.status(201),
      ctx.json({
        name: infoChange.name,
        email: infoChange.email,
        representative_image: infoChange.representative_image,
      })
    );
  }),
  rest.get('/changeuser/', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        name: infoChange.name,
        email: infoChange.email,
        representative_image: infoChange.representative_image,
      })
    );
  }),

  rest.post('/articles', (req, res, ctx) => {
    const dataBody = req.body;
    articlesData = JSON.parse(dataBody as string);
    articlesId = articlesData.article_id;

    return res(
      ctx.status(201),
      ctx.json({
        title: articlesData.title,
        content: articlesData.content,
        article_id: articlesData.article_id,
      })
    );
  }),
  rest.get('/articles/:' + articlesId, (req, res, ctx) => {
    if (!articlesData) {
      return;
    }
    return res(
      ctx.status(201),
      ctx.json({
        title: articlesData.title,
        content: articlesData.content,
        user_name: data.name,
        article_id: articlesData.article_id,
        created_at: articlesData.created_at,
        updated_at: articlesData.updated_at,
      })
    );
  }),

  rest.post('/articlelist/', (req, res, ctx) => {
    const reqDate = req.body;
    articlesListData = JSON.parse(reqDate as string);

    return res(
      ctx.status(201),
      ctx.json({
        total: articlesListData.total,
        per_page: articlesListData.per_page,
        current_page: articlesListData.current_page,
        last_page: articlesListData.last_page,
        first_page_url: articlesListData.first_page_url,
        last_page_url: articlesListData.last_page_url,
        next_page_url: articlesListData.next_page_url,
        prev_page_url: articlesListData.prev_page_url,
        path: articlesListData.path,
        from: articlesListData.from,
        to: articlesListData.to,
        data: articlesListData.data,
      })
    );
  }),
  rest.get('/articles', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        total: articlesListData.total,
        per_page: articlesListData.per_page,
        current_page: articlesListData.current_page,
        last_page: articlesListData.last_page,
        first_page_url: articlesListData.first_page_url,
        last_page_url: articlesListData.last_page_url,
        next_page_url: articlesListData.next_page_url,
        prev_page_url: articlesListData.prev_page_url,
        path: articlesListData.path,
        from: articlesListData.from,
        to: articlesListData.to,
        data: articlesListData.data,
      })
    );
  }),
];
