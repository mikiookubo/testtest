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
const passwordValidation = (password: string, passwordCheck?: string) => {
  if (!password) return 'パスワードを入力してください';
  if (passwordCheck === password) return '';

  if (!errorobj.passwordCheck.test(password))
    return '正しくパスワードを入力してください';
  return (password = '');
};
const passwordCheckValidation = (passwordCheck: string, password?: string) => {
  if (password !== passwordCheck) return 'パスワードが一致しません';

  if (!errorobj.passwordCheck.test(password))
    return '正しくパスワードを入力してください';
  return (password = '');
};
const nameValidation = (name: string) => {
  if (!name) return '名前を入力してください';

  if (name.length <= 8) {
    return '8文字以上で入力してください';
  }
  return (name = '');
};
export const formValidate = (type: string, value: string, values?: string) => {
  switch (type) {
    case 'login':
      return emailValidation(value);
    case 'password':
      return passwordValidation(value, values);
    case 'passwordCheck':
      return passwordCheckValidation(value, values);
    case 'name':
      return nameValidation(value);
  }
};
