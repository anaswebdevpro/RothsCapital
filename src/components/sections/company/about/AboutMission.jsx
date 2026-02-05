import React from 'react';
import { Container } from '../../../ui/Layout';
import { Target, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutMission = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-secondary">
                            <Target className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                        <h3 className="text-lg font-semibold text-primary mb-6">Paving Way for Global Investors</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our vision is to transform the landscape of online trading by building a trusted, global trading ecosystem where innovation meets opportunity. We strive to create a platform that not only meets the evolving needs of traders but also sets the industry standard for excellence. By fostering a culture of continuous learning and innovation, we envision a future where every trader can achieve financial independence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary p-10 rounded-3xl border border-gray-800 hover:shadow-xl transition-shadow duration-300 text-white"
                    >
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
                            <Lightbulb className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                        <h3 className="text-lg font-semibold text-primary mb-6">Empowering the Investors</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Our mission is to empower traders of all levels by providing innovative tools, educational resources, and market insights that enable them to make informed trading decisions. We are committed to delivering a seamless and secure trading experience, helping our users to achieve their financial goals through responsible and strategic trading.
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default AboutMission;
