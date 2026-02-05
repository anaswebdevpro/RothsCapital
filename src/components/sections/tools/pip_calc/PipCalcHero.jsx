import React from 'react';
import { Container } from '../../../ui/Layout';
import { motion } from 'framer-motion';

const PipCalcHero = () => {
    return (
        <section className="relative w-full py-20 md:py-32 bg-secondary overflow-hidden text-white" style={{ backgroundImage: 'url(/bg-7.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-secondary/80"></div>

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-3 py-1 bg-white/10 text-white/90 text-xs font-bold rounded-full mb-6 tracking-wide uppercase"
                >
                    Risk Management
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase"
                >
                    Pip Calculator
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                >
                    Accurately calculate pip values for your trades to better manage risk and potential returns.
                </motion.p>
            </Container>
        </section>
    );
};

export default PipCalcHero;
