import { Phone, MessageCircle } from 'lucide-react'

export default function FloatingCTA() {
  return (
    <div className="floating-cta">
      <a 
        href="tel:+37061458748"
        className="group"
        aria-label="Skambinti"
      >
        <Phone className="w-6 h-6 group-hover:animate-bounce" />
        <span className="hidden sm:inline">+370 614 58748</span>
      </a>
    </div>
  )
}
