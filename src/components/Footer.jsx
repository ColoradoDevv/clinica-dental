import React from 'react';

const Footer = () => {
    return (
        <footer id="contacto" style={{ backgroundColor: '#1e293b', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>VitalDent</h3>
                        <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
                            Cuidamos de tu sonrisa con la mejor tecnología y un equipo humano excepcional.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: '600' }}>Contacto</h4>
                        <ul style={{ listStyle: 'none', color: '#94a3b8' }}>
                            <li style={{ marginBottom: '0.5rem' }}>📍 Calle Principal 123, Ciudad</li>
                            <li style={{ marginBottom: '0.5rem' }}>📞 +34 912 345 678</li>
                            <li style={{ marginBottom: '0.5rem' }}>📧 info@vitaldent.com</li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: '600' }}>Horario</h4>
                        <ul style={{ listStyle: 'none', color: '#94a3b8' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Lunes - Viernes: 9:00 - 20:00</li>
                            <li style={{ marginBottom: '0.5rem' }}>Sábados: 10:00 - 14:00</li>
                            <li style={{ marginBottom: '0.5rem' }}>Domingos: Cerrado</li>
                        </ul>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid #334155', paddingTop: '2rem', textAlign: 'center', color: '#64748B', fontSize: '0.875rem' }}>
                    <p>&copy; {new Date().getFullYear()} Clínica Dental VitalDent. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
