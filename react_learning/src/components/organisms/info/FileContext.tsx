type Props = {
  src: string;
  imgLabel: string;
  setFile: (isState: string) => void;
};

export const FileProvider: React.FC<Props> = ({ imgLabel, setFile, src }) => {
  const OnChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader: any = new FileReader();
    let url: string | ArrayBuffer | null = '';
    if (e.currentTarget.files !== null) {
      const files = e.currentTarget.files[0];
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
        setFile(reader.result);
      };

      setFile(files.name);
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
