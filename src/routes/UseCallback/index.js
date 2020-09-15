import React, { useCallback, useState, memo } from 'react';
import { Button } from 'antd';

function Child1 (props) {
  console.log('虽然我没数据变化，但我跟着变了')
  return (
    <div>我是子组件1，我会随着父组件state变化而重新渲染</div>
  );
};

function Parent1 () {
  const [count, setCount] = useState(0);

  return (
    <div style={{marginBottom: 16}}>
      <span>{`我变成了${count}，子组件跟着刷新了 `}</span>
      <Button onClick={() => setCount(count + 1)}>点击修改</Button>
      <Child1 />
    </div>
  )
};
/********************************************/
const Child2 = memo(() => {
  console.log('我用memo包裹了，即使父组件数据变了，但我不会变。')
  return (
    <div>我是子组件2，我不会随着父组件state变化而重新渲染</div>
  );
});

function Parent2 () {
  const [count, setCount] = useState(0);

  return (
    <div style={{marginBottom: 16}}>
      <span>{`我变成了${count}，子组件不会跟着刷新了 `}</span>
      <Button onClick={() => setCount(count + 1)}>点击修改</Button>
      <Child2 />
    </div>
  )
};
/********************************************/
const Child3 = memo(() => {
  console.log('即使我用memo包裹了，但接收的回调props变了，所以我跟着变了。')
  return (
    <div>我是子组件3，即使我用memo包裹了，但接收的回调props变了，所以我跟着变了。</div>
  );
});

function Parent3 () {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  // 每次重新渲染，导致重新生成了changeName回调函数。
  const changeName = newName => setName(newName);

  return (
    <div style={{marginBottom: 16}}>
      <span>{`我变成了${count}，子组件会跟着刷新 `}</span>
      <Button onClick={() => setCount(count + 1)}>点击修改</Button>
      <Child3 changeName={changeName} />
    </div>
  )
};
/********************************************/
const Child4 = memo((props) => {
  console.log('我用memo包裹了，且接收的回调props是记忆型的，所以我没跟着父组件变化')
  return (
    <div>
      我是子组件4，接收的回调props是‘记忆型’的，所以我没跟着父组件变化
      <Button onClick={() => props.changeName('John')}>点击后，我接收的props回调变了，所以我刷新了</Button>
    </div>
  );
});

function Parent4 () {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  // 每次重新渲染，导致重新生成了changeName回调函数。
  const changeName = useCallback(newName => {
    setName(newName);
    // console.log(name)
  }, [] /*[name]*/);

  return (
    <div style={{marginBottom: 16}}>
      <span>{`我变成了${count}，子组件不会跟着刷新 `}</span>
      <Button onClick={() => setCount(count + 1)}>点击修改</Button>
      <Child4 changeName={changeName} />
    </div>
  )
};


const UseCallback = (props) => {
  return (
    <div>
      <Parent1 />
      <Parent2 />
      <Parent3 />
      <Parent4 />
    </div>
  );
}

export default UseCallback;
