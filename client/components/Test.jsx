import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';

class Test extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Typography variant='h1'>This is a test.</Typography>
        <Link to='/SignIn'><h2>This link goes nowhere.</h2></Link>

      </React.Fragment>

    )
  }
}

function mapStateToProps (state) {
  return {
  }
}

export default connect(mapStateToProps)(Test)
