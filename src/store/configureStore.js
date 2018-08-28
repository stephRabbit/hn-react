import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// --------------------
import stories from '../reducers/stories'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      stories
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}