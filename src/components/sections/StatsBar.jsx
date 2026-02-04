import React from 'react';
import { Container } from '../ui/Layout';

const stats = [
    { label: 'Minimum Deposit', value: '$100', sub: 'Start Small' },
    { label: 'Leverage Up To', value: '1:1000', sub: 'Maximize Potential' },
    { label: 'Spreads From', value: '0.0', sub: 'Pips' },
    { label: 'Execution Speed', value: '<30ms', sub: 'Ultra Fast' },
];

export default function StatsBar() {
    return (
        <div className="border-y border-gray-200 bg-surface/80 backdrop-blur-sm">
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center md:text-left border-r last:border-0 border-gray-200 pr-4">
                            <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">{stat.value}</div>
                            <div className="text-sm font-medium text-primary uppercase tracking-wider mb-1">{stat.label}</div>
                            <div className="text-xs text-gray-500">{stat.sub}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
