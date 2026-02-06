import React from 'react';
import { Container } from '../ui/Layout';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, AlertTriangle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100 text-gray-600 font-sans">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <img src="/logo.png" alt="Roths Capital" className="h-14" />
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Trusted Forex broker providing premium trading solutions with raw spreads, fast execution, and institutional-grade conditions.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-6 font-display">Quick Links</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Account Types', 'Trading Tools', 'Contact Support', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-500 hover:text-[#D4AF37] text-sm transition-colors font-medium">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-6 font-display">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-[#D4AF37] mt-1" />
                                <span className="text-gray-500 text-sm">Level 29, Marina Plaza, Dubai Metro, Dubai, UAE</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-[#D4AF37]" />
                                <span className="text-gray-500 text-sm">+971 4 123 4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-[#D4AF37]" />
                                <span className="text-gray-500 text-sm">support@rothscapital.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-6 font-display">Newsletter</h4>
                        <p className="text-gray-500 text-sm mb-4">Subscribe for market updates.</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] text-gray-900 placeholder-gray-400"
                            />
                            <button className="bg-[#D4AF37] text-white font-bold py-3 rounded-lg hover:bg-[#c5a027] transition-colors shadow-lg shadow-[#D4AF37]/20">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Disclaimer Section */}
                <div className="mb-12 bg-[#FDFBF7] border-l-4 border-[#D4AF37] p-6 md:p-8 rounded-r-xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-md bg-[#D4AF37]/20 flex items-center justify-center">
                            <AlertTriangle size={18} className="text-[#D4AF37]" fill="#D4AF37" fillOpacity={0.2} />
                        </div>
                        <h3 className="text-gray-900 font-bold text-base font-display">Important Disclaimer</h3>
                    </div>
                    <div className="space-y-4 text-xs text-gray-500 leading-relaxed text-justify">
                        <p>
                            <span className="font-bold text-gray-700">Disclaimer:</span> Roths Capital provides the simulated trading services advertised on www.rothscapital.com. For more information on simulated trading services provided by Roths Capital please contact info@rothscapital.com. Services and information on this site are not intended for U.S. citizens/residents and should not be used in jurisdictions where such use would violate applicable laws or regulations.
                        </p>
                        <p>
                            None of the information provided by the Company or contained herein is intended as investment advice, an offer or solicitation of an offer to buy or sell securities, or a recommendation, endorsement, or sponsorship of any security, company, or fund. The information contained on the Company's websites is provided for informational purposes only and is not intended to be relied upon for making investment decisions.
                        </p>
                        <p>
                            <span className="font-bold text-gray-700">Note:</span> Past performance is not necessarily indicative of future results. The accounts utilized for our services are simulated accounts. Hypothetical performance results have many inherent limitations.
                        </p>
                        <p>
                            <span className="font-bold text-gray-700">Restricted Regions:</span> Roths Capital Limited does not provide services for citizens/residents of the United States, Cuba, Iraq, Myanmar, North Korea, Sudan. The services of Roths Capital Limited are not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <div className="w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center text-white text-[10px] font-bold">C</div>
                        <span>{new Date().getFullYear()} Roths Capital. All Rights Reserved.</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-gray-500">
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Cookie Policy</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Refund Policy</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Risk Disclosure</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
