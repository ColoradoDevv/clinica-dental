import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Anchor, Sparkles, Heart, Users, Baby } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Ortodoncia',
            description: 'Invisalign y brackets para alinear tu sonrisa de forma cómoda.',
            icon: Smile,
            color: 'bg-cyan-50 hover:bg-cyan-100',
            iconColor: 'text-cyan-600'
        },
        {
            title: 'Implantes',
            description: 'Recupera piezas perdidas con resultados naturales y duraderos.',
            icon: Anchor,
            color: 'bg-emerald-50 hover:bg-emerald-100',
            iconColor: 'text-emerald-600'
        },
        {
            title: 'Estética',
            description: 'Blanqueamientos y carillas para una sonrisa radiante.',
            icon: Sparkles,
            color: 'bg-amber-50 hover:bg-amber-100',
            iconColor: 'text-amber-600'
        },
        {
            title: 'Odontopediatría',
            description: 'Cuidamos los dientes de los más pequeños con cariño.',
            icon: Baby,
            color: 'bg-rose-50 hover:bg-rose-100',
            iconColor: 'text-rose-500'
        },
        {
            title: 'Familia',
            description: 'Tratamientos para toda la familia en un solo lugar.',
            icon: Users,
            color: 'bg-violet-50 hover:bg-violet-100',
            iconColor: 'text-violet-600'
        },
        {
            title: 'Urgencias',
            description: 'Atención inmediata cuando más lo necesitas.',
            icon: Heart,
            color: 'bg-red-50 hover:bg-red-100',
            iconColor: 'text-red-500'
        }
    ];

    return (
        <section id="tratamientos" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        ¿Cómo podemos ayudarte?
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        Elige el servicio que necesitas y agenda tu cita hoy mismo.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const waLink = `https://wa.me/1234567890?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(service.title)}`;
                        return (
                            <motion.a
                                key={index}
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className={`${service.color} rounded-2xl p-6 transition-all cursor-pointer group`}
                                whileHover={{ y: -4 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm">
                                        <Icon size={24} className={service.iconColor} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-cyan-700 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p className="text-slate-500 mb-4">¿No encuentras lo que buscas?</p>
                    <a
                        href="tel:+34912345678"
                        className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:text-cyan-700"
                    >
                        Llámanos al +34 912 345 678
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
