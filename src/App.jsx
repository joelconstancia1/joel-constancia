import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import EntrevistasTodas from './pages/EntrevistasTodas.jsx'
import PropostasTodas from './pages/PropostasTodas.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrevistas" element={<EntrevistasTodas />} />
        <Route path="/propostas" element={<PropostasTodas />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
