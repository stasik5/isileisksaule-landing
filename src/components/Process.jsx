import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Phone, Eye, Sparkles, CheckCircle, Bell } from 'lucide-react'

export default function Process() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.process-step').forEach((step, i) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
          },
          opacity: 0,
          x: i % 2 === 0 ? -50 : 50,
          duration: 0.8,
          ease: 'power3.out'
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      icon: Phone,
      title: 'Susisiekite',
      description: 'Skambinkite arba atsiųskite langų nuotraukas. Per kelias minutes sutarsime kainą ir valymo datą.',
    },
    {
      icon: Eye,
      title: 'Apsžiūra',
      description: 'Prieš darbus kartu apeiname ir apžiūrime langus. Galbūt kas pasikeitė nuo pokalbio.',
    },
    {
      icon: Sparkles,
      title: 'Valymas',
      description: 'Atliekame darbus profesionaliomis priemonėmis. Vos pamatę kalkes ar defektus — iškart informuojame.',
    },
    {
      icon: CheckCircle,
      title: 'Patikra',
      description: 'Po darbų kartu apeiname ir patikriname viską. Jei ką praleidome — tuoj pat ištaisome.',
    },
    {
      icon: Bell,
      title: 'Priminimas',
      description: 'Pasiūlome priminimą po 3-6 mėn. Taip nereikės atsiminti, kada paskutinį kartą valėtės langus.',
    },
  ]

  return (
    <section id="procesas" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <h2 className="section-title">
            Kaip <span className="text-sun-gold">veikia</span>
          </h2>
          <p className="section-subtitle mt-4">
            Paprastas procesas, kurį tobulinome 10 metų
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sun-gold via-sun-gold to-sun-light opacity-30" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <div 
                key={i}
                className={`process-step relative flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${i < steps.length - 1 ? 'md:pb-24' : ''}`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-cream rounded-4xl p-8 shadow-md hover:shadow-lg transition-shadow">
                    <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <step.icon className="w-8 h-8 text-sun-gold" />
                      <h3 className="text-2xl font-bold text-charcoal">{step.title}</h3>
                    </div>
                    <p className="text-charcoal/70 text-lg">{step.description}</p>
                  </div>
                </div>

                {/* Step Number */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-sun-gold to-yellow-600 text-white font-bold text-2xl shadow-lg">
                  {i + 1}
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
