import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Smile } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contacto" className="bg-slate-900 text-white">
            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                        ¿Listo para cuidar tu sonrisa?
                    </h3>
                    <p className="text-cyan-100 mb-6 max-w-md mx-auto">
                        Primera consulta gratuita. Te esperamos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="https://wa.me/1234567890?text=Hola,%20quiero%20agendar%20mi%20primera%20cita%20gratuita"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#25D366"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                            Agendar por WhatsApp
                        </motion.a>
                        <a
                            href="tel:+34912345678"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors"
                        >
                            <Phone size={18} />
                            Llamar ahora
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Info */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
                                <Smile size={20} className="text-white" />
                            </div>
                            <span className="text-xl font-bold">VitalDent</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Tu clínica dental de confianza para toda la familia.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contacto</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-cyan-500" />
                                <a href="tel:+34912345678" className="hover:text-white transition-colors">+34 912 345 678</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-cyan-500" />
                                <a href="mailto:info@vitaldent.com" className="hover:text-white transition-colors">info@vitaldent.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div>
                        <h4 className="font-semibold mb-4">Ubicación</h4>
                        <div className="flex items-start gap-2 text-sm text-slate-400">
                            <MapPin size={16} className="text-cyan-500 mt-0.5" />
                            <p>Calle Principal 123<br />28001 Madrid</p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-semibold mb-4">Horario</h4>
                        <div className="flex items-start gap-2 text-sm text-slate-400">
                            <Clock size={16} className="text-cyan-500 mt-0.5" />
                            <div>
                                <p>Lun-Vie: 9:00 - 20:00</p>
                                <p>Sábados: 10:00 - 14:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-10 pt-8 text-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} VitalDent. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
