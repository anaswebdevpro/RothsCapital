import React from 'react';
import { Container } from '../../ui/Layout';
import { ShieldCheck, Globe, Factory, Percent, Scale, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <TrendingUp className="w-10 h-10 text-primary" />,
        title: "Blue-Chip Investment",
        description: "Access well-established, financially sound companies with strong track records like Apple, Microsoft, and Amazon."
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        title: "Regulated Security",
        description: "Trade with confidence knowing your investments are protected by strict financial regulations and segregated accounts."
    },
    {
        icon: <Globe className="w-10 h-10 text-primary" />,
        title: "Global Market Access",
        description: "Trade stocks from major global exchanges including NASDAQ, NYSE, LSE, and Hong Kong Stock Exchange."
    },
    {
        icon: <Factory className="w-10 h-10 text-primary" />,
        title: "Diverse Sector Exposure",
        description: "Access companies across technology, healthcare, finance, energy, and consumer sectors to diversify your portfolio."
    },
    {
        icon: <Percent className="w-10 h-10 text-primary" />,
        title: "Dividend Income Potential",
        description: "Earn regular dividend payments from established companies. Build a passive income stream alongside capital growth."
    },
    {
        icon: <Scale className="w-10 h-10 text-primary" />,
        title: "Advanced Leverage Options",
        description: "Amplify your trading positions with leverage up to 1:20. Control larger positions with smaller capital."
    }
];

const StocksFeatures = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Trade Stocks with Roths Capital?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the unique advantages of building your stock portfolio with us.</p>
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

export default StocksFeatures;
