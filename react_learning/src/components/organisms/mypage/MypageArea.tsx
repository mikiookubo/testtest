import { FC, useContext, useEffect, useState } from 'react';
import { SimpleLabelAndTextInput } from '../../molecules/SimpleLabelAndTextInput';
import { formValidate } from '../../../validation/ErrorObject';
import React from 'react';
import { UserIdContext } from '../../../utils/useridContext';
import { MyPageTextInput } from '../../atoms/MypageTextInput';
import { Icon } from '../../atoms/Icon';

const errorForm = {
  login: '',
  password: '',
  passwordCheck: '',
  name: '',
};

const valueForm = {
  login: '',
  password: '',
  passwordCheck: '',
  name: '',
};

type Props = {
  src: string;
  value: string;
};

export const MyPageArea: FC<Props> = ({ src, value }) => {
  return (
    <div>
      <Icon src={src}></Icon>
      <MyPageTextInput value={value} />
    </div>
  );
};
