import React from 'react';
import { Container } from '../../ui/Layout';
import { Shield, PieChart, TrendingUp, Globe, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Shield className="w-10 h-10 text-primary" />,
        title: "Safe Haven Asset",
        description: "Precious metals like gold and silver have historically served as safe-haven assets during economic uncertainty, protecting your portfolio from market volatility."
    },
    {
        icon: <PieChart className="w-10 h-10 text-primary" />,
        title: "Portfolio Diversification",
        description: "Add precious metals to your investment portfolio to reduce overall risk and enhance long-term stability through strategic asset diversification."
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-primary" />,
        title: "Inflation Hedge",
        description: "Precious metals typically maintain their value during inflationary periods, making them an effective hedge against currency devaluation and economic instability."
    },
    {
        icon: <Globe className="w-10 h-10 text-primary" />,
        title: "Global Demand",
        description: "Benefit from consistent global demand for precious metals across industries including jewelry, technology, manufacturing, and central bank reserves."
    },
    {
        icon: <Zap className="w-10 h-10 text-primary" />,
        title: "Advanced Leverage Options",
        description: "Amplify your trading positions with leverage up to 1:200. Control larger positions with smaller capital while implementing sophisticated risk management strategies."
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        title: "Regulated Security",
        description: "Trade with confidence knowing your funds are protected. We maintain segregated client accounts and adhere to strict financial regulations for your security."
    }
];

const MetalsFeatures = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Trade Metals with Roths Capital?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the unique advantages of building your metals portfolio with us.</p>
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

export default MetalsFeatures;
