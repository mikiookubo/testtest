import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from './utils/paths';
import { Form } from './pages/form/Form';
import { BlackJack } from './pages/blackJack/BlackJack';
import { General } from './pages/general/general';
import { ArticleAdd } from './pages/general/articles/Add';
import { Detail } from './pages/general/articles/Detail';
import { LoginTop } from './pages/general/login';
import { InfoTop } from './pages/general/info';
import { Mypage } from './pages/general/mypage';
import { UserIdProvider } from './utils/useridContext';
import { NotFound } from './pages/general/404page';
import { InfoChange } from './pages/general/Infochange';
import { PostList } from './pages/general/articles/postlist';
import { InfoProvider } from './utils/imfoContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserIdProvider>
        <InfoProvider>
          <Routes>
            <Route path={paths.top} element={<App />} />
            <Route path={paths.form} element={<Form />} />
            <Route path={paths.blackJack} element={<BlackJack />} />
            <Route path={paths.general} element={<General />} />
            <Route path={paths.article.add} element={<ArticleAdd />} />
            <Route path={paths.articles.index + '/:id'} element={<Detail />} />
            <Route path={paths.loginTop} element={<LoginTop />} />
            <Route path={paths.infoTop} element={<InfoTop />} />
            <Route path={paths.mypage} element={<Mypage />} />
            <Route path={paths.infochange} element={<InfoChange />} />
            <Route path={paths.articles.index} element={<PostList />} />
            <Route path={paths.notfound} element={<NotFound />} />
          </Routes>
        </InfoProvider>
      </UserIdProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
