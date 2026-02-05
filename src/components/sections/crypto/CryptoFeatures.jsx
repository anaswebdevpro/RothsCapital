import React from 'react';
import { Container } from '../../ui/Layout';
import { Clock, TrendingUp, Zap, ArrowLeftRight, Layers, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Clock className="w-10 h-10 text-primary" />,
        title: "24/7 Market Access",
        description: "Trade cryptocurrencies around the clock, 365 days a year. Unlike traditional markets, crypto never sleeps, offering continuous trading opportunities."
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-primary" />,
        title: "High Volatility Potential",
        description: "Cryptocurrency markets offer significant price movements, creating more trading opportunities and potential for higher returns compared to traditional assets."
    },
    {
        icon: <Zap className="w-10 h-10 text-primary" />,
        title: "Advanced Leverage Options",
        description: "Amplify your trading positions with leverage up to 1:100 on major cryptocurrencies. Manage risk with sophisticated tools and real-time monitoring."
    },
    {
        icon: <ArrowLeftRight className="w-10 h-10 text-primary" />,
        title: "Two-Way Trading",
        description: "Profit from both rising and falling crypto markets. Go long to capitalize on price increases or short to benefit from market corrections."
    },
    {
        icon: <Layers className="w-10 h-10 text-primary" />,
        title: "Diverse Crypto Portfolio",
        description: "Access a comprehensive selection of cryptocurrencies including Bitcoin, Ethereum, Cardano, Solana, Polkadot, and emerging DeFi tokens."
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        title: "Secure Infrastructure",
        description: "Trade with confidence using our secure, regulated platform. We employ industry-leading security protocols to protect your digital assets."
    }
];

const CryptoFeatures = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">The Future of Finance is Digital</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the unique advantages of cryptocurrency trading with Roths Capital.</p>
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

export default CryptoFeatures;
