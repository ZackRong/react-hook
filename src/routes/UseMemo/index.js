import React, { useState, useMemo, memo } from 'react';
import { Button } from 'antd';

const Child1 = () => {
  console.log('我更新了');
  return (
    <div>我是子组件1，因为父组件有state变了，即使我接收的数据内容不变，但我还是会更新。</div>
  );
};

const Parent1 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('rongzhx');
  const [age, setAge] = useState(20);
  const info = {name, age};

  return (
    <div style={{marginBottom: 24}}>
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>点击变化</Button>
      <Child1 info={info} />
    </div>
  )
};

/**************************************/
const Child2 = memo(() => {
  console.log('我不会更新了');
  return (
    <div>我是子组件2，因为我接收的Props数据是‘记忆型’的，所以我不会更新。</div>
  );
});

const Parent2 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('rongzhx');
  const [age, setAge] = useState(20);
  const info = useMemo(() => ({name, age}), [name, age]);

  return (
    <div style={{marginBottom: 24}}>
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>点击变化</Button>
      <Child2 info={info} />
    </div>
  )
};

const UseMemo = () => {
  return (
    <div>
      <Parent1 />
      <Parent2 />
    </div>
  );
}

export default UseMemo;
