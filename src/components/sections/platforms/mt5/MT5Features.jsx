import React from 'react';
import { Container } from '../../../ui/Layout';
import { Globe, BarChart, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        number: "01",
        title: "Multi-Asset Trading",
        description: "Trade Forex, Stocks, Commodities, and Cryptocurrencies all from one integrated platform with superior execution speed."
    },
    {
        number: "02",
        title: "Advanced Charts & Analysis",
        description: "Access 21 timeframes, over 80 built-in technical indicators, and analytical objects for comprehensive market analysis."
    },
    {
        number: "03",
        title: "Automated Trading",
        description: "Develop, test, and apply Expert Advisors (EAs) and technical indicators with the built-in MQL5 development environment."
    }
];

const MT5Features = () => {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Column - Mobile Image */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <img
                            src="/whyChoseMt5.png"
                            alt="MT5 Mobile"
                            className="w-full max-w-[350px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:w-1/2">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose MT5 with <span className="text-secondary">Roths Capital</span></h2>
                            <p className="text-lg text-gray-600">Powerful features designed to give you the competitive edge in trading.</p>
                        </div>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-6 group hover:translate-x-2 transition-transform duration-300"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gold-gradient opacity-60 group-hover:opacity-100 transition-opacity">
                                            {feature.number}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MT5Features;
