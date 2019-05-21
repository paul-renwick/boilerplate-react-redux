import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// Material UI
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

class Test extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <React.Fragment>

        <Link to='/SignIn'><h2>This link goes nowhere.</h2></Link>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}><Typography variant='h1'>Draft layout of my personal project</Typography></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant='h3'>I could slot a responsive graph in here. I have seen that Material UI has some insbuilt graph features.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant='h3'>Perhaps this is where feedback for personal project could exist.
              By feedback I am referring to the percent correct, target etc.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <Typography>
                This could be where a dropdown menu exists that allows you to choose what data set is being displayed in the graph.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <Typography>
                This could be where a dropdown menu exists that allows you to choose what data set is being displayed in the graph.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <Typography>This could be where some buttons are.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <Typography>This could be where some buttons are.</Typography>
            </Paper>
          </Grid>
        </Grid>

      </React.Fragment>

    )
  }
}

Test.propTypes = {
  classes: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Test))
