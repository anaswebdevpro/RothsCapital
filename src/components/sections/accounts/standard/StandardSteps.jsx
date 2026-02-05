import React from 'react';

import { UserPlus, Wallet, TrendingUp } from 'lucide-react';
import { Container } from '../../../ui/Layout';
import Button from '../../../ui/Button';    


const steps = [
    {
        icon: <UserPlus className="w-12 h-12 text-primary" />,
        title: "Register",
        description: "Complete the Registration Process to Create your Account",
        step: "01"
    },
    {
        icon: <Wallet className="w-12 h-12 text-primary" />,
        title: "Deposit",
        description: "Login to your Live Account and Add Funds (Min $50)",
        step: "02"
    },
    {
        icon: <TrendingUp className="w-12 h-12 text-primary" />,
        title: "Trade",
        description: "Access the Global Financial Markets Through our Online Trading Platform",
        step: "03"
    }
];

const StandardSteps = () => {
    return (
        <section className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Start Trading in 3 Simple Steps</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">We've made it easy for you to start your trading journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center relative z-0">
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black text-primary font-sans">{step.step}</div>
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-bold px-10">Get Started Now</Button>
                </div>
            </Container>
        </section>
    );
};

export default StandardSteps;
