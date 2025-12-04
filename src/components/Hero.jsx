import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden" style={{ minHeight: '90vh', background: 'linear-gradient(135deg, #f0f4f8 0%, #ffffff 100%)' }}>
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/images/hero.png"
                    alt="Sonrisa radiante"
                    className="w-full h-full object-cover opacity-20"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
                    onError={(e) => { e.target.style.display = 'none' }} // Fallback if image missing
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.4))', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
            </div>

            <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', padding: '0 1rem', maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '600px' }}
                >
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Sonrisas que inspiran <span style={{ color: 'var(--color-primary)' }}>confianza</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                        Tecnología moderna y un trato humano para que te sientas tranquilo y seguro. Tu salud dental en las mejores manos.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{
                                backgroundColor: '#25D366',
                                color: 'white',
                                textDecoration: 'none',
                                padding: '1rem 2rem',
                                borderRadius: '50px',
                                fontWeight: '600',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                boxShadow: '0 4px 14px 0 rgba(37, 211, 102, 0.39)'
                            }}
                        >
                            <span>Agendar Cita por WhatsApp</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                        </a>
                    </div>
                </motion.div>

                {/* Image placeholder for desktop layout if needed, or just keep it clean */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:block"
                    style={{ display: 'none' }} // Hidden by default on mobile, show on desktop via media query if I had css
                >
                    {/* Maybe a circular image or something here? For now the background image covers it */}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
