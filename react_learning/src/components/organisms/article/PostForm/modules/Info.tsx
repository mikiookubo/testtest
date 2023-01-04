import { Heder } from './Heder';
import { LabelAndTextInput } from '../../../../molecules';
import { Title } from '../../../Title';

export const Info = () => {
  const onChange = () => {};
  return (
    <div>
      <Heder></Heder>
      <Title>会員情報</Title>
      <LabelAndTextInput
        labelTitle="ログインID (メールアドレス)"
        errorMessage=""
        value=""
        placeholder=""
        onChange={onChange}
      />
      <LabelAndTextInput
        labelTitle="パスワード(英数8文字以上)"
        errorMessage=""
        value=""
        placeholder=""
        onChange={onChange}
      />
      <LabelAndTextInput
        labelTitle="パスワード確認"
        errorMessage=""
        value=""
        placeholder=""
        onChange={onChange}
      />
      <LabelAndTextInput
        labelTitle="ニックネーム(8文字以上)"
        errorMessage=""
        value=""
        placeholder=""
        onChange={onChange}
      />
    </div>
  );
};
