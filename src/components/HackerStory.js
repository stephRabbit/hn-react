import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
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
  }
})

const HackerStory = ({ classes, story }) => {
  let storyUrl
  if (story.url) {
    storyUrl = Utils.getHost(story.url)
  }
  return (
    <Paper
      className={classes.newsItem}
      elevation={1}
      square={true}
    >
      <div>
        <Typography>
          <Link
            className={classes.newsItemTitle}
            to={`/item/${story.id}`}
          >
            {story.title}
          </Link>
          {story.url && (
            <a
              href={story.url}
              className={classes.newsInfoItemsLink}
            >
              {' ('}{storyUrl}{') '}
            </a>
          )}
        </Typography>
          <div className={classes.newsMetaData}>
            <Typography className={classes.newsInfoItems}>
              {story.score && (
                <span className={classes.newsInfoItems}>
                  {story.score} points{story.kids && story.kids.length > 0 && ' | '}
                </span>
              )}
              {story.kids && story.kids.length > 0 && (
                <Link
                  className={classes.newsInfoItemsLink}
                  to={`/item/${story.id}`}
                >
                  {story.kids.length} comments
                </Link>
              )}
            </Typography>
          </div>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(HackerStory)
