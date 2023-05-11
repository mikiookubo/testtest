import { FC, VFC, useEffect, useState } from 'react';

export const UseApi = () => {
  const [data, setData] = useState();
  const [res, setRes] = useState();
  const aa = async (props: {
    url: string;
    config: {
      method: string;
      headers?: {
        Authorization: string;
      };
      body?: BodyInit;
    };
  }) => {
    const res = await fetch(props.url, props.config);
    const resData: any = await res.json();
    setData(resData);
  };

  // const [data, setData] = useState();

  // console.log(resData.email);
  // console.log(resData, 'フックのデータ');
  // setData(resData);
  console.log('apiたたけてる');
  return { data, aa, res };
};
