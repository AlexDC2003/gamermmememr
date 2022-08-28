import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Profile from './views/profile'
import Home from './views/home'
import CashMatches from './views/cash-matches'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Profile} path="/profile" />
        <Route exact component={Home} path="/" />
        <Route exact component={CashMatches} path="/cash-matches" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
