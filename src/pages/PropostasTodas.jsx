import { useEffect } from 'react'
import { propostas, linkVaquinha, linkWhatsapp } from '../data.js'
import Footer from '../components/Footer.jsx'
import IconeProposta from '../components/IconeProposta.jsx'

export default function PropostasTodas() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Propostas — Joel Constância'
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
                Joel Constância
              </span>
              <span className="h-px w-8 bg-amarelo" />
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] tracking-wide mb-4">
              Algumas <span className="text-amarelo">propostas</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Você pode acompanhar todas as propostas no Livro Amarelo da missão.
            </p>
          </div>

          {/* Lista completa */}
          {propostas.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed border-white/10 rounded-2xl">
              <p className="text-white/50">Nenhuma proposta cadastrada no momento.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {propostas.map((proposta, i) => (
                <article
                  key={i}
                  className="group relative bg-grafite hover:bg-carvao border border-white/5 hover:border-amarelo/40 rounded-2xl p-6 sm:p-8 transition-all hover:shadow-2xl hover:shadow-amarelo/10"
                >
                  <div className="grid sm:grid-cols-[auto_1fr] gap-6 items-start">
                    {/* Lado esquerdo: ícone + número */}
                    <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 sm:min-w-[100px]">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amarelo/10 border border-amarelo/30 text-amarelo group-hover:bg-amarelo group-hover:text-noite transition-all">
                        <IconeProposta categoria={proposta.categoria} className="w-8 h-8" />
                      </div>
                      <div className="font-display text-4xl sm:text-5xl text-amarelo/40 leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 flex flex-col sm:flex-row gap-6 items-start">
                      <div className="flex-1">
                        <div className="text-amarelo text-[10px] font-bold tracking-widest uppercase mb-2">
                          {proposta.rotulo}
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl text-white mb-4 leading-tight group-hover:text-amarelo transition-colors">
                          {proposta.titulo}
                        </h2>
                        <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-4 font-medium">
                          {proposta.resumo}
                        </p>
                        {proposta.texto && proposta.texto !== proposta.resumo && (
                          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                            {proposta.texto}
                          </p>
                        )}
                      </div>

                      {proposta.videoId && (
                        <div className="flex-shrink-0 w-full sm:w-72 rounded-xl overflow-hidden aspect-[9/16]">
                          <iframe
                            src={`https://www.youtube.com/embed/${proposta.videoId}`}
                            title={proposta.titulo}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Livro Amarelo */}
          <div className="mt-16 max-w-3xl mx-auto">
            <a
              href="https://loja.partidomissao.com/produtos/box-completo-livro-amarelo-ss6fb/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gradient-to-br from-amarelo/10 to-amarelo/5 hover:from-amarelo/20 hover:to-amarelo/10 border border-amarelo/30 hover:border-amarelo/60 rounded-2xl p-6 sm:p-8 transition-all hover:shadow-2xl hover:shadow-amarelo/10"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amarelo/20 border border-amarelo/40 text-amarelo">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-amarelo text-[10px] font-bold tracking-widest uppercase mb-1">
                    Livro Amarelo
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-white mb-2 leading-tight group-hover:text-amarelo transition-colors">
                    Quer saber mais propostas da missão?
                  </h2>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    Aqui está nosso box com boa parte das propostas do partido missão.
                  </p>
                </div>
                <svg
                  className="hidden sm:block flex-shrink-0 w-5 h-5 text-amarelo group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>

          {/* CTA final */}
          <div className="mt-16 bg-gradient-to-br from-amarelo to-amarelo-escuro rounded-3xl p-1">
            <div className="bg-noite rounded-3xl p-10 sm:p-12 text-center">
              <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
                Gostou das propostas?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Apoie nossa pré-campanha pra que essas pautas cheguem ao parlamento estadual.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={linkVaquinha}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-amarelo hover:bg-amarelo-claro text-noite font-bold px-7 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-amarelo/30 hover:-translate-y-1"
                >
                  Apoie a campanha
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
                <a
                  href={linkWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/5 text-white border-2 border-white/20 hover:border-amarelo/60 font-bold px-7 py-3.5 rounded-full transition-all hover:-translate-y-1"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  Entre no nosso grupo de apoiadores
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
