import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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

    const LogoIcon = () => (
        <svg viewBox="0 0 50 50" className="w-10 h-10">
            <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0EA5E9' }} />
                    <stop offset="100%" style={{ stopColor: '#0284C7' }} />
                </linearGradient>
            </defs>
            <circle cx="25" cy="25" r="22" fill="url(#logoGrad)" />
            <g transform="translate(25, 28)">
                <path d="M -12 -2 Q -12 5, -7 9 Q -3 11, 0 11 Q 3 11, 7 9 Q 12 5, 12 -2" fill="white" />
                <line x1="-7" y1="-2" x2="-7" y2="5" stroke="#0EA5E9" strokeWidth="1" opacity="0.3" />
                <line x1="-2.5" y1="-1" x2="-2.5" y2="7" stroke="#0EA5E9" strokeWidth="1" opacity="0.3" />
                <line x1="2.5" y1="-1" x2="2.5" y2="7" stroke="#0EA5E9" strokeWidth="1" opacity="0.3" />
                <line x1="7" y1="-2" x2="7" y2="5" stroke="#0EA5E9" strokeWidth="1" opacity="0.3" />
            </g>
            <g transform="translate(35, 17)">
                <circle cx="0" cy="0" r="2.5" fill="white" opacity="0.3" />
                <circle cx="0" cy="0" r="1.3" fill="white" opacity="0.9" />
            </g>
        </svg>
    );

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-white shadow-sm py-2'
                        : 'bg-white/80 backdrop-blur-sm py-3'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2">
                        <LogoIcon />
                        <div className="hidden sm:block">
                            <span className="text-xl font-bold text-slate-800 block leading-tight">VitalDent</span>
                            <span className="text-[10px] text-slate-400 tracking-widest">CLÍNICA DENTAL</span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 hover:text-cyan-600 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            className="bg-cyan-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-cyan-700 transition-colors"
                        >
                            Pedir Cita
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-16 left-0 right-0 bg-white shadow-lg z-40 md:hidden"
                    >
                        <div className="p-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contacto"
                                className="mt-2 bg-cyan-600 text-white px-4 py-3 rounded-xl font-medium text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Pedir Cita
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
