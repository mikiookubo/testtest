import { FC, useState } from 'react';

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  prevOnClick: () => false | undefined;

  lastPage: string;
  nextOnClick: () => false | undefined;
  prevDisabled: boolean;
  nextDisabled: boolean;
};

export const PageArticleButton: FC<Props> = ({
  setCurrentPage,
  prevOnClick,
  prevDisabled,
  lastPage,
  nextOnClick,
  nextDisabled,
}) => {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div>
      <button onClick={prevOnClick} disabled={prevDisabled}>
        ＜
      </button>
      {pages.map((page) => (
        <button
          onClick={() => {
            setCurrentPage(page);
          }}
          // disabled={page < Number(lastPage) + 1 ? false : true}
        >
          {page}
        </button>
      ))}
      <button onClick={nextOnClick} disabled={nextDisabled}>
        ＞
      </button>
    </div>
  );
};
