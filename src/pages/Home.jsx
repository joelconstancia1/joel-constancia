import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import QuemEh from '../components/QuemEh.jsx'
import Propostas from '../components/Propostas.jsx'
import Agenda from '../components/Agenda.jsx'
import Entrevistas from '../components/Entrevistas.jsx'
import Vaquinha from '../components/Vaquinha.jsx'
import Whatsapp from '../components/Whatsapp.jsx'
import RedesSociais from '../components/RedesSociais.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  const location = useLocation()

  // Faz scroll pro anchor quando navegado a partir de outra página com /#hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }, [location])

  return (
    <div className="min-h-screen bg-noite text-white">
      <Header />
      <main>
        <Hero />
        <QuemEh />
        <Propostas />
        <Agenda />
        <Entrevistas />
        <Vaquinha />
        <Whatsapp />
        <RedesSociais />
      </main>
      <Footer />
    </div>
  )
}
