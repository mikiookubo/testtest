import { FC } from 'react';

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
  nextOnClick,
  nextDisabled,
}) => {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="mt-8 text-center mb-6">
      <button
        className="w-8 border border-gray-400 border-solid"
        onClick={prevOnClick}
        disabled={prevDisabled}
      >
        ＜
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className="w-8 border border-gray-400 border-solid ml-2.5"
          onClick={() => {
            setCurrentPage(page);
          }}
        >
          {page}
        </button>
      ))}
      <button
        className="w-8 border border-gray-400 border-solid ml-2.5"
        onClick={nextOnClick}
        disabled={nextDisabled}
      >
        ＞
      </button>
    </div>
  );
};
