import React from 'react';
import { Section, Container } from '../ui/Layout';
import { Zap, Shield, Globe, Cpu, BarChart3, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Zap,
        title: 'Lightning Execution',
        description: 'Get your orders filled in milliseconds with our equator-based servers ensuring minimal latency.',
    },
    {
        icon: Shield,
        title: 'Secure & Regulated',
        description: 'Your funds are segregated in top-tier banks. We strictly adhere to international regulatory standards.',
    },
    {
        icon: Wallet,
        title: 'Fast Withdrawals',
        description: 'Access your profits instantly. We offer a wide range of automated withdrawal methods.',
    },
    {
        icon: BarChart3,
        title: 'Deep Liquidity',
        description: 'Trade with institutional-grade liquidity from top tier-1 banks, ensuring full market depth.',
    },
    {
        icon: Globe,
        title: 'Global Markets',
        description: 'Access 500+ instruments across Forex, Indices, Sharks, and Commodities from a single account.',
    },
    {
        icon: Cpu,
        title: 'Advanced Tech',
        description: 'Powered by the award-winning MT5 platform, offering superior analytical tools and algorithmic trading.',
    },
];

export default function Features() {
    return (
        <Section className="bg-surface relative">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Discover the <span className="text-primary">Advantages</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        We provide the environment regular traders need to become professionals.
                        No re-quotes, no rejections, just pure trading.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-surface border border-gray-200 hover:bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors text-primary">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-secondary group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
