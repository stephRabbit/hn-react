import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// --------------------
import HackerStoryComment from '../components/HackerStoryComment'
import HackerStories from '../components/HackerStories'
import NotFound from '../components/NotFound'
import ScrollToTop from '../components/ScrollToTop'

const AppRouter = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={HackerStories} />
        <Route exact path="/item/:id" component={HackerStoryComment} />
        <Route component={NotFound} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
)

export default AppRouter