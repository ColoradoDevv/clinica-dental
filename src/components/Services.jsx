import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: 'Ortodoncia Invisible',
            description: 'Alinea tu sonrisa de forma discreta y cómoda. Nadie notará que llevas ortodoncia.',
            icon: '✨',
            color: '#E0F2FE'
        },
        {
            title: 'Implantes Dentales',
            description: 'Recupera la funcionalidad y estética de tu boca con soluciones duraderas y naturales.',
            icon: '🦷',
            color: '#F0FDF4'
        },
        {
            title: 'Estética Dental',
            description: 'Blanqueamientos y carillas para que luzcas tu mejor sonrisa.',
            icon: '💎',
            color: '#FFF7ED'
        },
        {
            title: 'Odontopediatría',
            description: 'Cuidamos la salud dental de los más pequeños con paciencia y cariño.',
            icon: '🧸',
            color: '#FEF2F2'
        }
    ];

    return (
        <section id="tratamientos" className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Nuestros Tratamientos</h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--color-accent)', maxWidth: '600px', margin: '0 auto' }}>
                        Soluciones personalizadas para cada sonrisa, utilizando la última tecnología.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: service.color,
                                padding: '2rem',
                                borderRadius: '1rem',
                                textAlign: 'center',
                                transition: 'transform 0.3s ease',
                                cursor: 'default'
                            }}
                            whileHover={{ y: -5 }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{service.title}</h3>
                            <p style={{ color: 'var(--color-accent)' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
