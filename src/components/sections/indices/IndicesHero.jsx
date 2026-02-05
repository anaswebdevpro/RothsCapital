import React from 'react';
import { Container } from '../../ui/Layout';
import Button from '../../ui/Button';
import { motion } from 'framer-motion';

const IndicesHero = () => {
    return (
        <section className="relative w-full py-20 md:py-32 bg-secondary overflow-hidden text-white" style={{ backgroundImage: 'url(/forex_banner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-secondary/80"></div>

            <Container className="relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase"
                >
                    Indices Trading
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                >
                    Trade S&P 500, NASDAQ, FTSE 100, DAX 40 and other global stock indices with tight spreads, high leverage, and institutional-grade execution.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="w-full sm:w-auto px-8 bg-gold-gradient hover:brightness-110 border-none text-secondary font-bold">START TRADING INDICES</Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 border-white text-white hover:bg-white/10 hover:text-white">Open Demo Account</Button>
                </motion.div>
            </Container>
        </section>
    );
};

export default IndicesHero;
