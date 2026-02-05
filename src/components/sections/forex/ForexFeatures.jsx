import React from 'react';
import { Container } from '../../ui/Layout';
import { Droplets, TrendingUp, ArrowRightLeft, Percent, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Droplets className="w-10 h-10 text-primary" />,
        title: "High Liquidity & Volatility",
        description: "With over $6.6 trillion traded daily, forex offers unparalleled liquidity. Benefit from tight spreads and minimal slippage."
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-primary" />,
        title: "Advanced Leverage Options",
        description: "Amplify your trading positions with leverage up to 1:3000. Control larger positions with sophisticated risk management."
    },
    {
        icon: <ArrowRightLeft className="w-10 h-10 text-primary" />,
        title: "Two-Way Trading",
        description: "Profit from both rising and falling markets. Go long or short on currency pairs to capitalize on any trend."
    },
    {
        icon: <Percent className="w-10 h-10 text-primary" />,
        title: "Low Transaction Costs",
        description: "Trade with competitive spreads starting from 0.0 pips and clear commission structures with no hidden fees."
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        title: "Regulated Security",
        description: "Trade with confidence knowing your funds are segregated and protected by strict financial regulations."
    },
    {
        icon: <Globe className="w-10 h-10 text-primary" />,
        title: "Global Market Access",
        description: "Trade major, minor, and exotic currency pairs 24 hours a day, 5 days a week across all global sessions."
    }
];

const ForexFeatures = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">The World's Most Liquid Market</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the unique advantages of trading foreign exchange with Roths Capital.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6">
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

export default ForexFeatures;
