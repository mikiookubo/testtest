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
const passwordValidation = (
  type: string,
  textValue: string,
  password?: string,
  passwordCheck?: string
) => {
  if (!textValue) {
    return 'パスワードを入力してください';
  }

  if (passwordCheck === textValue) {
    return '';
  }

  if (!errorobj.passwordCheck.test(textValue)) {
    return '正しくパスワードを入力してください';
  }
  if (!passwordCheck) {
    return '';
  }
  if (textValue !== password) {
    return 'パスワードが一致しません';
  } else {
  }
};

export const passwordCheckValidation = (
  textValue: string,
  password?: string
) => {
  if (password !== textValue) {
    return 'パスワードが一致しません';
  }
  if (password === textValue) {
    password = '';
  }

  // if (!errorobj.passwordCheck.test(password))
  //   return '正しくパスワードを入力してください';
};
const nameValidation = (name: string) => {
  if (!name) return '名前を入力してください';

  if (name.length < 8) {
    return '8文字以上で入力してください';
  }
  return (name = '');
};
export const formValidate = (
  type: string,
  textValue: string,
  password?: string,
  passwordCheck?: string
) => {
  switch (type) {
    case 'login':
      return emailValidation(textValue);
    case 'password':
      return passwordValidation(type, textValue, password, passwordCheck);
    case 'passwordCheck':
      return passwordCheckValidation(textValue, password);
    case 'name':
      return nameValidation(textValue);
  }
};
