import React from 'react';
import { Section, Container } from '../ui/Layout';
import { UserPlus, FileCheck, CreditCard, TrendingUp } from 'lucide-react';

const steps = [
    {
        icon: UserPlus,
        title: 'Register',
        desc: 'Sign up for a trading account in minutes.',
    },
    {
        icon: FileCheck,
        title: 'Verify',
        desc: 'Complete your profile and verify your identity.',
    },
    {
        icon: CreditCard,
        title: 'Fund',
        desc: 'Deposit funds securely using our wide range of methods.',
    },
    {
        icon: TrendingUp,
        title: 'Trade',
        desc: 'Access 500+ markets on MT5 and start trading.',
    },
];

export default function Steps() {
    return (
        <Section className="bg-background">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">
                        Start Trading in <span className="text-primary">4 Easy Steps</span>
                    </h2>
                    <p className="text-gray-600">
                        Your journey to financial freedom begins here.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                                <div className="w-24 h-24 rounded-full bg-surface border-4 border-background flex items-center justify-center mb-6 group-hover:border-primary transition-colors duration-300 shadow-xl shadow-primary/10">
                                    <step.icon size={32} className="text-gray-600 group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
