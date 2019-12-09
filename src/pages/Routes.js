import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Todo from './Todo/Todo'
// import TodoV from './Todo/Todo2'

const Routes = () => (
  <Switch>
    <Route path='/' component={Todo}
      exact  
    />
  </Switch>
)

export default Routes