import { linkVaquinha } from '../data.js'

export default function Vaquinha() {
  return (
    <section id="vaquinha" className="relative py-24 sm:py-32 bg-grafite overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amarelo/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amarelo via-amarelo-claro to-amarelo p-1">
          <div className="relative bg-gradient-to-br from-grafite to-noite rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
            {/* Pattern bg */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #FACC15 1.5px, transparent 1.5px)',
                backgroundSize: '30px 30px',
              }}
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-amarelo/10 border border-amarelo/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-amarelo" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-amarelo text-xs font-bold tracking-widest uppercase">
                  Apoie a campanha
                </span>
              </div>

              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white mb-6 leading-[0.9]">
                Toda contribuição
                <br />
                <span className="text-amarelo">faz diferença.</span>
              </h2>

              <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Uma campanha do povo se constrói com o povo. Contribua com qualquer valor e ajude a levar a voz de Pernambuco ao parlamento estadual.
              </p>

              <a
                href={linkVaquinha}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-amarelo hover:bg-white text-noite font-black text-lg px-10 py-5 rounded-full transition-all hover:shadow-2xl hover:shadow-amarelo/50 hover:-translate-y-1"
              >
                Contribuir agora
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/40 text-xs uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-amarelo" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Pagamento seguro
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-amarelo" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Doação transparente
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-amarelo" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Pix, cartão e boleto
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
