import { useState } from 'react';

export const errorobj = {
  mailCheck: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
  passwordCheck: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,}$/i,
};

const emailValidation = (email: string) => {
  if (!email) return 'メールアドレスを入力してください';

  if (!errorobj.mailCheck.test(email)) {
    return '正しいメールアドレスを入力してください';
  }

  return (email = '');
};
const passwordValidation = (password: string) => {
  if (!password) return 'パスワードを入力してください';

  if (!errorobj.passwordCheck.test(password))
    return '正しくパスワードを入力してください';
  return (password = '');
};
export const formValidate = (type: string, value: string) => {
  switch (type) {
    case 'login':
      return emailValidation(value);
    case 'password':
      return passwordValidation(value);
  }
};
