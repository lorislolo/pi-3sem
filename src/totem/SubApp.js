import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Cidade from './pages/Cidade'
import Home from './pages/Home'
import Estado from './pages/Estado'
import NomeIdade from './pages/NomeIdade'
import CadastrarOutro from './pages/CadastrarOutro'
import useAuthStore from '../auth/lib/storeAuth'

function App() {
  const logout = useAuthStore((s) => s.logout)

  return (
    <div className="App">
      <div className="container">
        <Nav numero="1/3" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cidade" element={<Cidade />} />
          <Route path="/Estado" element={<Estado />} />
          <Route path="/NomeIdade" element={<NomeIdade />} />
          <Route path="/CadastrarOutro" element={<CadastrarOutro />} />
        </Routes>
      </div>
      <button
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          margin: '10px',
        }}
        onClick={logout}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          color="red"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-power"
        >
          <path d="M12 2v10" />
          <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
        </svg>
      </button>
    </div>
  )
}

export default App
