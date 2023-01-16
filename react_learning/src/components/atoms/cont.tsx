import React from 'react';
import { useState } from 'react';
export const Count = () => {
  const [count, setCount] = useState(0);
  const [v, setv] = useState('');
  const onclick = () => {
    setCount((prev) => prev + 1);
    // console.log(count);
  };

  const click = () => {
    setCount(count - 1);
  };
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setv((prev) => e.target.value);
    console.log(v);
  };
  // console.log(count);
  console.log(v);

  return (
    <div>
      <p>{count}回</p>
      <input type="text" onChange={(e) => change(e)}></input>
      <button onClick={onclick}>+</button>
      <button onClick={click}>-</button>
      <input value={v} placeholder="" onChange={change} />
    </div>
  );
};
