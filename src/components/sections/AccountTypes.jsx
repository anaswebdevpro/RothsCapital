import React from 'react';
import { Container } from '../ui/Layout';
import { Check, ArrowRight, BarChart3, Crown, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const accounts = [
    {
        name: 'Standard',
        deposit: '$100',
        spread: 'From 1.0',
        badge: 'POPULAR',
        icon: BarChart3,
        minDeposit: '50',
        desc: 'Perfect for beginners with essential trading features and low entry barrier',
        features: [
            'Low spreads from 1.2 pips',
            'MetaTrader 5 platform',
            'Leverage up to 1:1000',
            'Stop out level: 30%',
            '24/5 customer support',
        ],
        highlight: false,
    },
    {
        name: 'Prime',
        deposit: '$100',
        spread: 'From 0.8',
        badge: 'RECOMMENDED',
        icon: Crown,
        minDeposit: '100',
        desc: 'Advanced features for experienced traders seeking better conditions',
        features: [
            'Tight spreads from 0.8 pips',
            'MetaTrader 5 platform',
            'Leverage up to 1:500',
            'Stop out level: 30%',
            'Priority customer support',
            'Free VPS hosting',
        ],
        highlight: true,
    },
    {
        name: 'ECN Pro',
        deposit: '$1,000',
        spread: 'From 0.0',
        badge: 'PROFESSIONAL',
        icon: Rocket,
        minDeposit: '1,000',
        desc: 'Direct market access for professional traders and institutions',
        features: [
            'Raw spreads from 0.0 pips',
            'MetaTrader 5 platform',
            'Leverage up to 1:200',
            'Stop out level: 30%',
            'Dedicated account manager',
            'Advanced trading tools',
        ],
        highlight: false,
    },
];

export default function AccountTypes() {
    return (
        <section
            id="accounts"
            className="relative py-24 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/bg-7.png')" }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-secondary/10 z-0" />

            <Container className="relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                        <span className="text-primary font-bold text-xs tracking-widest uppercase">
                            Account Type
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Choose Your Trading Account
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Select from our premium account options designed to match your trading style and experience level.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {accounts.map((account, index) => (
                        <motion.div
                            key={account.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "relative bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col transition-all duration-300 hover:-translate-y-2",
                                account.highlight ? "ring-2 ring-primary shadow-primary/20 scale-105 z-10" : "border border-gray-100"
                            )}
                        >
                            {/* Badge */}
                            <div className="absolute top-4 right-4">
                                <span className={cn(
                                    "px-3 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider",
                                    account.highlight ? "bg-primary text-secondary" : "bg-gray-200 text-gray-600"
                                )}>
                                    {account.badge}
                                </span>
                            </div>

                            <div className="p-8 flex-grow">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-6 mx-auto">
                                    <account.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl font-bold text-secondary text-center mb-2">{account.name}</h3>
                                <p className="text-gray-500 text-sm text-center mb-8 h-10">{account.desc}</p>

                                {/* Price Box */}
                                <div className="bg-orange-50/50 rounded-xl p-6 mb-8 text-center border border-orange-100">
                                    <div className="text-4xl font-bold text-primary mb-1">
                                        ${account.minDeposit}
                                    </div>
                                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                                        Minimum Deposit
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="space-y-4 mb-8">
                                    {account.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                                                <Check className="w-2.5 h-2.5 text-primary" />
                                            </div>
                                            <span className="text-sm text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Button Section */}
                            <div className="p-8 pt-0 mt-auto">
                                <button className={cn(
                                    "w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all duration-300 group",
                                    account.highlight
                                        ? "bg-primary text-secondary hover:bg-primary/90 shadow-lg shadow-primary/25"
                                        : "bg-primary text-secondary hover:bg-primary/90"
                                )}>
                                    Open {account.name} Account
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
