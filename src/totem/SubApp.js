import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Cidade from './pages/Cidade'
import Home from './pages/Home'
import QrCode from './pages/QrCode'
import Estado from './pages/Estado'
import NomeIdade from './pages/NomeIdade'
import CadastrarOutro from './pages/CadastrarOutro'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav numero="1/3" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cidade" element={<Cidade />} />
          <Route path="/QrCode" element={<QrCode />} />
          <Route path="/Estado" element={<Estado />} />
          <Route path="/NomeIdade" element={<NomeIdade />} />
          <Route path="/CadastrarOutro" element={<CadastrarOutro />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
