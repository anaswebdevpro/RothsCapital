import React from 'react';
import { Container } from '../../../ui/Layout';
import Button from '../../../ui/Button';
import { motion } from 'framer-motion';

const MT5Hero = () => {
    return (
        <section className="relative w-full py-5 md:py-10 bg-gray-50 overflow-hidden min-h-screen flex items-start" style={{ backgroundImage: 'url(/bg-6.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Container className="relative z-10 flex flex-col md:flex-row items-center  gap-12">
                <div className="flex-1 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-3 py-1 bg-yellow-400/10 text-yellow-600 text-xs font-bold rounded-full mb-6 tracking-wide"
                    >
                        PREMIUM TRADING PLATFORM
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight"
                    >
                        Trade Smarter with <span className="text-secondary">MetaTrader 5</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 mb-8 max-w-xl"
                    >
                        The world's #1 multi-asset platform. Trade Forex, Stocks, and Futures from a single interface with advanced analysis tools.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button size="lg" className="px-8 bg-gold-gradient hover:brightness-110 border-none text-secondary font-bold shadow-lg shadow-yellow-500/20">
                            Download MT5
                        </Button>
                        <Button variant="outline" size="lg" className="px-8 border-gray-300 text-gray-700 hover:bg-gray-50">
                            Open Live Account
                        </Button>
                    </motion.div>
                </div>

                <div className="flex-1 relative">
                    {/* Placeholder for Hero Image - representing the platform interface */}
                    <div className="relative z-10">
                        <img
                            src="/mt5phone.png"
                            alt="MetaTrader 5 Platform"
                            className="rounded-lg border border-gray-100 w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = '<div class="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">Platform Preview Image</div>';
                            }}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MT5Hero;
