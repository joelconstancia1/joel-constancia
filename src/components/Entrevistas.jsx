import { useState } from 'react'
import { entrevistas } from '../data.js'
import SectionTitle from './SectionTitle.jsx'

const LIMITE_LISTA = 3

export default function Entrevistas() {
  const [ativo, setAtivo] = useState(0)

  if (entrevistas.length === 0) return null

  const principal = entrevistas[ativo]
  const lista = entrevistas.slice(0, LIMITE_LISTA)
  const temMais = entrevistas.length > LIMITE_LISTA

  return (
    <section id="entrevistas" className="relative py-24 sm:py-32 bg-noite">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Imprensa"
          title={<>Entrevistas & <span className="text-amarelo">aparições</span></>}
          subtitle="Joel falando sobre as pautas que importam pra Pernambuco."
        />

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 mt-16">
          {/* Player principal */}
          <div>
            <div className={`relative group ${principal.videoVertical ? 'max-w-xs mx-auto' : ''}`}>
              <div className="absolute -inset-2 bg-amarelo/20 rounded-2xl blur-xl group-hover:bg-amarelo/30 transition-all" />
              <div className={`relative bg-noite rounded-2xl overflow-hidden border border-amarelo/30 shadow-2xl ${principal.videoVertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
                <iframe
                  key={principal.videoId}
                  src={`https://www.youtube.com/embed/${principal.videoId}`}
                  title={principal.titulo}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {principal.titulo}
              </h3>
              <div className="flex flex-wrap gap-3 text-sm text-white/60">
                <span className="text-amarelo font-medium">{principal.veiculo}</span>
                <span>•</span>
                <span>{principal.data}</span>
              </div>
            </div>
          </div>

          {/* Lista */}
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs uppercase tracking-widest text-amarelo font-bold">
                Mais vídeos
              </div>
              <div className="text-xs text-white/40">
                {temMais ? `${LIMITE_LISTA} de ${entrevistas.length}` : `${entrevistas.length}`}
              </div>
            </div>

            {lista.map((video, i) => (
              <button
                key={i}
                onClick={() => setAtivo(i)}
                className={`w-full text-left p-4 rounded-xl transition-all border ${
                  i === ativo
                    ? 'bg-amarelo/10 border-amarelo/50'
                    : 'bg-noite/50 border-white/5 hover:border-amarelo/30 hover:bg-noite'
                }`}
              >
                <div className="flex gap-3">
                  <div className="relative w-24 h-16 flex-shrink-0 rounded-md overflow-hidden bg-noite">
                    <img
                      src={`https://i.ytimg.com/vi/${video.videoId}/mqdefault.jpg`}
                      alt={video.titulo}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {i === ativo && (
                      <div className="absolute inset-0 bg-amarelo/30 flex items-center justify-center">
                        <svg className="w-6 h-6 text-amarelo" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`font-medium text-sm mb-1 line-clamp-2 ${
                        i === ativo ? 'text-amarelo' : 'text-white'
                      }`}
                    >
                      {video.titulo}
                    </div>
                    <div className="text-xs text-white/50 truncate">
                      {video.veiculo} — {video.data}
                    </div>
                  </div>
                </div>
              </button>
            ))}

            {temMais && (
              <a
                href="/entrevistas"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-amarelo hover:bg-amarelo-claro text-noite font-bold transition-all hover:shadow-xl hover:shadow-amarelo/30 mt-4"
              >
                Ver todas as {entrevistas.length} entrevistas
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
