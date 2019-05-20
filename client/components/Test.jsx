import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Test extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>This is a test.</h1>
        <Link to='/'><h2>This link goes nowhere.</h2></Link>

      </React.Fragment>

    )
  }
}

function mapStateToProps (state) {
  return {
  }
}

export default connect(mapStateToProps)(Test)
