import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users } from 'lucide-react';
import draElenaImg from '../assets/images/dra-elena.png';

const Team = () => {
    const values = [
        { icon: Heart, label: 'Trato cercano', desc: 'Como en familia' },
        { icon: Award, label: '+15 años', desc: 'De experiencia' },
        { icon: Users, label: '+500 familias', desc: 'Confían en nosotros' }
    ];

    return (
        <section id="equipo" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <img
                            src={draElenaImg.src}
                            alt="Dra. Elena y su equipo"
                            className="rounded-2xl shadow-lg w-full max-w-lg mx-auto"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            Conócenos
                        </h2>
                        <p className="text-cyan-600 font-medium mb-4">
                            Dra. Elena · Directora Médica
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            "Fundé VitalDent con una idea clara: que ir al dentista sea una experiencia agradable para toda la familia. Aquí encontrarás un equipo que te escucha, te explica todo con calma y te cuida como mereces."
                        </p>

                        {/* Values */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <div key={index} className="text-center p-4 bg-slate-50 rounded-xl">
                                        <Icon size={24} className="text-cyan-600 mx-auto mb-2" />
                                        <p className="font-semibold text-slate-800 text-sm">{value.label}</p>
                                        <p className="text-xs text-slate-500">{value.desc}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <a
                            href="https://wa.me/1234567890?text=Hola,%20me%20gustaría%20conocer%20la%20clínica"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-cyan-700 transition-colors"
                        >
                            Agenda tu visita
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Team;
