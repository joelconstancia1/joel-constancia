import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { propostas, linkVaquinha } from '../data.js'
import Header from '../components/Header.jsx'
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
      <Header />

      <main className="flex-1 pt-32 sm:pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6">
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
                Plano de governo
              </span>
              <span className="h-px w-8 bg-amarelo" />
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] tracking-wide mb-4">
              Todas as <span className="text-amarelo">propostas</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              {propostas.length} eixos de atuação pensados pelo Joel para fortalecer Pernambuco.
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
                      {proposta.texto && (
                        <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                          {proposta.texto}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

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
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 hover:border-amarelo hover:bg-amarelo/5 text-white font-bold px-7 py-3.5 rounded-full transition-all"
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
                  Voltar para a home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
