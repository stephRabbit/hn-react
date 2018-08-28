import { FETCH_STORIES } from '../constants'
import Utils from '../utils/Utils'

const intialState = []

export default (state = intialState, action) => {
  switch (action.type) {
    case FETCH_STORIES:
      return [ ...action.stories ]
    default:
      return state
  }
}