import stories from '../../reducers/stories'
import storyData from '../fixtures/stories'
import { FETCH_STORIES } from '../../constants'

test('should setup default values', () => {
  let state
  state = stories(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should get story data', () => {
  let state
  state = stories({ stories: [] }, { type: FETCH_STORIES, stories: storyData })
  expect(state).toEqual(storyData)
})