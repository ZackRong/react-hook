import React from 'react';
// import { Link } from 'react-router-dom';
import './index.less';
import { Link } from 'react-router-dom';

const prefixCls = 'home-page';

const Home = () => (
  <div className={prefixCls}>
    <Link to='/useState'>useState</Link>
    <Link to='/useEffect'>useEffect</Link>
  </div>
);

export default Home;
