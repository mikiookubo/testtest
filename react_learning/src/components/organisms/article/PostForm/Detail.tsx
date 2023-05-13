import { FC } from 'react';

type Props = {
  name: string;
  title: string;
  content: string;
};

export const DetailArea: FC<Props> = ({ name, title, content }) => {
  return (
    <div className="mt-6 p-5 border-2 border-black border-solid">
      <p>ユーザーネーム: {name}</p>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};
