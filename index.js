import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import Home from './modules/Home'
import LatexPackages from './modules/LatexPackages'
import Physics from './modules/Physics'
import Contact from './modules/Contact'

require("./public/index.less");

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/physics" component={Physics}/>
      <Route path="/latex-packages" component={LatexPackages}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('app'))
