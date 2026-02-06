import React from 'react';
import { Container } from '../../../ui/Layout';
import { motion } from 'framer-motion';
import Button from '../../../ui/Button';

const IBHero = () => {
    return (
        <section className="relative w-full py-20 md:py-32 bg-secondary overflow-hidden text-white" style={{ backgroundImage: 'url(/forex_banner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-secondary/80"></div>

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-3 py-1 bg-white/10 text-white/90 text-xs font-bold rounded-full mb-6 tracking-wide uppercase"
                >
                    Partnership
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase"
                >
                    Roths Capitals <span className="text-primary">Partner Program</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                >
                    Partner with us and grow your earnings as an Introducing Broker or Key Opinion Leader.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <Button size="lg" className="px-8 bg-gold-gradient hover:brightness-110 border-none text-secondary font-bold">
                        Become Our IB
                    </Button>
                    <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-secondary font-bold">
                        Become Our KOL
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
};

export default IBHero;
