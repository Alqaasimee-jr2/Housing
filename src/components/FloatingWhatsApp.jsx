import React from 'react';

const FloatingWhatsApp = () => {
    const whatsappNumber = "2349019597944";
    const text = "Hello Zenith Suites Lekki, I'd like to book a luxury stay.";

    return (
        <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '3rem',
                right: '3rem',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(10px)',
                padding: '0.75rem',
                borderRadius: '50px',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                transition: 'var(--transition)',
                color: 'white',
                textDecoration: 'none',
                scale: 1,
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.1)'; e.currentTarget.style.backgroundColor = 'var(--gold)'; e.currentTarget.style.color = 'black'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)'; e.currentTarget.style.color = 'white'; }}
            aria-label="Chat on WhatsApp"
        >
            <div 
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'var(--gold)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                transition: 'var(--transition)'
              }}
            >
                💬
            </div>
            <div 
              style={{
                paddingRight: '1rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em'
              }}
            >
                Chat luxury booking
            </div>
        </a>
    );
};

export default FloatingWhatsApp;
