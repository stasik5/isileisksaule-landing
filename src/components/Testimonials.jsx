import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: 'Vilija',
      text: 'Jau nebe pirmi metai šios įmonės darbuotojai nuskaidrina mūsų gyvenimą. Mūsų langai labai dideli, jų daug, dar ir žiemos sodas — jie puikiai viską išvalo, dirba kruopščiai ir atsakingai, yra malonūs ir paslaugūs.',
      rating: 5,
    },
    {
      name: 'Loreta',
      text: 'Jau antrą kartą naudojausi šios įmonės paslaugomis, manau ateityje ir toliau draugausime. Puikus, kokybiškas darbas, malonus mandagus personalas, labai patraukli kaina.',
      rating: 5,
    },
    {
      name: 'Ofisas Konstitucijos pr.',
      text: 'Vyrai gerai padirbėjo ir nors valė darbo laiko metu, elgėsi labai pagarbiai ir savo darbu netrukdė ir neblaškė ofiso dirbančių žmonių dėmesio, likome patenkinti.',
      rating: 5,
    },
    {
      name: 'Darželis "Vaidilutė"',
      text: 'Dėkojame vaikinų komandai, sėkmingai, tvarkingai, kruopščiai ir gana greitai išvaliusiai per 100 mūsų įstaigos langų! Personalas ir administracija labai džiaugiasi ir rekomenduoja kitiems!',
      rating: 5,
    },
    {
      name: 'Dmitrijus',
      text: 'Puikus darbas už gerą kainą, lengvas bendravimas, greita reakcija. Ne visus langus pavyko pasiekti, tai dalį pinigų pasiūlė grąžinti. Tai yra retas atvejis. Rekomenduoju.',
      rating: 5,
    },
    {
      name: 'Elena',
      text: 'Tobulai atlikta paslauga! Vaikinai mandagūs ir tvarkingi! Labai rekomenduoju! Valomės jau trejus metus!',
      rating: 5,
    },
    {
      name: 'Violeta',
      text: 'Darbas atliktas nepriekaištingai, kruopščiai ir svarbiausia — ŠVARIAI. Nereikia rūpintis priemonėmis, viską turi, po darbo nepalieka aptaškytų palangių ir grindų. Rekomenduoju!',
      rating: 5,
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="atsiliepimai" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="testimonial-title section-title">
            Ką sako <span className="text-sun-gold">klientai</span>
          </h2>
          <p className="testimonial-title section-subtitle mt-4">
            Daugiau atsiliepimų rasite mūsų Skelbiu.lt puslapyje
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-4xl p-8 md:p-12 shadow-xl">
            <Quote className="w-12 h-12 text-sun-gold/20 mb-6" />
            
            <div className="min-h-[200px] flex flex-col justify-center">
              <p className="text-xl md:text-2xl text-charcoal leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg text-charcoal">
                    {testimonials[current].name}
                  </div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-sun-gold text-sun-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-sun-gold hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === current ? 'bg-sun-gold w-8' : 'bg-charcoal/20'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-sun-gold hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
