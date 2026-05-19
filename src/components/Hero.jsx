import { candidato, linkVaquinha, linkWhatsapp } from '../data.js'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Background grid + glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(250,204,21,0.08),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(250,204,21,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center">
        {/* Portrait — aparece no mobile (acima) e no desktop (à direita) */}
        <div className="relative lg:order-2 animate-fade-in mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-md">
          <div className="relative aspect-[4/5]">
            <div className="absolute -inset-3 sm:-inset-4 bg-amarelo/20 rounded-2xl rotate-3 blur-2xl" />
            <div className="relative h-full w-full bg-gradient-to-br from-carvao to-grafite rounded-2xl border border-amarelo/30 overflow-hidden">
              {/* Para colocar a foto real do Joel, substitua a div abaixo por:
              <img src="/joel.jpg" alt="Joel Constância" className="absolute inset-0 w-full h-full object-cover" />
              (e salve a foto em public/joel.jpg) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-display text-7xl sm:text-8xl lg:text-9xl text-amarelo/30">JC</div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-noite via-noite/80 to-transparent p-4 sm:p-6">
                <div className="text-amarelo text-[10px] sm:text-xs uppercase tracking-widest mb-1">
                  Pré-candidato
                </div>
                <div className="text-white font-display text-xl sm:text-2xl">
                  Joel Constância
                </div>
              </div>
            </div>

            {/* Badge do número */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-amarelo text-noite font-display text-xl sm:text-2xl px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-xl rotate-6">
              {candidato.numero}
            </div>
          </div>
        </div>

        {/* Conteúdo textual */}
        <div className="animate-fade-in-up lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-amarelo/10 border border-amarelo/30 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amarelo rounded-full animate-pulse-slow flex-shrink-0" />
            <span className="text-amarelo text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              <span className="hidden sm:inline">{candidato.cargo} — {candidato.estado}</span>
              <span className="sm:hidden">Pré-candidato · Dep. Estadual PE</span>
            </span>
          </div>

          <h1 className="font-display text-[3.5rem] leading-[0.95] sm:text-7xl lg:text-8xl xl:text-9xl tracking-[0.04em] mb-5 sm:mb-6">
            <span className="block text-white">JOEL</span>
            <span className="block text-amarelo">CONSTÂNCIA</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
            {candidato.tagline}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href={linkVaquinha}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-amarelo hover:bg-amarelo-claro text-noite font-bold px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all hover:shadow-2xl hover:shadow-amarelo/40 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Apoie a campanha
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 hover:border-amarelo hover:bg-amarelo/5 text-white font-bold px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Entre no nosso WhatsApp
            </a>
          </div>

          <div className="mt-10 sm:mt-12 flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-white/50 text-sm">
            <div>
              <div className="text-2xl sm:text-3xl font-display text-amarelo">PE</div>
              <div className="uppercase tracking-widest text-[10px] sm:text-xs">Pernambuco</div>
            </div>
            <div className="h-10 sm:h-12 w-px bg-white/20" />
            <div>
              <div className="text-2xl sm:text-3xl font-display text-amarelo">2026</div>
              <div className="uppercase tracking-widest text-[10px] sm:text-xs">Eleições</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="#quem-e" className="flex flex-col items-center gap-2 text-white/40 hover:text-amarelo transition-colors">
          <span className="text-xs uppercase tracking-widest">Conheça</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
