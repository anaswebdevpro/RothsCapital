import React from 'react';
import { Container } from '../../ui/Layout';
import Button from '../../ui/Button';
import { motion } from 'framer-motion';

const ForexHero = () => {
    return (
        <section className="relative w-full py-20 md:py-32 overflow-hidden min-h-screen flex items-center text-white" style={{ backgroundImage: 'url(/forex_banner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>


            <Container className="relative z-10 text-center border-2 border-white  py-10 bg-[#6C542F] max-w-3xl rounded-xl text-secondary">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl text-white font-bold mb-6 tracking-tight"
                >
                    FOREX TRADING
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white"
                >
                    Trade the world's largest financial market with tight spreads, high leverage, and institutional-grade execution.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className=" text-white hover:bg-secondary/90 border-none font-bold px-10">
                            Open Forex Account
                        </Button>
                        <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary bg-white hover:text-white px-10">
                            Try Forex Demo
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default ForexHero;
