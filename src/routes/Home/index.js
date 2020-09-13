import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const prefixCls = 'home-page';

const Home = () => (
  <div className={prefixCls}>
    <Link to='/useState'>useState</Link>
    <Link to='/useEffect'>useEffect</Link>
    <Link to='/useContext'>useContext</Link>
    <Link to='/useReducer'>useReducer</Link>
  </div>
);

export default Home;
