import { candidato } from '../data.js'

export default function Footer() {
  return (
    <footer className="relative bg-noite border-t border-amarelo/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <a href="#top" className="flex items-center gap-3 group">
              <span className="flex items-center justify-center w-12 h-12 bg-amarelo text-noite font-display text-2xl rounded-md group-hover:rotate-3 transition-transform">
                JC
              </span>
              <div>
                <div className="text-white font-bold">{candidato.nome}</div>
                <div className="text-white/40 text-xs uppercase tracking-widest">
                  {candidato.estado}
                </div>
              </div>
            </a>
          </div>

          <div className="text-center text-white/40 text-sm">
            <p>
              {candidato.cargo}
              <br />
              <span className="text-amarelo">{candidato.estado} · 2026</span>
            </p>
          </div>

          <div className="text-center md:text-right text-white/40 text-xs">
            <p>© {new Date().getFullYear()} Comitê de Campanha Joel Constância.</p>
            <p className="mt-1">Todos os direitos reservados.</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-white/30 text-xs">
          <p>
            Este site é uma iniciativa de pré-campanha e não substitui as comunicações oficiais
            registradas no TSE.
          </p>
        </div>
      </div>
    </footer>
  )
}
