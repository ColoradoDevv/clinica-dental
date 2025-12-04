import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Tratamientos', href: '#tratamientos' },
        { name: 'Equipo', href: '#equipo' },
        { name: 'Testimonios', href: '#testimonios' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
            style={{
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease'
            }}
        >
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.8rem' }}>🦷</span> VitalDent
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
                    {/* We will use a media query in CSS or inline styles for responsiveness. For now, let's use inline styles with a simple check or just standard flex for desktop. 
              Since I'm not using Tailwind, I need to be careful with "hidden md:flex". 
              I'll implement a simple responsive logic or just standard CSS classes in a separate module or style block.
              For simplicity in this file, I'll use inline styles and a media query in global css or a style tag.
           */}
                </div>

                {/* Desktop Nav Links (Visible on larger screens) */}
                <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{ fontWeight: '500', color: 'var(--color-text)', fontSize: '1rem' }}
                            className="hover:text-primary"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        className="btn btn-primary"
                        style={{ textDecoration: 'none' }}
                    >
                        Pedir Cita
                    </a>
                </div>

                {/* Mobile Menu Button (Visible on small screens) */}
                {/* I will add a media query to hide desktop-nav and show mobile toggle later in global css or here */}
            </div>

            {/* Mobile Menu Overlay would go here */}
        </motion.nav>
    );
};

export default Navbar;
