import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { entrevistas } from '../data.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function EntrevistasTodas() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Entrevistas — Joel Constância'
    return () => {
      document.title = 'Joel Constância — Deputado Estadual PE'
    }
  }, [])

  return (
    <div className="min-h-screen bg-noite text-white flex flex-col">
      <Header />

      <main className="flex-1 pt-32 sm:pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb / voltar */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-amarelo transition-colors mb-8 group text-sm"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para a página inicial
          </Link>

          {/* Cabeçalho */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-amarelo" />
              <span className="text-amarelo text-xs font-bold tracking-[0.25em] uppercase">
                Imprensa
              </span>
              <span className="h-px w-8 bg-amarelo" />
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] tracking-wide mb-4">
              Todas as <span className="text-amarelo">entrevistas</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              {entrevistas.length} {entrevistas.length === 1 ? 'aparição' : 'aparições'} na imprensa
              e canais independentes.
            </p>
          </div>

          {/* Grid de vídeos */}
          {entrevistas.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed border-white/10 rounded-2xl">
              <p className="text-white/50">Nenhuma entrevista cadastrada no momento.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {entrevistas.map((video, i) => (
                <article
                  key={i}
                  className="group bg-grafite border border-white/5 hover:border-amarelo/40 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-amarelo/10"
                >
                  <div className="relative aspect-video bg-noite overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.titulo}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="font-bold text-white group-hover:text-amarelo transition-colors mb-2 line-clamp-2">
                      {video.titulo}
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-white/50">
                      <span className="text-amarelo font-medium">{video.veiculo}</span>
                      <span>•</span>
                      <span>{video.data}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Voltar pro topo */}
          <div className="text-center mt-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-amarelo hover:bg-amarelo-claro text-noite font-bold px-7 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-amarelo/30 hover:-translate-y-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
