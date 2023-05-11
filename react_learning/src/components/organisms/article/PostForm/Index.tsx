import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../../utils/paths';
import { Button } from '../../../atoms';
import { LabelAndTextInput, LabelAndTextArea } from '../../../molecules';
import { reducer } from './modules/reducer';
import type { InputForm } from './modules/types';
import { UserIdContext } from '../../../../utils/useridContext';

export const requiredError = '必須入力です';
export const initialState: InputForm = {
  shouldShowError: false,
  title: {
    value: '',
    errorMessage: requiredError,
    isDisabled: true,
  },
  description: {
    value: '',
    errorMessage: requiredError,
    isDisabled: true,
  },
};
export const PostForm: React.FC = () => {
  const navigate = useNavigate();
  const [formState, dispatch] = useReducer(reducer, initialState);
  const { userId, setUserId } = useContext(UserIdContext);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const { shouldShowError, title, description } = formState;

  useEffect(() => {
    if (!title.isDisabled && !description.isDisabled) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [title.value, description.value]);

  const clickPostButton = async () => {
    setUserId(userId + 1);
    if (!shouldShowError) {
      dispatch({
        type: 'showErrorMessage',
      });
    }
    if (
      title.errorMessage !== undefined ||
      description.errorMessage !== undefined
    )
      return;

    const data = {
      title: formState.title.value,
      content: formState.description.value,
      article_id: userId,
      created_at: '2021-05-01T06:30:09.123Z',
      updated_at: '2021-05-01T06:30:09.123Z',
    };

    const url = '/articles';
    const setting = {
      method: 'post',
      body: JSON.stringify(data),
    };
    try {
      const res = await fetch(url, setting);

      if (res.status === 404) {
        alert('サーバーにアクセス出来ません。');
        return;
      }

      navigate(paths.articles.detail(userId + ''), { state: 'add' });
    } catch (e) {
      console.log(e);
    }
    return;
  };
  console.log(isDisabled);

  return (
    <div>
      <div className="mb-5 w-1/2">
        <LabelAndTextInput
          labelTitle="タイトル"
          value={title.value}
          placeholder="タイトル"
          onChange={(value) => {
            dispatch({
              type: 'changeArticleTitle',
              payload: {
                title: value,
              },
            });
          }}
          errorMessage={shouldShowError ? title.errorMessage : undefined}
        />
      </div>

      <div className="mb-5">
        <LabelAndTextArea
          labelTitle="投稿内容"
          value={description.value}
          placeholder=""
          onChange={(value) => {
            dispatch({
              type: 'changeArticleDescription',
              payload: {
                description: value,
              },
            });
          }}
          errorMessage={shouldShowError ? description.errorMessage : undefined}
        />
      </div>

      <div className="w-3/12 float-right">
        <Button
          name="投稿する"
          onClick={clickPostButton}
          isDisabled={isDisabled}
        />
      </div>
    </div>
  );
};
