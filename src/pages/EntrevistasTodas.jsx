import { useEffect } from 'react'
import { entrevistas, linkWhatsapp } from '../data.js'
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
      <main className="flex-1 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">

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
              Algumas <span className="text-amarelo">entrevistas</span>
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
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {entrevistas.map((video, i) => (
                <article
                  key={i}
                  className="group bg-grafite border border-white/5 hover:border-amarelo/40 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-amarelo/10 w-full"
                >
                  <div className="relative bg-noite overflow-hidden aspect-video">
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

          {/* CTA grupo de apoiadores */}
          <div className="mt-12 text-center">
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-transparent hover:bg-white/5 text-white border-2 border-white/20 hover:border-amarelo/60 font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Entre no grupo de apoiadores
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
