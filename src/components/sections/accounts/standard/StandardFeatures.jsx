import React from 'react';
import { Container } from '../../../ui/Layout';


import { ShieldCheck, Zap, Headphones, BarChart, Globe, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        title: "Secure & Regulated",
        description: "Trade with confidence knowing your funds are protected by robust security measures and regulatory compliance."
    },
    {
        icon: <Zap className="w-10 h-10 text-primary" />,
        title: "Fast Execution",
        description: "Experience lightning-fast trade execution with our advanced technology infrastructure and low latency systems."
    },
    {
        icon: <Headphones className="w-10 h-10 text-primary" />,
        title: "24/7 Support",
        description: "Get dedicated support whenever you need it. Our multilingual team is available around the clock to assist you."
    },
    {
        icon: <BarChart className="w-10 h-10 text-primary" />,
        title: "Advanced Tools",
        description: "Access powerful trading tools, advanced charting, and comprehensive market analysis to enhance your trading decisions."
    },
    {
        icon: <Globe className="w-10 h-10 text-primary" />,
        title: "Global Markets",
        description: "Trade across multiple global markets including Forex, Stocks, Commodities, Indices, and Cryptocurrencies."
    },
    {
        icon: <Smartphone className="w-10 h-10 text-primary" />,
        title: "Mobile Trading",
        description: "Trade on the go with our mobile-optimized platforms. Never miss a trading opportunity wherever you are."
    }
];

const StandardFeatures = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Premium Trading Experience</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Enjoy world-class trading conditions with our Standard Account.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default StandardFeatures;
