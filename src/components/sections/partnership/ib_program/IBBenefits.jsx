import React from 'react';
import { Container } from '../../../ui/Layout';
import { BadgeDollarSign, Headphones, TrendingUp } from 'lucide-react';

const benefits = [
    {
        icon: <BadgeDollarSign className="w-10 h-10 text-primary" />,
        title: "Attractive Commission Models",
        description: "Choose the structure that suits your style—revenue sharing, rebates per lot traded, or CPA. Your earnings grow as your referred clients stay active."
    },
    {
        icon: <Headphones className="w-10 h-10 text-primary" />,
        title: "Dedicated Support",
        description: "Gain access to a powerful IB dashboard, personalized marketing materials, and a dedicated account manager to help you succeed."
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-primary" />,
        title: "Scalable Income",
        description: "Whether you're an individual or a large network, your earning potential scales with your performance. Benefit from multi-tiered referral commissions."
    }
];

const IBBenefits = () => {
    return (
        <section className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Partner with Us?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">We provide the tools, conditions, and support you need to build a profitable business.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:translate-y-[-10px] transition-transform duration-300">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default IBBenefits;
