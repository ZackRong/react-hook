import React, { useState } from 'react';
import { Button } from 'antd';
import './index.less';

const prefixCls = 'use-state';

const UseState = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  // 函数式更新
  const decrease = () => {
    setCount(prevCount => prevCount - 1);
  }

  // 3s之后增加
  const increaseAfter3s = () => {
    setTimeout(() => {
      setCount1(count1 + 1);
    }, 3000);
  }

  // 3s之后函数式增加
  const increaseAfter3sFn = () => {
    setTimeout(() => {
      setCount2(prevCount2 => prevCount2 + 1);
    }, 3000);
  }

  return (
    <div className={prefixCls}>
      <div className={prefixCls + '-block'}>
        <span className='text'>{`当前数量为：${count}`}</span>
        <Button onClick={increase}>+</Button>
        <Button onClick={decrease}>-</Button>
      </div>
      <div className={prefixCls + '-block'}>
        <span className='text'>{`3s之后增加的数量为：${count1}`}</span>
        <Button onClick={increaseAfter3s}>3s之后增加，点击多次只更新一次</Button>
      </div>
      <div className={prefixCls + '-block'}>
        <span className='text'>{`3s之后函数式增加的数量为：${count2}`}</span>
        <Button onClick={increaseAfter3sFn}>3s之后函数式增加，点击多次，更新多次</Button>
      </div>
    </div>
  );
}

export default UseState;
