import { Phone, Mail, MapPin, Clock, Sun } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-sky-deep text-white pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pasiruošę įsileisti saulę?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Skambinkite dabar arba atsiųskite nuotraukas — sutarsime kainą per kelias minutes
          </p>
          <a 
            href="tel:+37061458748"
            className="inline-flex items-center gap-3 px-8 py-4 bg-sun-gold text-white rounded-full font-semibold text-lg hover:bg-sun-light transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            +370 614 58748
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sun-gold to-yellow-600 flex items-center justify-center">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Įsileisk Saulę</span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              Profesionalus langų valymas Vilniuje ir rajone. Dirbame nuo 2014 metų.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Priimame užsakymus</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontaktai</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+37061458748" className="hover:text-sun-gold transition-colors">
                  +370 614 58748
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Vilnius ir rajonas</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>I-V 8:00 - 18:00</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Paslaugos</h3>
            <ul className="space-y-2 text-white/70">
              <li className="hover:text-sun-gold cursor-pointer transition-colors">
                Profilaktinis valymas
              </li>
              <li className="hover:text-sun-gold cursor-pointer transition-colors">
                Generalinis valymas
              </li>
              <li className="hover:text-sun-gold cursor-pointer transition-colors">
                Postatybinis valymas
              </li>
              <li className="hover:text-sun-gold cursor-pointer transition-colors">
                Vitrinų valymas
              </li>
              <li className="hover:text-sun-gold cursor-pointer transition-colors">
                Laiptinių valymas
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© 2024 Įsileisk Saulė. Visos teisės saugomos.</p>
          <div className="flex gap-6">
            <a href="https://www.skelbiu.lt/skelbimai/profesionalus-langu-valymas-vilniuje-23179579.html" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hover:text-sun-gold transition-colors">
              Skelbiu.lt
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
