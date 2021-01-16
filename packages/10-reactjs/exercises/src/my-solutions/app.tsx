import React, { FC } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import {ExcerciseSix  } from './excercise-six'

export const App: FC = () => {
  return (
    <BrowserRouter>

      <Link to="/exercise-six">Exercise six</Link>

      <Route path="/exercise-six">
        <ExcerciseSix  />
      </Route>
     </BrowserRouter>
  )
}
