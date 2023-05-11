type Props = {
  src: string;
  imgLabel: string;
  setFile: (isState: string) => void;
};

export const FileProvider: React.FC<Props> = ({ imgLabel, setFile, src }) => {
  const OnChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader: any = new FileReader();

    if (e.currentTarget.files !== null) {
      const files = e.currentTarget.files[0];
      console.log(files);
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
      console.log(files);
      reader.readAsDataURL(files);
      console.log(files);

      reader.onload = () => {
        setFile(reader.result);
        console.log(reader.result);
      };

      setFile(files.name);
      console.log(files.name);
    }
  };

  return (
    <div className="text-center">
      <label className="inline">
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
