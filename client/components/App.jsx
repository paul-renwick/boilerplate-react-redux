import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Component Imports
import Test from './Test'
import SignIn from './SignIn'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Test} />
        <Route exact path='/SignIn' component={SignIn}/>
      </Switch>
    </Router>
  )
}

export default App
