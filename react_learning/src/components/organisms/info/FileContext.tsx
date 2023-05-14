type Props = {
  src: string;
  imgLabel: string;
  setFile: (isState: ArrayBuffer | string | null) => void;
};

export const FileProvider: React.FC<Props> = ({ imgLabel, setFile, src }) => {
  const OnChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader: string | FileReader = new FileReader();

    if (e.currentTarget.files !== null) {
      const files = e.currentTarget.files[0];

      if (files === undefined) {
        return false;
      }

      if (!e.target.files) {
        alert('ファイルを選択してください');
        return false;
      }

      if (files.type !== 'image/jpeg') {
        alert('ファイル形式はjpegのみです');
        return false;
      }

      reader.readAsDataURL(files);

      reader.onload = () => {
        setFile(reader?.result);
      };
    }
  };

  return (
    <div className="w-1/4 m-auto text-center mt-5">
      <label className="inline text-sm">
        <img
          className="m-auto w-24 h-24 rounded-full"
          src={src}
          alt="icon"
        ></img>
        <div>{imgLabel}</div>
        <input
          onChange={OnChangeFile}
          type="file"
          name="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
};
