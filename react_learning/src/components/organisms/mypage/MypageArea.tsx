import { FC } from 'react';
import { MyPageTextInput } from '../../atoms/MypageTextInput';
import { Icon } from '../../atoms/Icon';

type Props = {
  src: string;
  value: string;
};

export const MyPageArea: FC<Props> = ({ src, value }) => {
  return (
    <div className="flex justify-center">
      <Icon src={src} />
      <MyPageTextInput value={value} />
    </div>
  );
};
