import { bio, videoApresentacao, candidato } from '../data.js'
import SectionTitle from './SectionTitle.jsx'

export default function QuemEh() {
  return (
    <section id="quem-e" className="relative py-24 sm:py-32 bg-grafite">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Conheça"
          title={<>Quem é <span className="text-amarelo">Joel Constância</span></>}
          subtitle="A trajetória, os valores e o que move quem decidiu colocar o nome à disposição do povo de Pernambuco."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mt-16">
          {/* Vídeo */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-amarelo/20 rounded-2xl blur-xl group-hover:bg-amarelo/30 transition-all" />
            <div className="relative aspect-video bg-noite rounded-2xl overflow-hidden border border-amarelo/30 shadow-2xl">
              <iframe
                src={videoApresentacao}
                title="Apresentação Joel Constância"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="font-display text-7xl text-amarelo leading-none">"</span>
            </div>

            {bio.map((paragrafo, i) => (
              <p key={i} className="text-white/80 text-lg leading-relaxed">
                {paragrafo}
              </p>
            ))}

            <div className="flex items-stretch justify-between gap-3 pt-6 border-t border-white/10">
              <div className="flex-1 text-center">
                <div className="font-display text-3xl sm:text-4xl text-amarelo leading-none">+10</div>
                <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest mt-2">
                  Anos de luta
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="flex-1 text-center">
                <div className="font-display text-3xl sm:text-4xl text-amarelo leading-none">100%</div>
                <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest mt-2">
                  Pernambucano
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="flex-1 text-center">
                <div className="font-display text-3xl sm:text-4xl text-amarelo leading-none">PE</div>
                <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest mt-2">
                  Nossa terra
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
