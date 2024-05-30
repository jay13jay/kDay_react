import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'

import HomePage from './Pages/Home'
import Backside from './Pages/Backside'
import PoemPage from './Pages/Poem'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/backside" element={<Backside />} />
        <Route path="/poems" element={<PoemPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
