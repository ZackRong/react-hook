import React, { useContext, createContext, useState } from 'react';
import { Button } from 'antd';

const themeContext = {
  color: 'red'
};

// 创建Context对象
const ThemeContext = createContext(themeContext);

function App () {
  const [color, setColor] = useState(themeContext.color);

  return (
    <ThemeContext.Provider value={color}>
      <ToolBar />
      <Button onClick={() => setColor('red')}>红色</Button>
      <Button onClick={() => setColor('blue')}>蓝色</Button>
    </ThemeContext.Provider>
  );
}

function ToolBar () {
  return (
    <ToolText />
  );
}

function ToolText () {
  const color = useContext(ThemeContext);
  console.log(color)

  return (
    <div style={{color}}>文字颜色改了</div>
  );
}

const UseContext = () => {
  return (
    <App />
  )
};

export default UseContext;
