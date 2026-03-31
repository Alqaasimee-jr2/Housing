import React from 'react';

const Amenities = () => {
    const amenityList = [
        {
            title: "ZERO SWITCH-OVER POWER",
            description: "Industrial-grade primary power systems. No 'Up-NEPA' moments or switching delays.",
            icon: "⚡"
        },
        {
            title: "STARLINK 200MBPS+ WIFI",
            description: "Ultra-high speed satellite internet for lag-free global calls and 4K streaming.",
            icon: "🛰️"
        },
        {
          title: "CHILL AT THE ZENITH",
          description: "An exclusive infinity pool designed for late-night swims and private relaxation.",
          icon: "🏊‍♂️"
        }
    ];

    return (
        <section id="amenities" className="section" style={{ backgroundColor: 'white', color: 'black' }}>
            <div className="container">
                <div className="flex-row items-center gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    <div className="animate-fade-in delay-200">
                        <h2 style={{ marginBottom: '2.5rem', color: 'black', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>World-Class <br /> <span className="text-gold">Amenities</span></h2>
                        <p style={{ color: '#444', marginBottom: '3rem', fontSize: '1.2rem', lineHeight: '1.6', fontWeight: 300 }}>
                            Crafted for the discerning traveler, our suites offer a seamless blend of high-end comfort and modern utility.
                        </p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            {amenityList.map((item, index) => (
                                <div key={index} className="flex gap-8 hover-slide">
                                    <div style={{ fontSize: '2.5rem' }}>{item.icon}</div>
                                    <div>
                                        <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 700, letterSpacing: '0.1em' }}>{item.title}</h3>
                                        <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="animate-fade-in delay-500" style={{ position: 'relative' }}>
                        <div style={{ aspectRatio: '1/1', position: 'relative', overflow: 'hidden' }}>
                            <img 
                                src="/assets/pool.png" 
                                alt="Private Pool" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }} 
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            />
                            <div 
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    backgroundColor: 'var(--gold)',
                                    color: 'black',
                                    padding: '2rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    fontWeight: 'bold',
                                    fontSize: '0.75rem',
                                    lineHeight: 1.5,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                                }}
                            >
                                Private <br /> Infinity <br /> Pool
                            </div>
                        </div>
                        <div 
                            className="glass"
                            style={{
                                position: 'absolute',
                                bottom: '-2rem',
                                left: '-2rem',
                                padding: '3rem',
                                background: 'black',
                                color: 'white',
                                width: '80%',
                                borderLeft: '5px solid var(--gold)',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                                zIndex: 10
                            }}
                        >
                            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.6rem', color: 'white' }}>"The zenith of luxury in the heart of Lekki."</p>
                        </div>
                    </div>
                </div>

                <style>{`
                  .hover-slide:hover { transform: translateX(10px); }
                  @media (max-width: 768px) {
                    .glass { position: relative !important; inset: 0 !important; width: 100% !important; margin-top: 2rem; padding: 2rem !important; }
                  }
                `}</style>
            </div>
        </section>
    );
};

export default Amenities;
