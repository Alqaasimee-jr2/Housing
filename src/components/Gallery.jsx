import React from 'react';

const Gallery = () => {
    const images = [
        { id: 1, src: '/assets/bedroom-1.png', alt: 'Master Suite' },
        { id: 2, src: '/assets/bedroom-2.png', alt: 'Modern Loft' },
        { id: 3, src: '/assets/bedroom-3.png', alt: 'Classic Royale' },
        { id: 4, src: '/assets/bedroom-4.png', alt: 'Penthouse Bedroom' },
        { id: 5, src: '/assets/bedroom-5.png', alt: 'Zen Suite' },
    ];

    return (
        <section id="gallery" className="section" style={{ backgroundColor: '#050505' }}>
            <div className="container">
                <div className="text-center animate-fade-in" style={{ marginBottom: '5rem' }}>
                    <h2 style={{ marginBottom: '1.5rem', color: 'white' }}>The <span className="text-gold">Standard</span></h2>
                    <p style={{ letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--white-muted)' }}>Lekki Phase 1's Most Refined Interiors</p>
                    <div style={{ width: '60px', height: '2px', background: 'var(--gold)', margin: '2rem auto 0' }}></div>
                </div>

                <div className="grid gallery-grid">
                    {/* Featured Item */}
                    <div className="gallery-item" style={{ gridColumn: 'span 2', height: '550px' }}>
                        <img src={images[0].src} alt={images[0].alt} className="gallery-image" />
                        <div className="gallery-overlay">
                            <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', letterSpacing: '0.2em', borderBottom: '1px solid var(--gold)', paddingBottom: '0.5rem' }}>{images[0].alt}</span>
                        </div>
                    </div>

                    <div className="gallery-item">
                        <img src={images[1].src} alt={images[1].alt} className="gallery-image" />
                        <div className="gallery-overlay">
                            <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>{images[1].alt}</span>
                        </div>
                    </div>

                    {images.slice(2).map((img, i) => (
                        <div key={i} className="gallery-item" style={{ height: '400px' }}>
                            <img src={img.src} alt={img.alt} className="gallery-image" />
                            <div className="gallery-overlay">
                                <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}>{img.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <style>{`
                  @media (max-width: 900px) {
                    .gallery-item { grid-column: span 1 !important; height: 400px !important; }
                  }
                `}</style>
            </div>
        </section>
    );
};

export default Gallery;
