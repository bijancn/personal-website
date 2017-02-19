import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import Home from './modules/Home'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Physics from './modules/Physics'

require("./public/index.less");

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
      <Route path="/physics" component={Physics}/>
    </Route>
  </Router>
), document.getElementById('app'))
