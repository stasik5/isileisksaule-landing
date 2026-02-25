import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3' : 'py-6'
    }`}>
      <div className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg rounded-full shadow-lg mx-6' : ''
      }`}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sun-gold to-yellow-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className={`font-bold text-xl transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}>
              Įsileisk Saulę
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#kainos" className={`transition-colors hover:text-sun-gold ${scrolled ? 'text-charcoal' : 'text-white'}`}>
              Kainos
            </a>
            <a href="#procesas" className={`transition-colors hover:text-sun-gold ${scrolled ? 'text-charcoal' : 'text-white'}`}>
              Procesas
            </a>
            <a href="#atsiliepimai" className={`transition-colors hover:text-sun-gold ${scrolled ? 'text-charcoal' : 'text-white'}`}>
              Atsiliepimai
            </a>
            <a href="tel:+37061458748" className="btn-primary flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+370 614 58748</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${scrolled ? 'text-charcoal' : 'text-white'}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white rounded-4xl mt-4 p-6 shadow-xl">
            <div className="flex flex-col gap-4">
              <a href="#kainos" className="text-charcoal hover:text-sun-gold py-2" onClick={() => setMobileOpen(false)}>
                Kainos
              </a>
              <a href="#procesas" className="text-charcoal hover:text-sun-gold py-2" onClick={() => setMobileOpen(false)}>
                Procesas
              </a>
              <a href="#atsiliepimai" className="text-charcoal hover:text-sun-gold py-2" onClick={() => setMobileOpen(false)}>
                Atsiliepimai
              </a>
              <a href="tel:+37061458748" className="btn-primary text-center">
                <Phone className="w-4 h-4 inline mr-2" />
                +370 614 58748
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
