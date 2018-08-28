import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
// -------------------
import Header from './Header'

const styles = theme => ({
  newsContainer: {
    padding: '.75rem'
  },
  newsItem: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center',
    wordBreak: 'break-word'
  },
  header: {
    marginBottom: '1rem'
  }
})

const NotFound = ({ classes }) => {
  return (
    <div className="contacts">
      <Header />
      <div className={classes.newsContainer}>
        <Paper
          className={classes.newsItem}
          elevation={1}
          square={true}
        >
          <Typography
            className={classes.header}
            variant="headline"
          >
            Oops! Page not found
          </Typography>
          <Button
            color="primary"
            component={Link}
            to="/"
            variant="outlined"
          >
            Get me out of here!
          </Button>
        </Paper>
      </div>
    </div>
  )
}

export default withStyles(styles)(NotFound)
