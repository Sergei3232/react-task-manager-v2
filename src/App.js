import React from 'react'
import Routes from './pages/Routes'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App;
