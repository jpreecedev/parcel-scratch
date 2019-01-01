import * as React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

if (module.hot) {
  module.hot.accept()
}

render(
  <Router>
    <Home path="/" />
    <About path="/about" />
    <NotFound default />
  </Router>,
  document.getElementById('root')
)
