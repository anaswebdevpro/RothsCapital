import React from 'react';
import { Container } from '../../../ui/Layout';
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Identify Key Events",
        description: "Look for high-impact events marked in red. These include interest rate decisions, GDP reports, and employment data that significantly move markets."
    },
    {
        number: "02",
        title: "Analyze Expectations",
        description: "Compare actual data releases with forecasted values. Markets price in expectations, so surprises create the best trading opportunities."
    },
    {
        number: "03",
        title: "Plan Your Strategy",
        description: "Schedule your trading around important events. Avoid opening new positions right before major announcements to prevent unexpected volatility."
    }
];

const CalendarGuide = () => {
    return (
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37] opacity-5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500 opacity-5 rounded-full blur-[80px] pointer-events-none"></div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                How to Use the <br />
                                <span className="text-[#D4AF37]">Economic Calendar</span>
                            </h2>
                            <p className="text-lg text-gray-300 max-w-xl mb-12">
                                Follow these steps to maximize your trading potential with our Economic Calendar.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-6"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="text-5xl font-black text-[#D4AF37] opacity-50">
                                            {step.number}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <motion.img
                                src="/cta-img.png"
                                alt="Trading Guide"
                                className="w-full h-auto"
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Floating Badge */}
                            {/* <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs animate-bounce-slow hidden xl:block">
                                <div className="text-secondary font-bold text-lg mb-1">Stay Ahead</div>
                                <div className="text-gray-500 text-sm">Monitor market volatility in real-time.</div>
                            </div> */}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CalendarGuide;
