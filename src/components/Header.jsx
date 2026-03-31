import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'var(--transition)',
        backgroundColor: isScrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
        padding: isScrolled ? '1rem 0' : '2rem 0',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none'
      }}
    >
      <div className="container flex justify-between items-center">
        <a href="/" className="logo">
          <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', letterSpacing: '-0.05em', color: 'white' }}>
            ZENITH<span className="text-gold">SUITES</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden-mobile flex items-center gap-12">
          <div className="flex gap-8" style={{ borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '2rem', marginRight: '1rem' }}>
            <a href="#gallery" className="nav-link uppercase">Gallery</a>
            <a href="#amenities" className="nav-link uppercase">Amenities</a>
            <a href="#booking" className="nav-link uppercase">Book Now</a>
          </div>
          <a href="#booking" className="btn btn-gold" style={{ padding: '0.75rem 1.5rem', fontSize: '0.7rem' }}>
            Reserve Direct
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md-hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div style={{ width: '25px', height: '2px', background: 'white', marginBottom: '5px', transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none', transition: 'var(--transition)' }}></div>
          <div style={{ width: '25px', height: '2px', background: 'white', marginBottom: '5px', opacity: isMenuOpen ? 0 : 1, transition: 'var(--transition)' }}></div>
          <div style={{ width: '25px', height: '2px', background: 'white', transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', transition: 'var(--transition)' }}></div>
        </button>

        {/* CSS for the menu toggle (Inline style for simplicity in this specific case) */}
        <style>{`
          @media (max-width: 768px) {
            .md-hidden { display: block !important; }
            .hidden-mobile { display: none !important; }
          }
        `}</style>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.98)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          gap: '2rem'
        }}
      >
        <nav className="flex flex-col items-center gap-8">
          <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest hover:text-gold">Gallery</a>
          <a href="#amenities" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest hover:text-gold">Amenities</a>
          <a href="#booking" onClick={() => setIsMenuOpen(false)} className="text-xl uppercase tracking-widest hover:text-gold">Book Now</a>
          <a href="#booking" onClick={() => setIsMenuOpen(false)} className="btn btn-gold full-mobile text-center">
            Book Direct & Save 15%
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
