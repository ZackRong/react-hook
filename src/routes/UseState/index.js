import React, { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{`当前数量为：${count}`}</span>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default UseState;
