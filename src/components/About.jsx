import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Heart, Shield, Clock, Users } from 'lucide-react'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-sun-gold blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-sky-deep blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="about-content grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-4xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1000&auto=format&fit=crop"
                alt="Professional window cleaning"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-3xl p-6 shadow-xl">
              <div className="text-4xl font-bold text-sun-gold">10+</div>
              <div className="text-charcoal/70">metų patirtis</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="section-title mb-6">
              Kodėl <span className="text-sun-gold">mes</span>
            </h2>
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              Esame nedidelė mandagių specialistų komanda, teikianti langų valymo paslaugas Vilniuje 
              nuo <strong>2014 metų</strong>. Suprantame, kad langai yra jūsų namų "veidas", todėl 
              savo darbą atliekame itin atsakingai.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Heart, label: 'Atsakingai' },
                { icon: Shield, label: 'Kokybiškai' },
                { icon: Clock, label: 'Laiku' },
                { icon: Users, label: 'Mandagiai' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sun-gold/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-sun-gold" />
                  </div>
                  <span className="font-semibold text-charcoal">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-sky-deep/5 rounded-3xl">
              <p className="text-charcoal/80 italic">
                "Langų valymo paskirtis yra ne vien švarūs, bet ir <strong>sveiki langai</strong>. 
                Purvas nuo gatvės, kieto vandens mineralai — visa tai gadina jūsų stiklus. 
                Reguliariai plaunant langus ne tik džiaugiatės ryškia šviesa, bet ir sutaupote."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
