import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// -------------------
import Utils from '../utils/Utils'

const styles = theme => ({
  storyHeader: {
    padding: '16px',
    marginBottom: '1rem',
    wordBreak: 'break-word'
  },
  newsInfoItemsLink: {
    fontSize: '.7rem',
    color: '#888',
    textDecoration: 'none',
    '&:hover': {
      color: '#666'
    }
  },
  newsInfoItems: {
    fontSize: '.7rem',
    color: '#888'
  }
})

const Story = ({ classes, story }) => {
  let storyUrl
  if (story.url) {
    storyUrl = Utils.getHost(story.url)
  }
  return (
    <section className={classes.storyHeader}>
      <Typography variant="title">
        {story.title}
      </Typography>
      <Typography>
        <span className={classes.newsInfoItems}>
          {story.score} points{story.url && ' | '}
        </span>
        <a
          className={classes.newsInfoItemsLink}
          href={story.url}
        >
          {storyUrl}
        </a>
      </Typography>
    </section>
  )
}

export default withStyles(styles)(Story)
