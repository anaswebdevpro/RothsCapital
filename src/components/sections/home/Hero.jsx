import React from 'react';
import { Container } from '../../ui/Layout';
import Button from '../../ui/Button';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex flex-col pt-12 overflow-hidden bg-secondary">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/heroBanner.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary z-10" />
            </div>

            <Container className="relative z-20 flex flex-col flex-grow items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 max-w-5xl mx-auto flex-grow flex flex-col justify-center mt-10"
                >
                    {/* Tagline */}
                    <div>
                        <div className="inline-block border border-[#D4AF37] px-6 py-2 rounded-full bg-black/20 backdrop-blur-sm">
                            <span className="text-[#D4AF37] font-semibold text-xs tracking-[0.15em] uppercase">
                                MANAGE MARKETS WITH INTEGRITY AND CONFIDENCE
                            </span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-bold leading-tight text-white tracking-wide">
                        CONNECTING THE WORLD ONE <br />
                        <span className="text-[#D4AF37]">
                            TRADER AT A TIME
                        </span>
                    </h1>

                    {/* Sub-heading */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-3xl text-gray-200 font-medium tracking-wide">
                            Your Gateway to Roths Capitals
                        </h2>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                            Use a real broker to trade stocks, Forex, indices, metals, cryptocurrencies, and raw spreads with <br className="hidden md:block" /> competitive pricing and lightning-fast execution.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2">
                        <Button
                            className="w-full sm:w-auto px-10 py-4 h-auto text-sm md:text-base font-bold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#b0852d] text-white rounded-md"
                        >
                            Get Started
                        </Button>
                        <Button
                            variant="custom"
                            className="w-full sm:w-auto px-10 py-4 h-auto text-sm md:text-base font-bold uppercase tracking-wider bg-white hover:bg-gray-100 text-secondary border-none rounded-md"
                        >
                            Open Demo Account
                        </Button>
                    </div>
                </motion.div>

                {/* Laptop Image */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-auto w-full max-w-5xl mx-auto relative px-4 origin-bottom cursor-pointer"
                >
                    <div className="relative z-10">
                        <img
                            src="/laptop.png"
                            alt="Trading Platform"
                            className="w-full drop-shadow-2xl translate-y-2 md:translate-y-4"
                        />
                    </div>
                    {/* Decorative Glow behind laptop */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 rounded-full blur-[120px] -z-10" />
                </motion.div>
            </Container>
        </div>
    );
}
