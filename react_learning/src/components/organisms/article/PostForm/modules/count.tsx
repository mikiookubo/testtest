import React from 'react';
import { useState } from 'react';
export const Count = () => {
  const [count, setCount] = useState(0);
  const onclick = () => {
    setCount(count + 1);
  };
  const click = () => {
    setCount(count - 1);
  };
  const onChange = (e: string) => {
    setCount(10);
  };
  console.log(count);
  return (
    <div>
      <p>{count}回</p>
      <input type="text" onChange={() => onChange}></input>
      <button onClick={onclick}>+</button>
      <button onClick={click}>-</button>
    </div>
  );
};
