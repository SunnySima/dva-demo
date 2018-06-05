import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ReduxDemo from './routes/ReduxDemo';
import CountDemo from './routes/CountDemo';
import Post from './components/Post'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/reduxDemo" exact component={ReduxDemo} />
        <Route path="/countDemo" exact component={CountDemo} />
        <Route path="/post" exact component={Post} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
