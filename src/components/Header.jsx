import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { candidato, linkWhatsapp } from '../data.js'

const links = [
  { hash: '#quem-e', label: 'Quem é Joel' },
  { hash: '#propostas', label: 'Propostas' },
  { hash: '#agenda', label: 'Agenda' },
  { hash: '#entrevistas', label: 'Entrevistas' },
  { hash: '#vaquinha', label: 'Vaquinha' },
  { hash: '#redes', label: 'Redes' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  const handleNavClick = (e, hash) => {
    if (location.pathname === '/') {
      // Já estamos na home — deixa o scroll-into-view nativo agir
      close()
      return
    }
    // Estamos em outra página — navega pra home com o hash
    e.preventDefault()
    close()
    navigate('/' + hash)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        open
          ? 'bg-noite border-b border-amarelo/20 py-3'
          : scrolled
            ? 'bg-noite/95 backdrop-blur-md border-b border-amarelo/20 py-3'
            : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex items-center justify-center w-10 h-10 bg-amarelo text-noite font-display text-xl rounded-md group-hover:rotate-3 transition-transform">
            JC
          </span>
          <span className="hidden sm:block text-white font-bold tracking-wide">
            {candidato.nome.split(' ')[0]} <span className="text-amarelo">Constância</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.hash}
              href={location.pathname === '/' ? l.hash : '/' + l.hash}
              onClick={(e) => handleNavClick(e, l.hash)}
              className="text-sm font-medium text-white/80 hover:text-amarelo transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-amarelo hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-amarelo hover:bg-amarelo-claro text-noite font-bold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-amarelo/30 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className={`w-6 h-0.5 bg-amarelo transition-all ${
                open ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span className={`w-6 h-0.5 bg-amarelo transition-all ${open ? 'opacity-0' : ''}`} />
            <span
              className={`w-6 h-0.5 bg-amarelo transition-all ${
                open ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.hash}
              href={location.pathname === '/' ? l.hash : '/' + l.hash}
              onClick={(e) => handleNavClick(e, l.hash)}
              className="py-3 px-4 text-white/80 hover:text-amarelo hover:bg-white/5 rounded-md transition-colors border-l-2 border-transparent hover:border-amarelo"
            >
              {l.label}
            </a>
          ))}
          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden mt-2 bg-amarelo text-noite font-bold px-5 py-3 rounded-full text-center"
          >
            Entrar no grupo do WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
