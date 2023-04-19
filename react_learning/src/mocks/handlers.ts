import { url } from 'inspector';
import { rest } from 'msw';
import { useContext } from 'react';

// https://mswjs.io/
// ここにinterface仕様書のAPIを作っていく

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    if (req.body === null) {
      return res(ctx.status(404));
    }

    return res(
      ctx.status(200),
      ctx.json({
        user: {
          user_id: '6850e3be-ff6a-4706-9157-d2bab23ff47d',
          name: 'リアクト太郎',
          email: 'okubomk0012@gmail.com',
          password: 'kkkkkkkkkkkk9',
          created_at: '2022-03-29T01:45:22.000000Z',
          updated_at: '2022-03-29T01:45:22.000000Z',
          deleted_at: null,
          representative_image:
            'https://laravel-study-shinoda.s3.ap-northeast-1.amazonaws.com/user/6850e3be-ff6a-4706-9157-d2bab23ff47d',
          token: '4|tPK6mcUklKR26ngBcRwdPEhVwGn5vJrY9B5gNSir',
        },
      })
    );
  }),

  rest.post('/user', (req, res, ctx) => {
    if (req.body === null) {
      return res(ctx.status(500));
    }
    return res(ctx.status(201));
  }),

  rest.get('user/?useId', (req, res, ctx) => {
    const userId = req.url.searchParams.get('userId');

    console.log(userId);
    return res(
      ctx.json({
        userId: userId,
      })
    );
  }),
];
