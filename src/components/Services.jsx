import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Anchor, Sparkles, Heart, ArrowRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Ortodoncia Invisible',
            description: 'Alinea tu sonrisa de forma discreta y cómoda. Nadie notará que llevas ortodoncia.',
            icon: Smile,
            gradient: 'from-cyan-400 to-blue-500',
            bgColor: 'bg-cyan-50',
            iconBg: 'bg-cyan-100',
            iconColor: 'text-cyan-600'
        },
        {
            title: 'Implantes Dentales',
            description: 'Recupera la funcionalidad y estética de tu boca con soluciones duraderas y naturales.',
            icon: Anchor,
            gradient: 'from-emerald-400 to-teal-500',
            bgColor: 'bg-emerald-50',
            iconBg: 'bg-emerald-100',
            iconColor: 'text-emerald-600'
        },
        {
            title: 'Estética Dental',
            description: 'Blanqueamientos y carillas para que luzcas tu mejor sonrisa.',
            icon: Sparkles,
            gradient: 'from-amber-400 to-orange-500',
            bgColor: 'bg-amber-50',
            iconBg: 'bg-amber-100',
            iconColor: 'text-amber-600'
        },
        {
            title: 'Odontopediatría',
            description: 'Cuidamos la salud dental de los más pequeños con paciencia y cariño.',
            icon: Heart,
            gradient: 'from-rose-400 to-pink-500',
            bgColor: 'bg-rose-50',
            iconBg: 'bg-rose-100',
            iconColor: 'text-rose-600'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="tratamientos" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.span
                        className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Nuestros Servicios
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Tratamientos que transforman <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">sonrisas</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Soluciones personalizadas combinando la última tecnología con un trato humano y cercano.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className={`group relative ${service.bgColor} rounded-3xl p-8 cursor-pointer overflow-hidden`}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`w-16 h-16 ${service.iconBg} group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`}>
                                        <IconComponent size={32} className={`${service.iconColor} group-hover:text-white transition-colors duration-300`} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-3 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-500 group-hover:text-white/90 text-sm leading-relaxed mb-6 transition-colors duration-300">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600 group-hover:text-white transition-colors duration-300">
                                        <span>Saber más</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
