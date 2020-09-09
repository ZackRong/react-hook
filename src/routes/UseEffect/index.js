import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './index.less';

const prefixCls = 'use-effect';

const UseEffect = () => {
  // 设置标题
  const setTitle = () => {
    const time = new Date();
    document.title = time;
  };

  useEffect(setTitle);

  return (
    <div className={prefixCls}>
      use effect
    </div>
  );
};

export default UseEffect;
