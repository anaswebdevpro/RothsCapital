import React from 'react';
import { Container } from '../../ui/Layout';

const stats = [
    { label: "Spreads From", value: "0.1 Pips" },
    { label: "Max Leverage", value: "1:200" },
    { label: "Metals", value: "4+" },
    { label: "Commission", value: "$0" },
    { label: "Execution Speed", value: "<30ms" },
    { label: "24/5 Support", value: "Yes" },
];

const MetalsStats = () => {
    return (
        <section className="py-20 bg-secondary text-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Institutional-Grade Execution</h2>
                    <p className="text-gray-400">Experience premium trading conditions designed for precious metals traders</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                            <div className="text-sm font-medium text-gray-300 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default MetalsStats;
