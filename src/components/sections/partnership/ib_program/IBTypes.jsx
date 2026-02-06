import React from 'react';
import { Container } from '../../../ui/Layout';
import { Briefcase, Users, ArrowRight } from 'lucide-react';
import Button from '../../../ui/Button';
import { motion } from 'framer-motion';

const IBTypes = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* IB Program */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-primary/10"></div>

                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 text-primary relative z-10">
                            <Briefcase className="w-8 h-8" />
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">Introducing Broker (IB)</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed relative z-10 min-h-[80px]">
                            Designed to offer individuals and corporate clients an opportunity to earn ongoing rebates from their clients' trading activities.
                        </p>

                        <div className="space-y-4 mb-8 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-gray-700 font-medium">Advanced Reporting Tools</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-gray-700 font-medium">Daily Payouts</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-gray-700 font-medium">Marketing Support</span>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <Button className="w-full sm:w-auto bg-secondary text-white hover:bg-secondary/90">
                                Become Our IB <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* KOL Program */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-3xl p-10 border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-secondary/10"></div>

                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shadow-sm mb-8 text-secondary relative z-10">
                            <Users className="w-8 h-8" />
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4 relative z-10">Key Opinion Leader (KOL)</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed relative z-10 min-h-[80px]">
                            Designed for influencers, our KOL Program lets you earn commissions by promoting our services and sharing valuable trading insights.
                        </p>

                        <div className="space-y-4 mb-8 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                <span className="text-gray-700 font-medium">Tailored Commission Structures</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                <span className="text-gray-700 font-medium">Exclusive Promotional Content</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                <span className="text-gray-700 font-medium">Dedicated Account Strategy</span>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <Button variant="outline" className="w-full sm:w-auto border-gray-300 text-gray-700 hover:border-secondary hover:text-secondary">
                                Become a KOL <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default IBTypes;
