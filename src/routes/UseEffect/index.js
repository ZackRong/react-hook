import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './index.less';

const prefixCls = 'use-effect';

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // 设置标题
  const setTitle = () => {
    // const time = new Date();
    document.title = `count为：${count}，count2为：${count2}`;

    return () => {
      console.log(`上一次count为：${count}，count2为：${count2}`)
    }
  };

  // 传入了第二个参数，则只有count改变了，才会刷新
  useEffect(setTitle, [count]);

  return (
    <div className={prefixCls}>
      <Button onClick={() => setCount(count + 1)}>修改count</Button>
      <Button onClick={() => setCount2(count2 + 1)}>修改count2</Button>
    </div>
  );
};

export default UseEffect;
