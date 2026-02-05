import React from 'react';
import { Container } from '../../../ui/Layout';
import { Globe, CreditCard, Zap, ShieldCheck } from 'lucide-react';

const AboutFeatures = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Super-Fast Global Market Access</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Trade confidently in global markets with powerful insights, real-time analytics, and deep liquidity across all major asset classes. Experience seamless, lightning-fast execution wherever you are, backed by our state-of-the-art trading infrastructure.
                        </p>
                        <p className="text-gray-600 leading-relaxed border-l-4 border-primary pl-4">
                            Our global network ensures you have access to markets 24/5 with competitive spreads and institutional-grade execution speed.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-secondary">
                            <CreditCard className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Seamless Transactions</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We provide multiple secure payment options to ensure fast and reliable deposits and withdrawals for our clients worldwide.
                        </p>
                        <ul className="space-y-4 mt-6">
                            <li className="flex items-center gap-3">
                                <Zap className="w-5 h-5 text-primary" />
                                <span className="text-gray-700 font-medium">Instant Deposits</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                <span className="text-gray-700 font-medium">Secure Payment Gateways</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Globe className="w-5 h-5 text-primary" />
                                <span className="text-gray-700 font-medium">Multi-Currency Support</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutFeatures;
