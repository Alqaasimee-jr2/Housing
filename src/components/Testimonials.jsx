import React, { useState } from 'react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Alexander O.",
            role: "Corporate Executive",
            text: "Unrivaled security and privacy. The Starlink speed is exactly what I need for my global calls. The interior design is 10/10.",
            stay: "Stayed in Master Suite"
        },
        {
            name: "Sarah J.",
            role: "Digital Nomad",
            text: "The pool at night is magical. Zenith Suites is truly a sanctuary in the middle of Lagos. I'll be back next month!",
            stay: "Stayed in Penthouse"
        },
        {
            name: "David K.",
            role: "Venture Capitalist",
            text: "24/7 power is a must, and Zenith delivers. The team is professional, discreet, and the location is perfect for meetings.",
            stay: "Stayed in Zen Suite"
        }
    ];

    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
    const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <section id="testimonials" className="section" style={{ backgroundColor: 'black', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ fontSize: '10rem', color: 'var(--gold)', opacity: 0.1, position: 'absolute', top: '20%', left: '10%', zIndex: 0 }}>“</div>
                    
                    <div style={{ position: 'relative', minHeight: '300px', display: 'flex', alignItems: 'center', zIndex: 1, padding: '2rem 0' }}>
                        {reviews.map((review, index) => (
                            <div 
                                key={index}
                                style={{ 
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    transition: 'var(--transition)',
                                    opacity: index === current ? 1 : 0,
                                    transform: index === current ? 'translateY(0)' : 'translateY(40px)',
                                    pointerEvents: index === current ? 'auto' : 'none'
                                }}
                            >
                                <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginBottom: '3rem', color: 'white', lineHeight: 1.4 }}>
                                    {review.text}
                                </p>
                                <div>
                                    <h4 className="text-gold" style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.2em' }}>{review.name}</h4>
                                    <p style={{ fontSize: '0.7rem', color: 'var(--white-muted)', letterSpacing: '0.1em' }}>{review.role} • {review.stay}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-12" style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center' }}>
                        <button 
                            onClick={prev}
                            style={{ 
                                width: '60px', 
                                height: '60px', 
                                border: '1px solid rgba(212, 175, 55, 0.4)', 
                                background: 'transparent',
                                color: 'var(--gold)',
                                fontSize: '1.5rem',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                transition: 'var(--transition)'
                            }}
                            onMouseOver={(e) => { e.target.style.background = 'var(--gold)'; e.target.style.color = 'black'; }}
                            onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--gold)'; }}
                        >
                            ←
                        </button>
                        <button 
                            onClick={next}
                            style={{ 
                                width: '60px', 
                                height: '60px', 
                                border: '1px solid rgba(212, 175, 55, 0.4)', 
                                background: 'transparent',
                                color: 'var(--gold)',
                                fontSize: '1.5rem',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                transition: 'var(--transition)'
                            }}
                            onMouseOver={(e) => { e.target.style.background = 'var(--gold)'; e.target.style.color = 'black'; }}
                            onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--gold)'; }}
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
