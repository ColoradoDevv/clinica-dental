import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, Shield, ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/hero-smile.jpg';

const Hero = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-b from-cyan-50/50 to-white">
            <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
                            <Shield size={16} />
                            Más de 500 familias confían en nosotros
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                            Tu sonrisa en las <span className="text-cyan-600">mejores manos</span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Cuidamos de toda tu familia con un trato cercano y tecnología de última generación. Primera consulta gratuita.
                        </p>

                        {/* Quick Info */}
                        <div className="flex flex-wrap gap-6 mb-8 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-cyan-600" />
                                Lun-Vie: 9:00-20:00
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={18} className="text-cyan-600" />
                                +34 912 345 678
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                href="https://wa.me/1234567890?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all shadow-lg shadow-green-600/20"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                Agendar por WhatsApp
                            </motion.a>

                            <motion.a
                                href="#tratamientos"
                                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 hover:border-cyan-600 hover:text-cyan-600 transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Ver servicios
                                <ArrowRight size={20} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            <img
                                src={heroImage.src}
                                alt="Familia sonriendo en VitalDent"
                                className="rounded-3xl shadow-2xl w-full"
                            />
                            {/* Floating testimonial */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg max-w-xs">
                                <div className="flex gap-1 text-amber-400 mb-2">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    ))}
                                </div>
                                <p className="text-slate-600 text-sm italic">"Excelente trato con los niños. ¡Muy recomendado!"</p>
                                <p className="text-slate-800 text-sm font-medium mt-2">— Ana M.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
