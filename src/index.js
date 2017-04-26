import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router, Route} from 'react-router';

import App from './components/App';
import Login from './components/Login';
import Profile from './components/Profile';

const Root = () => {

  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
      </Route>

    </Router>
  )
}

render(<Root />, document.querySelector('#root'));
