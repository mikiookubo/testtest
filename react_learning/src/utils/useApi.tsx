import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from './paths';

export const useApi = () => {
  const [data, setData] = useState<Response | {}>();

  const naviGate = useNavigate();
  const ApiFunction = async (props: {
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
    const resData = await res.json();

    setData(resData);

    if (props.url === undefined) {
      naviGate(paths.notfound);
    }
  };

  return { data, ApiFunction, setData };
};
