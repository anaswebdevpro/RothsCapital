import React from 'react';
import { Section, Container } from '../ui/Layout';
import Button from '../ui/Button';
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
        <Section className="bg-surface relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-secondary">
                            Trade on the Powerful <br />
                            <span className="text-primary">MetaTrader 5</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Experience the next generation of trading platforms. MetaTrader 5 offers superior tools for comprehensive price analysis, use of algorithmic trading applications (trading robots, Expert Advisor) and copy trading.
                        </p>

                        <div className="space-y-6">
                            {platforms.map((plat, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors duration-300">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <plat.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-secondary mb-2">{plat.title}</h3>
                                        <p className="text-gray-600 text-sm mb-3">{plat.description}</p>
                                        <a href="#" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">
                                            {plat.action} &rarr;
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative z-10 p-4 border border-gray-200 rounded-3xl bg-white/50 backdrop-blur-md">
                            <img
                                src="/heroBanner.png"
                                alt="MetaTrader 5 Interface"
                                className="rounded-2xl w-full shadow-2xl"
                            />
                        </div>
                        {/* Backsplash */}
                        <div className="absolute top-10 right-10 w-full h-full border border-primary/20 rounded-3xl -z-10" />
                    </div>

                </div>
            </Container>
        </Section>
    );
}
