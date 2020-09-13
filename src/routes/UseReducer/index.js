import React, { useReducer } from 'react';
import { Button } from 'antd';

const UseReducer = () => {
  const initState = {count: 1};
  const reducers = (state, action) => {
    switch(action.type) {
      case 'increase': {
        return {
          ...state,
          count: state.count + 1
        }
      }
      case 'decrease': {
        return {
          ...state,
          count: state.count - 1
        }
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducers, initState);
  return (
    <div>
      <div>{`当前数据：${state.count}`}</div>
      <Button onClick={() => dispatch({type: 'increase'})}>+</Button>
      <Button onClick={() => dispatch({type: 'decrease'})}>-</Button>
    </div>
  );
}

export default UseReducer;
