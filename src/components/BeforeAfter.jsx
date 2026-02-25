import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BeforeAfter() {
  const sectionRef = useRef(null)
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = (clientX) => {
    if (!isDragging || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(percentage)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ba-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from('.ba-container', {
        scrollTrigger: {
          trigger: '.ba-container',
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="ba-title section-title">
            Rezultatai, <span className="text-sun-gold">kuriuos matote</span>
          </h2>
          <p className="ba-title section-subtitle mt-4">
            Tempkite slankiklį ir pamatykite skirtumą
          </p>
        </div>

        {/* Before/After Slider */}
        <div 
          ref={containerRef}
          className="ba-container relative max-w-4xl mx-auto aspect-video rounded-4xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* After Image (Full) */}
          <img 
            src="https://images.unsplash.com/photo-1507400492013-162706c8c05e?q=80&w=2070&auto=format&fit=crop"
            alt="Clean window"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Label - After */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-charcoal">
            Po valymo ✨
          </div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522441815192-d9f04eb9915b?q=80&w=2070&auto=format&fit=crop"
              alt="Dirty window"
              className="w-full h-full object-cover"
              style={{ filter: 'contrast(0.8) brightness(0.9)' }}
            />
            {/* Label - Before */}
            <div className="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-white">
              Prieš valymą
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '10+', label: 'Metų patirtis' },
            { number: '1000+', label: 'Klientų' },
            { number: '50€', label: 'Minimalus užsakymas' },
            { number: '4-16€', label: 'Už stiklą' },
          ].map((stat, i) => (
            <div key={i} className="fade-up text-center p-6 bg-white rounded-4xl shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-sun-gold">{stat.number}</div>
              <div className="text-charcoal/70 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
