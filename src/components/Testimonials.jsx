import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'María García',
            text: '¡Increíble experiencia! Tenía pánico al dentista y aquí ni me enteré. El trato es maravilloso.',
            rating: 5
        },
        {
            name: 'Carlos Ruiz',
            text: 'Llevé a mis hijos y salieron encantados. La Dra. Elena tiene un don con los niños. 100% recomendable.',
            rating: 5
        },
        {
            name: 'Laura Sánchez',
            text: 'Me hice la ortodoncia invisible y el resultado ha sido espectacular. Muy profesionales y atentos.',
            rating: 5
        }
    ];

    return (
        <section id="testimonios" className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Lo que dicen nuestros pacientes</h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: 'var(--color-secondary)',
                                padding: '2rem',
                                borderRadius: '1rem',
                                boxShadow: 'var(--shadow-sm)'
                            }}
                        >
                            <div style={{ color: '#F59E0B', fontSize: '1.25rem', marginBottom: '1rem' }}>
                                {'★'.repeat(testimonial.rating)}
                            </div>
                            <p style={{ fontSize: '1.125rem', color: 'var(--color-text)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                "{testimonial.text}"
                            </p>
                            <p style={{ fontWeight: '600', color: 'var(--color-primary)' }}>
                                {testimonial.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
