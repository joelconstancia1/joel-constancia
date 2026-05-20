import { candidato, linkVaquinha, linkWhatsapp, redesSociais } from '../data.js'

const links = [
  {
    label: 'Nossas propostas',
    sub: 'Conheça os eixos do plano de governo',
    href: '/propostas',
    emoji: '📋',
    amarelo: false,
  },
  {
    label: 'Agenda de eventos',
    sub: 'Próximos compromissos públicos',
    href: '/agenda',
    emoji: '📅',
    amarelo: false,
  },
  {
    label: 'Entrevistas & aparições',
    sub: 'Joel na imprensa e canais independentes',
    href: '/entrevistas',
    emoji: '🎙️',
    amarelo: false,
  },
  {
    label: 'Entre no nosso WhatsApp',
    sub: 'Fique por dentro de tudo',
    href: linkWhatsapp,
    emoji: '💬',
    amarelo: false,
  },
  {
    label: 'Apoie a campanha',
    sub: 'Contribua com a vaquinha eleitoral',
    href: linkVaquinha,
    emoji: '🤝',
    amarelo: true,
  },
]

const redesAtivas = Object.entries(redesSociais).filter(([, url]) => url)

const iconeRede = {
  instagram: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  facebook: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  twitter: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  tiktok: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
    </svg>
  ),
  youtube: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
}

export default function LinkTree() {
  return (
    <div className="min-h-screen bg-noite flex items-start justify-center py-16 px-4">
      <div className="w-full max-w-md">

        {/* Perfil */}
        <div className="text-center mb-10">
          {/* Foto — substitua por <img src="/joel.jpg" .../> quando tiver a foto */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-amarelo/10 border-2 border-amarelo/50 text-amarelo font-display text-3xl mb-5">
            JC
          </div>
          <h1 className="font-display text-4xl text-white tracking-wide leading-tight">
            {candidato.nome.split(' ')[0]}
            <br />
            <span className="text-amarelo">{candidato.nome.split(' ').slice(1).join(' ').toUpperCase()}</span>
          </h1>
          <p className="text-white/50 text-sm mt-3 leading-relaxed max-w-xs mx-auto">
            {candidato.cargo} por {candidato.estado}.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 w-full px-5 py-4 rounded-2xl border transition-all hover:-translate-y-0.5 hover:shadow-xl ${
                link.amarelo
                  ? 'bg-amarelo hover:bg-amarelo-claro border-amarelo text-noite hover:shadow-amarelo/40'
                  : 'bg-grafite hover:bg-carvao border-white/8 hover:border-amarelo/30 text-white hover:shadow-amarelo/10'
              }`}
            >
              <span className="text-2xl w-8 text-center leading-none">{link.emoji}</span>
              <span className="flex-1 text-left">
                <span className={`block font-bold text-sm ${link.amarelo ? 'text-noite' : 'text-amarelo'}`}>
                  {link.label}
                </span>
                <span className={`block text-xs mt-0.5 ${link.amarelo ? 'text-noite/60' : 'text-white/40'}`}>
                  {link.sub}
                </span>
              </span>
              <svg
                className={`w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all ${link.amarelo ? 'text-noite' : 'text-white'}`}
                fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        {/* Redes sociais */}
        {redesAtivas.length > 0 && (
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-5">
              Siga nas redes sociais
            </p>
            <div className="flex items-center justify-center gap-5">
              {redesAtivas.map(([rede, url]) => (
                <a
                  key={rede}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-amarelo transition-colors"
                  aria-label={rede}
                >
                  {iconeRede[rede]}
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
