import React from 'react'
import Overall from './components/Overalll'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Ticket from './components/Ticket/Ticket'

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Overall />} />
        <Route path='/ticket' element={<Ticket />} />
      </Routes>
    </Router>
  )
}

export default App
