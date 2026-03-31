import React, { useState } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        checkIn: '',
        checkOut: '',
        guests: '1',
        suite: 'Master Suite',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const whatsappNumber = "2349019597944";
        const text = `*New Booking Request - Zenith Suites Lekki*%0A%0A*Name:* ${formData.name}%0A*Suite:* ${formData.suite}%0A*Check-in:* ${formData.checkIn}%0A*Check-out:* ${formData.checkOut}%0A*Guests:* ${formData.guests}%0A*Message:* ${formData.message}%0A%0A_Note: I am interested in the 15% Direct Booking Discount._`;
        
        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    };

    return (
        <section id="booking" className="section" style={{ backgroundColor: '#0a0a0a', color: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem' }}>
                    <div className="animate-fade-in delay-200">
                        <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Book <span className="text-gold">Discreetly</span> <br /> Save 15%</h2>
                        <p style={{ color: 'var(--white-muted)', marginBottom: '3rem', fontSize: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Direct reservations remain strictly confidential.</p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="flex gap-4 items-center">
                                <div style={{ fontSize: '1.5rem', width: '50px', height: '50px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--gold-light)' }}>📍</div>
                                <span style={{ fontSize: '0.9rem', letterSpacing: '0.1em', fontWeight: 600 }}>Lekki Phase 1, Lagos, Nigeria.</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div style={{ fontSize: '1.5rem', width: '50px', height: '50px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--gold-light)' }}>📞</div>
                                <span style={{ fontSize: '0.9rem', letterSpacing: '0.1em', fontWeight: 600 }}>+234 901 959 7944</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div style={{ fontSize: '1.5rem', width: '50px', height: '50px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--gold-light)' }}>✉️</div>
                                <span style={{ fontSize: '0.9rem', letterSpacing: '0.1em', fontWeight: 600 }}>qaasimkids6@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="animate-fade-in delay-500">
                        <form 
                            onSubmit={handleSubmit} 
                            style={{ 
                                background: 'rgba(255,255,255,0.03)', 
                                padding: '3rem', 
                                border: '1px solid rgba(212, 175, 55, 0.15)',
                                backdropFilter: 'blur(20px)'
                            }}
                        >
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                                <div>
                                    <label className="form-label">Full Name</label>
                                    <input type="text" name="name" required onChange={handleChange} className="form-input" placeholder="Alexander O." />
                                </div>
                                <div>
                                    <label className="form-label">Select Suite</label>
                                    <select name="suite" onChange={handleChange} className="form-input" style={{ color: '#888' }}>
                                        <option value="Master Suite">Master Suite</option>
                                        <option value="Modern Loft">Modern Loft</option>
                                        <option value="Classic Royale">Classic Royale</option>
                                        <option value="Penthouse">Penthouse</option>
                                        <option value="Zen Suite">Zen Suite</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                                <div>
                                    <label className="form-label">Check-In</label>
                                    <input type="date" name="checkIn" required onChange={handleChange} className="form-input" style={{ color: '#888' }} />
                                </div>
                                <div>
                                    <label className="form-label">Check-Out</label>
                                    <input type="date" name="checkOut" required onChange={handleChange} className="form-input" style={{ color: '#888' }} />
                                </div>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <label className="form-label">Message (Optional)</label>
                                <textarea name="message" onChange={handleChange} className="form-input" placeholder="Any special requirements?" style={{ resize: 'none' }}></textarea>
                            </div>

                            <button type="submit" className="btn btn-gold" style={{ width: '100%', fontSize: '1rem', padding: '1.5rem' }}>
                                Send WhatsApp Booking
                            </button>
                            
                            <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                                Your stay will be handled with absolute discretion.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            
            <style>{`
              @media (max-width: 600px) {
                div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
              }
            `}</style>
        </section>
    );
};

export default BookingForm;
