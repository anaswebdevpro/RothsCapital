import React from 'react';
import { Container } from '../../../ui/Layout';
import { motion } from 'framer-motion';
import Button from '../../../ui/Button';


const PipCalcHero = () => {
    return (
        <section className="relative w-full py-20 md:py-32 bg-secondary overflow-hidden text-white" style={{ backgroundImage: 'url(/bg-7.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-secondary/40"></div>

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-bold rounded-full mb-6 tracking-wide uppercase"
                >
                    Risk Management
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase"
                >
                    Precision Pip Calculator
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                >
                    Accurately calculate pip values and effectively manage your risk exposure in real-time.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="w-full sm:w-auto px-10 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-secondary font-bold hover:brightness-110 border-none">
                        Start Trading Now
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 border-white text-white hover:bg-white hover:text-secondary">
                        Try Demo Account
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
};


export default PipCalcHero;
