import React from 'react';
import { Container } from '../../../ui/Layout';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const downloads = [
    {
        iconUrl: "/microsoft-windows-svgrepo-com.svg",
        title: "Windows",
        subtitle: "Desktop OS",
        link: "#windows",
        className: ""
    },
    {
        iconUrl: "/macos-svgrepo-com.svg", // Fixed path based on context likely available
        title: "macOS",
        subtitle: "Desktop OS",
        link: "#mac",
        className: ""
    },
    {
        iconUrl: "/apple-black-logo-svgrepo-com.svg",
        title: "iOS",
        subtitle: "Mobile App",
        link: "#ios",
        className: "invert"
    },
    {
        iconUrl: "/android-color-svgrepo-com.svg",
        title: "Android",
        subtitle: "Mobile App",
        link: "#android",
        className: ""
    },
    {
        iconUrl: "/chrome-color-svgrepo-com.svg",
        title: "Web Trader",
        subtitle: "Browser Based",
        link: "#web",
        className: ""
    }
];

const MT5Downloads = () => {
    return (
        <section className="py-24 bg-secondary relative overflow-hidden">
            {/* Bronze/Gold Gradient Background */}
            <div className="absolute inset-0 bg-gold-gradient opacity-90"></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 0%, white 0%, transparent 50%)' }}></div>

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Download MetaTrader 5</h2>
                    <p className="text-lg text-gray-800 max-w-2xl mx-auto">Get the world's #1 trading platform on your preferred device.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {downloads.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            whileHover={{ y: -10 }}
                            className="w-full sm:w-[200px] bg-[#0B1221] rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-white/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                        >
                            {/* Glow Effect */}
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-white/5">
                                <img
                                    src={item.iconUrl}
                                    alt={item.title}
                                    className={`w-10 h-10 object-contain ${item.className}`}
                                />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400 mb-6 font-medium tracking-wide uppercase">{item.subtitle}</p>

                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-primary group-hover:border-primary group-hover:text-secondary transition-all">
                                <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default MT5Downloads;
