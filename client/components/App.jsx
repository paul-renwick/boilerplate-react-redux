import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Component Imports
import Test from './Test'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Test} />
      </Switch>
    </Router>
  )
}

export default App
