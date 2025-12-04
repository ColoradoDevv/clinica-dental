import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'María García',
            role: 'Paciente desde 2021',
            text: '¡Increíble experiencia! Tenía pánico al dentista y aquí ni me enteré. El trato es maravilloso y el equipo súper profesional.',
            rating: 5,
            avatar: 'M'
        },
        {
            name: 'Carlos Ruiz',
            role: 'Paciente desde 2020',
            text: 'Llevé a mis hijos y salieron encantados. La Dra. Elena tiene un don con los niños. 100% recomendable para toda la familia.',
            rating: 5,
            avatar: 'C'
        },
        {
            name: 'Laura Sánchez',
            role: 'Paciente desde 2022',
            text: 'Me hice la ortodoncia invisible y el resultado ha sido espectacular. Muy profesionales, atentos y siempre disponibles.',
            rating: 5,
            avatar: 'L'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="testimonios" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-200 rounded-full"></div>
                <div className="absolute top-40 right-20 w-32 h-32 border border-blue-200 rounded-full"></div>
                <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-cyan-200 rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.span
                        className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Testimonios
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Lo que dicen nuestros <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">pacientes</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Más de 500 sonrisas transformadas. Estas son algunas de sus historias.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
                            whileHover={{ y: -5 }}
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                                <Quote size={20} className="text-white" fill="currentColor" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6 pt-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <Star size={18} className="text-amber-400" fill="currentColor" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-slate-600 text-base leading-relaxed mb-8 italic">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/20">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">{testimonial.name}</p>
                                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
