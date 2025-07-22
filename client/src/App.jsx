import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Items from './components/Items'
import { isAuthenticated } from './auth'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/items" element={isAuthenticated() ? <Items /> : <Navigate to="/login" />}
/>
      </Routes>
    </Router>
  )
}

export default App
