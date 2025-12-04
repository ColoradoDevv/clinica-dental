import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
    return (
        <section id="equipo" className="section-padding" style={{ backgroundColor: 'var(--color-secondary)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Placeholder for Dra. Elena's photo */}
                        <div style={{
                            width: '100%',
                            height: '400px',
                            backgroundColor: '#cbd5e1',
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <img
                                src="/assets/images/dra-elena.png"
                                alt="Dra. Elena"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.style.display = 'flex';
                                    e.target.parentElement.style.alignItems = 'center';
                                    e.target.parentElement.style.justifyContent = 'center';
                                    e.target.parentElement.innerHTML = '<span style="font-size: 4rem;">👩‍⚕️</span>';
                                }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Conoce a la Dra. Elena</h2>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Directora Médica y Especialista en Ortodoncia</h3>
                        <p style={{ fontSize: '1.125rem', color: 'var(--color-accent)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            "Mi pasión es ver cómo una sonrisa puede cambiar la vida de una persona. Fundé VitalDent con el objetivo de crear un espacio donde la excelencia clínica se une con un trato cercano y familiar. Aquí, tú eres el protagonista."
                        </p>
                        <p style={{ fontSize: '1.125rem', color: 'var(--color-accent)', lineHeight: '1.8' }}>
                            Junto a mi equipo de especialistas, trabajamos cada día para ofrecerte los tratamientos más avanzados en un ambiente relajado y de confianza.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Team;
