import { useState } from 'react';
type Props = {
  img: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  imgLabel: string;
};

export const FileProvider: React.FC<Props> = ({ img, imgLabel }) => {
  const [file, setFile] = useState<File | null>(null);

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  return (
    <div className="text-center">
      <label className="inline">
        <div>{img}</div>
        <div>{imgLabel}</div>
        <input
          onChange={onChangeFile}
          type="file"
          name="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
};
