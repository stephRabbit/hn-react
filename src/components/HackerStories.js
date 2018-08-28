import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
// -------------------
import { loadStories } from '../actions/stories'
// -------------------
import Header from './Header'
import HackerStory from './HackerStory'

const styles = theme => ({
  newsContainer: {
    padding: '.75rem'
  }
})

export class HackerList extends Component {
  componentDidMount() {
    if (this.props.stories.length === 0) {
      this.props.loadStories()
    }
  }

  render() {
    const { classes, stories } = this.props
    return (
      <div>
        <Header landing="true" />
        <div className={classes.newsContainer}>
          {stories && stories.map(story => <HackerStory key={story.id} story={story}/>)}
        </div>
      </div>
    )
  }
}

const mapState = ({ stories }) => ({ stories })
const mapDispatch = { loadStories }

export default compose(
  connect(mapState, mapDispatch),
  withStyles(styles)
)(HackerList)