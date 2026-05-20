import { useEffect } from 'react'
import { agenda } from '../data.js'
import Footer from '../components/Footer.jsx'

const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']

function formatData(iso) {
  const d = new Date(iso + 'T00:00:00')
  return {
    dia: String(d.getDate()).padStart(2, '0'),
    mes: meses[d.getMonth()],
    ano: d.getFullYear(),
    diaSemana: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][d.getDay()],
  }
}

export default function EventosTodos() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Agenda — Joel Constância'
    return () => {
      document.title = 'Joel Constância — Deputado Estadual PE'
    }
  }, [])

  const eventosOrdenados = [...agenda].sort((a, b) => a.data.localeCompare(b.data))

  return (
    <div className="min-h-screen bg-noite text-white flex flex-col">
      <main className="flex-1 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Cabeçalho */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-amarelo" />
              <span className="text-amarelo text-xs font-bold tracking-[0.25em] uppercase">
                Compromissos
              </span>
              <span className="h-px w-8 bg-amarelo" />
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] tracking-wide mb-4">
              Toda a <span className="text-amarelo">agenda</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              {eventosOrdenados.length} {eventosOrdenados.length === 1 ? 'evento agendado' : 'eventos agendados'} pelo Joel.
            </p>
          </div>

          {/* Lista completa */}
          {eventosOrdenados.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed border-white/10 rounded-2xl">
              <p className="text-white/50">Nenhum evento agendado no momento.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {eventosOrdenados.map((evento, i) => {
                const data = formatData(evento.data)
                return (
                  <article
                    key={i}
                    className="group relative bg-grafite hover:bg-carvao border border-white/5 hover:border-amarelo/50 rounded-2xl p-6 sm:p-8 transition-all hover:shadow-xl hover:shadow-amarelo/10"
                  >
                    <div className="grid sm:grid-cols-[auto_1fr] gap-6 items-center">
                      {/* Data */}
                      <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-0 pb-4 sm:pb-0 border-b sm:border-b-0 sm:border-r border-white/10 sm:pr-6 min-w-[90px]">
                        <div className="font-display text-5xl sm:text-6xl text-amarelo leading-none">
                          {data.dia}
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white font-bold tracking-widest text-sm">
                            {data.mes}
                          </div>
                          <div className="text-white/40 text-xs uppercase tracking-widest">
                            {data.ano}
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2 text-xs">
                          <span className="text-amarelo font-bold uppercase tracking-widest">
                            {data.diaSemana}
                          </span>
                          <span className="text-white/30">•</span>
                          <span className="text-white/70 flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {evento.hora}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amarelo transition-colors">
                          {evento.titulo}
                        </h3>
                        <p className="text-white/60 text-sm flex items-start gap-2 mb-2">
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-amarelo" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {evento.local}
                        </p>
                        {evento.descricao && (
                          <p className="text-white/50 text-sm leading-relaxed">
                            {evento.descricao}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  )
}
