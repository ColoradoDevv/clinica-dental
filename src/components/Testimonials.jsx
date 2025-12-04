import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'María García',
            role: 'Mamá de 2 hijos',
            text: 'Llevamos años viniendo en familia. Los niños ya no tienen miedo al dentista, ¡hasta les hace ilusión venir!',
            rating: 5
        },
        {
            name: 'Carlos Ruiz',
            role: 'Paciente de implantes',
            text: 'Me pusieron implantes y el resultado es increíble. Muy profesionales y el trato inmejorable.',
            rating: 5
        },
        {
            name: 'Laura Sánchez',
            role: 'Paciente de ortodoncia',
            text: 'Me hice Invisalign y en menos de un año tengo la sonrisa que siempre quise. Súper recomendado.',
            rating: 5
        }
    ];

    return (
        <section id="testimonios" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        Más de 500 familias felices
                    </h2>
                    <p className="text-slate-500">
                        Esto es lo que dicen nuestros pacientes
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 shadow-sm relative"
                        >
                            <Quote size={32} className="text-cyan-100 absolute top-4 right-4" />
                            <div className="flex gap-1 mb-4 text-amber-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                "{testimonial.text}"
                            </p>
                            <div>
                                <p className="font-semibold text-slate-800">{testimonial.name}</p>
                                <p className="text-sm text-slate-400">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="https://wa.me/1234567890?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-cyan-700 transition-colors"
                    >
                        Únete a nuestra familia
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
