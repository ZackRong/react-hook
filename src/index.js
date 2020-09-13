import React from 'react';
import ReactDom from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { Home, UseState, UseEffect, UseContext, UseReducer } from './routes';

const App = () => (
  <HashRouter>
    <Switch>
      <Route path='/useState' component={UseState} />
      <Route path='/useEffect' component={UseEffect} />
      <Route path='/useContext' component={UseContext} />
      <Route path='/useReducer' component={UseReducer} />
      <Route path='/' component={Home} />
    </Switch>
  </HashRouter>
);

ReactDom.render(<App />, document.getElementById('root'));
