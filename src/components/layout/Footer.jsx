import React from 'react';
import { Container } from '../ui/Layout';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#1a1c23] to-[#0B1221] pt-16 pb-8 border-t border-white/5 text-white">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <img src="/logo.png" alt="Roths Capitals" className="h-12 md:h-15" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Trusted Forex broker providing premium trading solutions with raw spreads, fast execution, and institutional-grade conditions.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="text-gray-400 hover:text-primary transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Account Types', 'Trading Tools', 'Contact Support', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-primary mt-1" />
                                <span className="text-gray-400 text-sm">Level 29, Marina Plaza, Dubai Metro, Dubai, UAE</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-primary" />
                                <span className="text-gray-400 text-sm">+971 4 123 4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-primary" />
                                <span className="text-gray-400 text-sm">support@rothscapital.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe for market updates.</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-white placeholder-gray-500"
                            />
                            <button className="bg-primary text-secondary font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                    <p className="text-gray-500 text-xs leading-relaxed text-center md:text-left">
                        Risk Warning: Trading Forex and Leveraged Financial Instruments involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved.
                    </p>
                    <div className="mt-4 text-center text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Roths Capitals. All rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    );
}
