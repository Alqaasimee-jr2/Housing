import React from 'react';

const Hero = () => {
  return (
    <section 
      className="section"
      style={{
        height: '100vh',
        position: 'relative',
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background Image */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('/assets/pool.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 10s ease-out',
          zIndex: -1,
        }}
      ></div>

      {/* Luxury Gradient Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
          zIndex: 0,
        }}
      ></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="animate-fade-in delay-200">
          <h1 style={{ marginBottom: '2rem' }}>
            The Only <br /> 
            <span className="text-gold">Haven</span> You Need <br />
            in Lekki
          </h1>
          
          <p 
            className="uppercase tracking-widest text-white/80" 
            style={{ maxWidth: '600px', marginBottom: '3rem', fontSize: '0.9rem', lineHeight: '2', letterSpacing: '0.25em' }}
          >
            A fortified sanctuary of quiet luxury. No power outages, no lag, no compromises.
          </p>

          <div className="flex gap-4 animate-fade-in delay-500">
            <a href="#booking" className="btn btn-gold text-lg py-5 px-10">
              Book Direct & Save 15%
            </a>
            <a href="#gallery" className="btn btn-outline text-lg py-5 px-10 hidden-mobile">
              View Gallery
            </a>
          </div>
        </div>

        {/* Floating Promotion Badge */}
        <div 
          className="glass animate-fade-in delay-500"
          style={{
            position: 'absolute',
            bottom: '-5%',
            right: 0,
            padding: '1.25rem 2rem',
            borderLeft: '3px solid var(--gold)',
            animation: 'pulse 3s infinite ease-in-out',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <span className="text-gold" style={{ fontSize: '1rem', fontWeight: 'bold' }}>OFFER:</span>
          <span className="uppercase tracking-widest" style={{ fontSize: '0.65rem' }}>Secure a <span className="text-gold font-bold">15% Discount</span> on all direct reservations.</span>
        </div>

        <style>{`
          @keyframes pulse {
            0% { transform: translateY(0); opacity: 0.8; }
            50% { transform: translateY(-10px); opacity: 1; }
            100% { transform: translateY(0); opacity: 0.8; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
