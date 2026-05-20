import { Link } from 'react-router-dom'
import { propostas } from '../data.js'
import SectionTitle from './SectionTitle.jsx'
import IconeProposta from './IconeProposta.jsx'

const LIMITE_DESTAQUE = 3

export default function Propostas() {
  if (propostas.length === 0) return null

  const destaque = propostas.slice(0, LIMITE_DESTAQUE)
  const temMais = propostas.length > LIMITE_DESTAQUE

  return (
    <section id="propostas" className="relative py-24 sm:py-32 bg-noite overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amarelo/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amarelo/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Plano de governo"
          title={<>Nossas <span className="text-amarelo">propostas</span></>}
          subtitle="O que vamos defender no parlamento estadual pelo povo de Pernambuco. Conheça os eixos da nossa pré-campanha."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destaque.map((proposta, i) => (
            <article
              key={i}
              className="group relative bg-grafite hover:bg-carvao border border-white/5 hover:border-amarelo/40 rounded-2xl p-7 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-amarelo/10"
            >
              {/* Número grande de fundo */}
              <div className="absolute top-4 right-4 font-display text-7xl text-amarelo/10 leading-none select-none pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-amarelo/10 border border-amarelo/30 text-amarelo mb-5 group-hover:bg-amarelo group-hover:text-noite transition-all">
                  <IconeProposta categoria={proposta.categoria} className="w-7 h-7" />
                </div>

                <div className="text-amarelo text-[10px] font-bold tracking-widest uppercase mb-2">
                  {proposta.rotulo}
                </div>

                <h3 className="font-display text-2xl text-white mb-3 leading-tight">
                  {proposta.titulo}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {proposta.resumo}
                </p>

                {proposta.videoId && (
                  <div className="mt-5 rounded-xl overflow-hidden aspect-video">
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
            </article>
          ))}
        </div>

        {temMais && (
          <div className="text-center mt-12">
            <Link
              to="/propostas"
              className="group inline-flex items-center gap-3 bg-amarelo hover:bg-amarelo-claro text-noite font-bold px-7 py-4 rounded-full transition-all hover:shadow-2xl hover:shadow-amarelo/40 hover:-translate-y-1"
            >
              Ver todas as {propostas.length} propostas
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}

      </div>
    </section>
  )
}
