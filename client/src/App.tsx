import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Collections } from './Collections/Collections'
import { Login } from './Login/Login'
import { Home } from './Home/Home'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
