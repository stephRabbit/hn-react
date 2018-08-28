import axios from 'axios'
import { FETCH_STORIES } from '../constants'

export const fetchStories = stories => {
  return {
    type: FETCH_STORIES,
    stories
  }
}

export const loadStories = () => {
  return async dispatch => {
    try {
      const topStories = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      let results = topStories.data.slice(0, 10)
      let resultsList = []
      results.forEach(async id => {
        try {
          const item = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          resultsList.push(item.data)
          dispatch(fetchStories(resultsList))
        }
        catch (err) {
          console.log('Error: ', err)
        }
      })
    }
    catch (err) {
      console.log('Error: ', err)
    }
  }
}