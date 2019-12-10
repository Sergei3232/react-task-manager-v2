import React from 'react'
import Routes from './pages/Routes'
import Todo from './pages/Todo/Todo'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <div className="page">
      <BrowserRouter>
        <Todo/>
        {/* <Routes /> */}
      </BrowserRouter>
    </div>
  )
}

export default App;
