import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, GraduationCap } from 'lucide-react';
import draElenaImg from '../assets/images/dra-elena.png';

const Team = () => {
    const achievements = [
        { icon: Award, text: '15+ Años de Experiencia' },
        { icon: GraduationCap, text: 'Especialista en Ortodoncia' },
        { icon: Heart, text: 'Trato Humano y Cercano' }
    ];

    return (
        <section id="equipo" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            <motion.div
                                className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img
                                    src={draElenaImg.src}
                                    alt="Dra. Elena - Directora Médica"
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl shadow-slate-200/50"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                                        <Award size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-slate-800">+500</p>
                                        <p className="text-sm text-slate-500">Sonrisas Felices</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl -z-10"></div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.span
                            className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full mb-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Nuestro Equipo
                        </motion.span>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                            Conoce a la <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Dra. Elena</span>
                        </h2>

                        <h3 className="text-xl text-slate-600 font-medium mb-6">
                            Directora Médica y Especialista en Ortodoncia
                        </h3>

                        <p className="text-slate-500 text-lg leading-relaxed mb-6">
                            "Mi pasión es ver cómo una sonrisa puede cambiar la vida de una persona. Fundé VitalDent con el objetivo de crear un espacio donde la excelencia clínica se une con un trato cercano y familiar."
                        </p>

                        <p className="text-slate-500 leading-relaxed mb-8">
                            Junto a mi equipo de especialistas, trabajamos cada día para ofrecerte los tratamientos más avanzados en un ambiente relajado y de confianza.
                        </p>

                        {/* Achievements */}
                        <div className="grid sm:grid-cols-3 gap-4">
                            {achievements.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-lg shadow-slate-100/50"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-3">
                                            <Icon size={24} className="text-cyan-600" />
                                        </div>
                                        <p className="text-sm font-medium text-slate-700">{item.text}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Team;
