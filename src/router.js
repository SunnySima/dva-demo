import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/index';
import ReduxDemo from './routes/ReduxDemo/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/reduxDemo" exact component={ReduxDemo} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
