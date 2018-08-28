import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Parser from 'html-react-parser'
// -------------------
import Utils from '../utils/Utils'

const styles = theme => ({
  newsItem: {
    ...theme.mixins.gutters(),
    marginBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    wordBreak: 'break-word'
  },
  newsItemTitle: {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      color: '#666',
    }
  },
  newsInfoItemsLink: {
    fontSize: '.7rem',
    color: '#888',
    textDecoration: 'none',
    '&:hover': {
      color: '#666',
    }
  },
  newsInfoItems: {
    fontSize: '.7rem',
    color: '#888'
  },
  typeFont: '.9rem'
})

const StoryComment = ({ classes, comment }) => {
  if (comment.deleted) return <div></div>
  return (
    <Paper
      className={classes.newsItem}
      elevation={1}
      square={true}
    >
      <Typography className={classes.typeFont} component="div">
        {Parser(comment.text)}
      </Typography>
      <Typography>
        <span className={classes.newsInfoItems}>
          By {comment.by}{comment.time && ' | '}{Utils.formatDateTime(comment.time)} ago
        </span>
      </Typography>
    </Paper>
  )
}

export default withStyles(styles)(StoryComment)
