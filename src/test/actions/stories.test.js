import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { FETCH_STORIES } from '../../constants'
import { fetchStories, loadStories } from '../../actions/stories'
import fetchMock from 'fetch-mock'

const createMockStore = configureMockStore([ thunk ])

test('should setup up fetch stories action object', () => {
  const action = fetchStories({
    stories: [{
      by: 'lainon',
      descendants: 1,
      id: 17851941,
      kids: [
        17852357
      ],
      score: 48,
      time: 1535382608,
      title: 'How to Architect a Query Compiler, Revisited [pdf]',
      type: 'story',
      url: 'https://www.cs.purdue.edu/homes/rompf/papers/tahboub-sigmod18.pdf'
    }]
  })

  expect(action).toEqual({
    type: FETCH_STORIES,
    stories: {
      stories: [{
        by: 'lainon',
        descendants: 1,
        id: 17851941,
        kids: [
          17852357
        ],
        score: 48,
        time: 1535382608,
        title: 'How to Architect a Query Compiler, Revisited [pdf]',
        type: 'story',
        url: 'https://www.cs.purdue.edu/homes/rompf/papers/tahboub-sigmod18.pdf'
      }]
    }
  })
})

describe('Async actions test', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should get top stories from api', () => {
    fetchMock
      .getOnce('/', { body: { stories: [  {
        "by" : "dhouston",
        "descendants" : 71,
        "id" : 8863,
        "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
        "score" : 111,
        "time" : 1175714200,
        "title" : "My YC app: Dropbox - Throw away your USB drive",
        "type" : "story",
        "url" : "http://www.getdropbox.com/u/2/screencast.html"
      }] }, headers: { 'content-type': 'application/json' } })

    const expectedActions = [
      { type: FETCH_STORIES,
        body: {
          stories: [{
            "by" : "dhouston",
            "descendants" : 71,
            "id" : 8863,
            "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
            "score" : 111,
            "time" : 1175714200,
            "title" : "My YC app: Dropbox - Throw away your USB drive",
            "type" : "story",
            "url" : "http://www.getdropbox.com/u/2/screencast.html"
          }]
        }
      }
    ]

    const store = createMockStore({ stories: [] })

    return store.dispatch(loadStories()).then(done => {
      setTimeout(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
    })
  })
})