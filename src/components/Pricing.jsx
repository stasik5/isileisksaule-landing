import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Check, Sparkles } from 'lucide-react'

export default function Pricing() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.pricing-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          opacity: 0,
          y: 60,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out'
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const packages = [
    {
      name: 'Profilaktinis',
      subtitle: 'Reguliarus valymas',
      price: 'nuo 4€',
      unit: 'už stiklą',
      features: [
        'Valymas iš abiejų pusių',
        'Rėmų nuvalymas',
        'Palangių nuvalymas',
        'Rekomenduojama kasmet',
      ],
      recommended: false,
    },
    {
      name: 'Generalinis',
      subtitle: 'Po remonto / senai nevalyti',
      price: 'nuo 8€',
      unit: 'už stiklą',
      features: [
        'Viskas iš profilaktinio',
        'Kalkių šalinimas',
        'Statybinių dėmių valymas',
        'Detalus rėmų valymas',
        'Giliau nevalytiems langams',
      ],
      recommended: true,
      badge: 'Populiariausias',
    },
    {
      name: 'Specialus',
      subtitle: 'Nestandartiniai darbai',
      price: 'Individuali',
      unit: 'kaina',
      features: [
        'Lipdukų šalinimas',
        'Laiptinių valymas',
        'Vitrinų valymas',
        'Aukštuminiai darbai',
        'Individualus vertinimas',
      ],
      recommended: false,
    },
  ]

  return (
    <section id="kainos" ref={sectionRef} className="py-24 bg-gradient-to-b from-cream to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <h2 className="section-title">
            Aiškios <span className="text-sun-gold">kainos</span>
          </h2>
          <p className="section-subtitle mt-4">
            Be paslėptų mokesčių. Kaina sutariama iš anksto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div 
              key={i}
              className={`pricing-card relative bg-white rounded-4xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                pkg.recommended ? 'ring-2 ring-sun-gold scale-105' : ''
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sun-gold text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  {pkg.badge}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-charcoal">{pkg.name}</h3>
                <p className="text-charcoal/60 mt-1">{pkg.subtitle}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-sun-gold">{pkg.price}</span>
                  <span className="text-charcoal/60 ml-2">{pkg.unit}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sun-gold flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="tel:+37061458748"
                className={`block text-center py-4 rounded-2xl font-semibold transition-all ${
                  pkg.recommended 
                    ? 'btn-primary' 
                    : 'bg-charcoal/5 text-charcoal hover:bg-charcoal hover:text-white'
                }`}
              >
                Užsakyti
              </a>
            </div>
          ))}
        </div>

        {/* Price Examples */}
        <div className="mt-16 bg-sky-deep/5 rounded-4xl p-8 fade-up">
          <h3 className="text-xl font-bold text-charcoal mb-4">Kainų pavyzdžiai:</h3>
          <div className="grid md:grid-cols-3 gap-4 text-charcoal/80">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-sun-gold rounded-full" />
              <span>Siauras vonios langelis — 4€</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-sun-gold rounded-full" />
              <span>Standartinis virtuvės langas — 8€</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-sun-gold rounded-full" />
              <span>Didelis vitrininis langas — 12-16€</span>
            </div>
          </div>
          <p className="text-charcoal/60 mt-4 text-sm">
            * Minimali užsakymo suma — 50€. Nuo 400 m² skaičiuojame kvadratais.
          </p>
        </div>
      </div>
    </section>
  )
}
