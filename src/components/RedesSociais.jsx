import { redesSociais, candidato } from '../data.js'
import SectionTitle from './SectionTitle.jsx'

const redes = [
  {
    key: 'instagram',
    nome: 'Instagram',
    cor: 'from-purple-500 via-pink-500 to-orange-400',
    handle: '@joelconstancia',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    key: 'facebook',
    nome: 'Facebook',
    cor: 'from-blue-600 to-blue-700',
    handle: '/joelconstancia',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    key: 'twitter',
    nome: 'X / Twitter',
    cor: 'from-gray-700 to-black',
    handle: '@joelconstancia',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    key: 'tiktok',
    nome: 'TikTok',
    cor: 'from-pink-500 via-black to-cyan-400',
    handle: '@joelconstancia',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.66a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.09z" />
      </svg>
    ),
  },
  {
    key: 'youtube',
    nome: 'YouTube',
    cor: 'from-red-600 to-red-700',
    handle: '@joelconstancia',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function RedesSociais() {
  const ativas = redes.filter((r) => redesSociais[r.key])

  return (
    <section id="redes" className="relative py-24 sm:py-32 bg-grafite">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Conecte-se"
          title={<>Siga nas <span className="text-amarelo">redes</span></>}
          subtitle="Acompanhe o dia a dia da campanha e mande sua mensagem direto pro Joel."
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {ativas.map((rede) => (
            <a
              key={rede.key}
              href={redesSociais[rede.key]}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-grafite hover:bg-carvao border border-white/5 hover:border-amarelo/40 p-6 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-amarelo/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${rede.cor} opacity-0 group-hover:opacity-20 transition-opacity`} />

              <div className="relative">
                <div className="w-12 h-12 mb-4 text-white group-hover:text-amarelo transition-colors">
                  {rede.icon}
                </div>
                <div className="font-display text-2xl text-white mb-1">
                  {rede.nome}
                </div>
                <div className="text-xs text-white/40 group-hover:text-amarelo transition-colors">
                  {rede.handle}
                </div>
                <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-amarelo" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
