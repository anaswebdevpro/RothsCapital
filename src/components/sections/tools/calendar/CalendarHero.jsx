import React from 'react';
import { Container } from '../../../ui/Layout';
import { motion } from 'framer-motion';
import Button from '../../../ui/Button';

const CalendarHero = () => {
    return (
        <section className="relative w-full py-20 md:py-32 bg-secondary overflow-hidden text-white min-h-[500px] flex justify-center items-center" style={{ backgroundImage: 'url(/EconomicCalender.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-secondary/40"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0F172A_100%)] opacity-50"></div>

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-bold rounded-full mb-6 tracking-wide uppercase"
                >
                    Live Economic Data
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-6 tracking-tight capitalize"
                >
                    Plan Your Trades  <br />
                    <span className="bg-gradient-to-t from-white to-[#D4AF37] bg-clip-text text-transparent">
    Economic Calendar
</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                >
                    Track key economic data releases in real-time with our interactive calendar, ensuring you have the latest information for informed and timely forex trading decisions.
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

export default CalendarHero;
