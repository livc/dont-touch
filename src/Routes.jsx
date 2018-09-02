import React from 'react'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Home from './containers/Home'
import Buy from './containers/Buy'
import Showlist from './containers/Showlist'


const history = createBrowserHistory()

const router = App => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/buy" exact component={Buy} />
      <Route path="/showlist" exact component={Showlist} />
    </Switch>
  </Router>
)

export default router