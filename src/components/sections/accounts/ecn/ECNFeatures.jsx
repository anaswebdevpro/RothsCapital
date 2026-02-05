import React from 'react';
import { Container } from '../../../ui/Layout';
import { ShieldCheck, Zap, Server, BarChart, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Server className="w-10 h-10 text-primary" />,
        title: "Direct Market Access",
        description: "Trade directly with liquidity providers. No dealing desk intervention, ensuring no conflict of interest."
    },
    {
        icon: <Zap className="w-10 h-10 text-primary" />,
        title: "Raw Spreads",
        description: "Benefit from spreads as low as 0.0 pips on major currency pairs, offering the tightest pricing available."
    },
    {
        icon: <Lock className="w-10 h-10 text-primary" />,
        title: "Secure & Regulated",
        description: "Institutional-grade security for your high-value account. Funds are segregated and fully protected."
    },
    {
        icon: <BarChart className="w-10 h-10 text-primary" />,
        title: "Institutional Tools",
        description: "Access Level 2 market depth, one-click trading, and advanced algorithmic trading capabilities."
    },
    {
        icon: <Globe className="w-10 h-10 text-primary" />,
        title: "Global Liquidity",
        description: "Deep liquidity from top-tier banks and financial institutions ensures your large orders are filled instantly."
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        title: "Priority Support",
        description: "VIP support from senior account managers and priority access to our dealing desk."
    }
];

const ECNFeatures = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Institutional Trading Environment</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ultimate transparency and speed for the professional trader.</p>
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

export default ECNFeatures;
