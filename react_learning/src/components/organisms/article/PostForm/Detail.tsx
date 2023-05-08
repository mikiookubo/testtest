import { FC } from 'react';

type Props = {
  name: string;
  title: string;
  content: string;
};

export const DetailArea: FC<Props> = ({ name, title, content }) => {
  return (
    <div>
      <p>ユーザーネーム:{name}</p>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};
