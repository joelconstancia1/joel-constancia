import { candidato, campanha } from '../data.js'

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
              <span className="text-amarelo">
                Partido {candidato.partido} {candidato.numeroPartido} · {candidato.numero}
              </span>
              <br />
              <span className="text-white/30 text-xs">{candidato.estado} · 2026</span>
            </p>
          </div>

          <div className="text-center md:text-right text-white/40 text-xs">
            <p>© {new Date().getFullYear()} Comitê de Campanha Joel Constância.</p>
            <p className="mt-1">Todos os direitos reservados.</p>
          </div>
        </div>

        {/* Dados legais da campanha — aparecem assim que o CNPJ for preenchido em src/data.js */}
        {campanha.cnpj && (
          <div className="mt-10 pt-6 border-t border-white/5 text-center text-white/40 text-xs leading-relaxed">
            {campanha.nomeFantasia && (
              <p className="text-white/60 uppercase tracking-wider">{campanha.nomeFantasia}</p>
            )}
            {campanha.razaoSocial && <p className="mt-1">{campanha.razaoSocial}</p>}
            <p className="mt-1">CNPJ {campanha.cnpj}</p>
            {campanha.endereco && <p className="mt-1">{campanha.endereco}</p>}
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-white/5 text-center text-white/30 text-xs">
          <p>
            Propaganda eleitoral — {candidato.nome} {candidato.numero}, {candidato.cargo} por{' '}
            {candidato.estado}. Conteúdo de responsabilidade do comitê de campanha.
          </p>
        </div>
      </div>
    </footer>
  )
}
