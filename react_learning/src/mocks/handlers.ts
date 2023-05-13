import { rest } from 'msw';

// https://mswjs.io/
// ここにinterface仕様書のAPIを作っていく

let infoData: any;

let articlesData: any;
let articlesDate: any;
let articlesId;

let data: any;
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
    const key = localStorage.getItem('key');
    if (!key || !infoData) {
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
    data = JSON.parse(dataBody as string);
    infoData = JSON.parse(dataBody as string);
    return res(
      ctx.status(201),
      ctx.json({
        name: data.name,
        email: data.email,
        representative_image: data.representative_image,
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
    articlesDate = JSON.parse(reqDate as string);

    return res(
      ctx.status(201),
      ctx.json({
        total: articlesDate.total,
        per_page: articlesDate.per_page,
        current_page: articlesDate.current_page,
        last_page: articlesDate.last_page,
        first_page_url: articlesDate.first_page_url,
        last_page_url: articlesDate.last_page_url,
        next_page_url: articlesDate.next_page_url,
        prev_page_url: articlesDate.prev_page_url,
        path: articlesDate.path,
        from: articlesDate.from,
        to: articlesDate.to,
        data: articlesDate.data,
      })
    );
  }),
  rest.get('/articles', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        total: articlesDate.total,
        per_page: articlesDate.per_page,
        current_page: articlesDate.current_page,
        last_page: articlesDate.last_page,
        first_page_url: articlesDate.first_page_url,
        last_page_url: articlesDate.last_page_url,
        next_page_url: articlesDate.next_page_url,
        prev_page_url: articlesDate.prev_page_url,
        path: articlesDate.path,
        from: articlesDate.from,
        to: articlesDate.to,
        data: articlesDate.data,
      })
    );
  }),
];
