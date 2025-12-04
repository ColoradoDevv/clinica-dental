import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck } from 'lucide-react';
import heroImage from '../assets/images/hero-smile.jpg';

const Hero = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 to-white pt-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6">
                            <Star size={16} fill="currentColor" />
                            <span>Clínica Dental de Confianza</span>
                        </div>

                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--color-text)', marginBottom: '1.5rem', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                            Sonrisas que inspiran <span style={{ color: 'var(--color-primary)' }}>confianza</span>
                        </h1>

                        <p style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '540px' }}>
                            Tecnología moderna y un trato humano para que te sientas tranquilo y seguro. Tu salud dental en las mejores manos.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
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
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    boxShadow: '0 4px 14px 0 rgba(37, 211, 102, 0.39)',
                                    transition: 'transform 0.2s'
                                }}
                            >
                                <span>Agendar Cita por WhatsApp</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                            </a>
                        </div>

                        <div className="mt-12 flex items-center gap-8 text-slate-500 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-green-100 rounded-full text-green-600">
                                    <ShieldCheck size={20} />
                                </div>
                                <span>Tecnología Avanzada</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                                    <Star size={20} fill="currentColor" />
                                </div>
                                <span>+500 Pacientes Felices</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={heroImage.src}
                                alt="Sonrisa radiante en VitalDent"
                                className="w-full h-auto object-cover"
                                style={{ maxHeight: '600px' }}
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-xs border border-white/50">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">
                                                {i === 3 ? '+' : ''}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-yellow-400 flex">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                                    </div>
                                </div>
                                <p className="text-sm text-slate-700 font-medium">"La mejor experiencia dental que he tenido."</p>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
