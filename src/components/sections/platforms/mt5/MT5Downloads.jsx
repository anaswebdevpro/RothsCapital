import React from 'react';
import { Container } from '../../../ui/Layout';
import { Monitor, Apple, Smartphone, Globe, ArrowUpRight } from 'lucide-react';

const downloads = [
    {
        icon: <Monitor className="w-8 h-8" />,
        title: "MT5 for Windows",
        subtitle: "Desktop Application",
        link: "#windows"
    },
    {
        icon: <Apple className="w-8 h-8" />,
        title: "MT5 for macOS",
        subtitle: "Desktop Application",
        link: "#mac"
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "MT5 for iOS",
        subtitle: "Mobile Application",
        link: "#ios"
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "MT5 for Android",
        subtitle: "Mobile Application",
        link: "#android"
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "MT5 for Web",
        subtitle: "Browser-based Platform",
        link: "#web"
    }
];

const MT5Downloads = () => {
    return (
        <section className="py-24 bg-secondary relative overflow-hidden">
            {/* Bronze/Gold Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#A07E44] to-[#785C2F] opacity-90"></div>

            {/* Wavy Pattern Overlay (simulated with CSS radial gradients) */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 0%, white 0%, transparent 50%)' }}></div>

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get Started in Minutes</h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">Download MT5 and begin your trading journey with Roths Capital today.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {downloads.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="bg-white rounded-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group block relative overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-gray-50 rounded-lg text-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    {item.icon}
                                </div>
                                <div className="p-1 rounded-full border border-gray-200 text-gray-400 group-hover:border-primary group-hover:text-primary transition-colors">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-1 font-heading">{item.title}</h3>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{item.subtitle}</p>

                            {/* Hover bar */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default MT5Downloads;
