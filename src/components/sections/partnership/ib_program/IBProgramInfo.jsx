import React from 'react';
import { Container } from '../../../ui/Layout';
import Button from '../../../ui/Button';
import { motion } from 'framer-motion';

const IBProgramInfo = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-primary">Roths Capitals</span> <span className="text-secondary">IB Program</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Join an award-winning introducing broker program and benefit from the optimal rebates and commissions in the financial markets. Our IB program is designed to help you maximize your earnings while providing exceptional service to your clients.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="px-8 bg-gold-gradient hover:brightness-110 border-none text-secondary font-bold">
                                Become Our IB
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 border-gray-300 text-secondary hover:border-primary hover:text-primary font-bold bg-transparent">
                                Download Our IB Guide
                            </Button>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <img
                            src="/Levels-1.png"
                            alt="Roths Capitals IB Program"
                            className="w-full max-w-lg object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default IBProgramInfo;
