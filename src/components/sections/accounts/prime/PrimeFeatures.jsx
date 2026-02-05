import React from 'react';
import { Container } from '../../../ui/Layout';
import { ShieldCheck, Zap, Headphones, BarChart, Globe, Smartphone, Crown, Briefcase } from 'lucide-react';
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
        icon: <Crown className="w-10 h-10 text-primary" />,
        title: "Premium Conditions",
        description: "Enjoy tighter spreads and lower costs designed for high-volume traders looking to maximize their returns."
    },
    {
        icon: <BarChart className="w-10 h-10 text-primary" />,
        title: "Advanced Analysis",
        description: "Access premium market analysis, direct trading signals, and advanced charting tools."
    },
    {
        icon: <Briefcase className="w-10 h-10 text-primary" />,
        title: "Account Manager",
        description: "Get personalized support with a dedicated account manager to help you navigate the markets."
    },
    {
        icon: <Smartphone className="w-10 h-10 text-primary" />,
        title: "Mobile Trading",
        description: "Trade on the go with our mobile-optimized platforms. Never miss a trading opportunity wherever you are."
    }
];

const PrimeFeatures = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Enhanced Trading Experience</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Superior trading conditions for the ambitious trader.</p>
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

export default PrimeFeatures;
