import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Todo from './Todo/Todo'

const Routes = () => (
  <Switch>
    <Route path='/' component={Todo}
      exact  
    />
    {/* <Route path='/footer' component={HeaderAdd, Footer}
      exact  
    /> */}
  </Switch>
)

export default Routes