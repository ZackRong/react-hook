import React from 'react';
import ReactDom from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { Home, UseState, UseEffect } from './routes';

const App = () => (
  <HashRouter>
    <Switch>
      <Route path='/useState' component={UseState} />
      <Route path='/useEffect' component={UseEffect} />
      <Route path='/' component={Home} />
    </Switch>
  </HashRouter>
);

ReactDom.render(<App />, document.getElementById('root'));
