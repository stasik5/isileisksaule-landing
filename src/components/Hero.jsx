import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Sun, Sparkles } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef(null)
  const sunRaysRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sun rays parallax
      gsap.to(sunRaysRef.current, {
        rotate: 360,
        duration: 60,
        repeat: -1,
        ease: 'none'
      })

      // Hero content animation
      gsap.from('.hero-title', {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3
      })

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      })

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.7
      })

      gsap.from('.hero-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 0.9
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=2070&auto=format&fit=crop"
          alt="Sunlight through window"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-deep/80 via-sky-deep/60 to-sun-gold/30" />
      </div>

      {/* Animated Sun Rays */}
      <div ref={sunRaysRef} className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 45 * Math.cos((i * 30 * Math.PI) / 180)}
              y2={50 + 45 * Math.sin((i * 30 * Math.PI) / 180)}
              stroke="#D4A03C"
              strokeWidth="0.5"
              opacity="0.6"
            />
          ))}
          <circle cx="50" cy="50" r="20" fill="#D4A03C" opacity="0.3" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
            <Sun className="w-5 h-5 text-sun-gold" />
            <span className="text-white/90 text-sm font-medium">10+ metų patirtis • Vilnius ir rajonas</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            <span className="block text-white text-5xl md:text-7xl font-bold mb-4">
              Įsileiskite
            </span>
            <span className="block font-serif italic text-sun-light text-6xl md:text-8xl">
              šviesą.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-xl md:text-2xl text-white/80 mt-6 mb-10 max-w-xl">
            Profesionalus langų valymas Vilniuje. Skaidrūs langai, aiškios kainos, 
            ir saulė jūsų namuose.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4">
            <a href="tel:+37061458748" className="btn-primary text-lg">
              <Sparkles className="w-5 h-5 inline mr-2" />
              Skambinti dabar
            </a>
            <a href="#kainos" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-charcoal">
              Žiūrėti kainas
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
