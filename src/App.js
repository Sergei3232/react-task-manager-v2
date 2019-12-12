import React from 'react'
import Todo from './pages/Todo/Todo'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <div className="page">
      <BrowserRouter>
        <Todo/>
      </BrowserRouter>
    </div>
  )
}

export default App;
