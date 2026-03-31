import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Amenities from './components/Amenities'
import Testimonials from './components/Testimonials'
import BookingForm from './components/BookingForm'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import './index.css'

function App() {
  return (
    <div style={{ backgroundColor: 'black', width: '100vw', overflowX: 'hidden' }}>
      <Header />
      
      <main>
        <Hero />
        <Gallery />
        <Amenities />
        <Testimonials />
        <BookingForm />
      </main>
      
      {/* Footer */}
      <footer style={{ padding: '8rem 0 4rem', backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4rem' }}>
          <div style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', letterSpacing: '-0.05em', color: 'white', textAlign: 'center' }}>
            THE ZENITH<br /><span className="text-gold" style={{ letterSpacing: '0.3em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Suites Lekki</span>
          </div>
          
          <nav style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#gallery" className="nav-link uppercase">Gallery</a>
            <a href="#amenities" className="nav-link uppercase">Amenities</a>
            <a href="#booking" className="nav-link uppercase">Booking</a>
            <a href="#testimonials" className="nav-link uppercase">Reviews</a>
          </nav>

          <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.05)' }}></div>

          <div 
            style={{ 
              width: '100%', 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.3)'
            }}>
            <div>© 2026 ZENITH SUITES LEKKI • EXCLUSIVE ACCESS</div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="#" style={{ transition: 'var(--transition)' }} onMouseOver={(e) => e.target.style.color = 'var(--gold)'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.3)'}>Privacy</a>
              <a href="#" style={{ transition: 'var(--transition)' }} onMouseOver={(e) => e.target.style.color = 'var(--gold)'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.3)'}>Terms</a>
            </div>
            <div>Built for the Elite.</div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            footer .container { flex-direction: column !important; }
            footer nav { gap: 2rem !important; }
          }
        `}</style>
      </footer>

      <FloatingWhatsApp />
    </div>
  )
}

export default App
