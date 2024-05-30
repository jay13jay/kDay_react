import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'

import HomePage from './Pages/Home'
import Backside from './Pages/Backside'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/backside" element={<Backside />} />
      </Routes>
    </HashRouter>
  )
}

export default App
