import React from 'react';
import { Section, Container } from '../../ui/Layout';
import Button from '../../ui/Button';
import { Monitor, Smartphone, Globe } from 'lucide-react';

const platforms = [
    {
        icon: Monitor,
        title: 'MT5 for Desktop',
        description: 'The full-featured platform with advanced charting, algorithmic trading, and market depth.',
        action: 'Download for Windows',
    },
    {
        icon: Smartphone,
        title: 'MT5 for Mobile',
        description: 'Trade on the go with the powerful mobile app. Full functionality in the palm of your hand.',
        action: 'Download App',
    },
    {
        icon: Globe,
        title: 'MT5 Web Trader',
        description: 'No download required. Access the markets from any browser with our secure web terminal.',
        action: 'Launch Web Trader',
    },
];

export default function Platforms() {
    return (
        <Section className="w-full overflow-hidden bg-gray-50 py-20 lg:py-32">
            {/* Decorative Elements */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px]" />
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />

            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    <div className="flex-1 space-y-8 z-10">
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-secondary">
                            Trade on the Powerful <br />
                            <span className="text-[#D4AF37]">MetaTrader 5</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                            Experience the next generation of trading platforms. MetaTrader 5 offers superior tools for comprehensive price analysis, use of algorithmic trading applications (trading robots, Expert Advisor) and copy trading.
                        </p>

                        <div className="space-y-4">
                            {platforms.map((plat, idx) => (
                                <div key={idx} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 group">
                                    <div className="p-3 bg-white border border-[#D4AF37]/20 rounded-xl text-[#D4AF37] group-hover:scale-110 transition-transform">
                                        <plat.icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-secondary mb-2">{plat.title}</h3>
                                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">{plat.description}</p>
                                        <a href="#" className="text-[#D4AF37] text-sm font-bold hover:gap-2 transition-all flex items-center gap-1">
                                            {plat.action} &rarr;
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
                        {/* Image Container with Floating Elements Effect */}
                        <div className="relative z-10">
                            <img
                                src="/mt5phone.png"
                                alt="MetaTrader 5 Interface"
                                className="w-full h-auto drop-shadow-2xl animate-float-slow"
                            />
                        </div>

                        {/* Background Blob/Glow behind phone */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-[#D4AF37]/20 blur-[60px] rounded-full -z-10"></div>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
