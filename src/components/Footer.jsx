import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Smile, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' }
    ];

    return (
        <footer id="contacto" className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* CTA Section */}
                <motion.div
                    className="py-16 border-b border-slate-800"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para tu nueva sonrisa?</h3>
                            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                                Agenda tu primera consulta gratuita y descubre cómo podemos ayudarte.
                            </p>
                            <motion.a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-white text-slate-800 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                Agendar por WhatsApp
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Main Footer Content */}
                <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                                <Smile size={24} className="text-white" />
                            </div>
                            <span className="text-2xl font-bold">
                                Vital<span className="text-cyan-400">Dent</span>
                            </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Cuidamos de tu sonrisa con la mejor tecnología y un equipo humano excepcional.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors">
                                <MapPin size={20} className="text-cyan-400 mt-0.5 shrink-0" />
                                <span>Calle Principal 123, Ciudad</span>
                            </li>
                            <li>
                                <a href="tel:+34912345678" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                                    <Phone size={20} className="text-cyan-400 shrink-0" />
                                    <span>+34 912 345 678</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@vitaldent.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                                    <Mail size={20} className="text-cyan-400 shrink-0" />
                                    <span>info@vitaldent.com</span>
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Hours */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold mb-6">Horario</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li className="flex justify-between">
                                <span>Lunes - Viernes</span>
                                <span className="text-white font-medium">9:00 - 20:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sábados</span>
                                <span className="text-white font-medium">10:00 - 14:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Domingos</span>
                                <span className="text-rose-400 font-medium">Cerrado</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold mb-6">Enlaces</h4>
                        <ul className="space-y-3">
                            {['Inicio', 'Tratamientos', 'Equipo', 'Testimonios'].map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Clínica Dental VitalDent. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
