import React, { Component } from 'react'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
// -------------------
import Header from './Header'
import Story from './Story'
import StoryComment from './StoryComment'

const styles = theme => ({
  newsContainer: {
    padding: '.75rem'
  }
})

class HackerStoryComment extends Component {
  state = {
    story: {},
    comments: []
  }

  componentDidMount() {
    this.getStoryWithComments(this.props.match.params.id)
  }

  getStoryWithComments = async paramId => {
    try {
      const story = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${paramId}.json`)
      let storyResult = story.data
      this.setState(() => ({ story: storyResult }))
      let commentList = []
      if (storyResult.kids) {
        let comments = storyResult.kids.slice(0, 20)
        comments.forEach(async id => {
          try {
            const comment = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            await commentList.push(comment.data)
            this.setState(() => ({ comments: commentList }))
          }
          catch (err) {
            console.log('Error: ', err)
          }
        })
      }
    }
    catch (err) {
      console.log('Error: ', err)
    }
  }

  render() {
    const { classes } = this.props
    const { comments, story } = this.state
    return (
      <div>
        <Header />
        <div className={classes.newsContainer}>
          {story && <Story story={story} />}
          {comments.length > 0 && comments.map(comment => <StoryComment comment={comment} key={comment.id} />)}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(HackerStoryComment)
