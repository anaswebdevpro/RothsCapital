import React from 'react';
import { Container } from '../../ui/Layout';
import { Globe, PieChart, Zap, ArrowLeftRight, Coins, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Globe className="w-10 h-10 text-primary" />,
        title: "Global Market Access",
        description: "Trade major global indices including S&P 500, NASDAQ, FTSE 100, DAX 40, Nikkei 225, and ASX 200 from a single unified platform."
    },
    {
        icon: <PieChart className="w-10 h-10 text-primary" />,
        title: "Market Diversification",
        description: "Gain exposure to entire economies and sectors rather than individual stocks, significantly reducing company-specific risk in your portfolio."
    },
    {
        icon: <Zap className="w-10 h-10 text-primary" />,
        title: "Advanced Leverage Options",
        description: "Amplify your trading positions with leverage up to 1:200. Control larger positions with smaller capital while implementing sophisticated risk management strategies."
    },
    {
        icon: <ArrowLeftRight className="w-10 h-10 text-primary" />,
        title: "Two-Way Trading",
        description: "Profit from both rising and falling markets. Go long or short on indices to capitalize on market trends and movements in any direction."
    },
    {
        icon: <Coins className="w-10 h-10 text-primary" />,
        title: "Low Transaction Costs",
        description: "Trade with competitive spreads starting from 0.8 pips and transparent commission structures. No hidden fees or unnecessary charges on your trades."
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        title: "Regulated Security",
        description: "Trade with confidence knowing your funds are protected. We maintain segregated client accounts and adhere to strict financial regulations for your security."
    }
];

const IndicesFeatures = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Trade Global Stock Markets</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the unique advantages of trading indices with Roths Capital.</p>
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

export default IndicesFeatures;
