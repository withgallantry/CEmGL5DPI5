import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {App} from './components/App.js';
import {Storify} from './components/Storify/App';

export const routes = (
  <Route path='/' component={Storify}>
    <IndexRoute title='App' component={Storify}/>
  </Route>
);

export default routes;
