import React from 'react';
import { Container } from '../../../ui/Layout';
import { Users, Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutInfo = () => {
    return (
        <section className="py-24 bg-gray-50">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">Who We Are</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">Established By Experts</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Roths Capital are people who are not just traders themselves, but people who have been in the finance sector for so long that they bring with them a wealth of valuable knowledge and insights.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At Roths Capital, we have a deep understanding that fast execution and low latency are interlinked with creating a quality trading experience, so we have invested in the most cutting-edge technology available.
                            </p>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6 mt-12">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                                >
                                    <Users className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900">Expert Team</h3>
                                    <p className="text-gray-500 mt-2 text-sm">Founded by industry veterans with decades of experience.</p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                                >
                                    <Briefcase className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900">Client Focused</h3>
                                    <p className="text-gray-500 mt-2 text-sm">Tailored solutions for traders of all levels.</p>
                                </motion.div>
                            </div>
                            <div className="space-y-6">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-secondary p-6 rounded-2xl shadow-lg border border-gray-800"
                                >
                                    <div className="text-4xl font-bold text-primary mb-2">10+</div>
                                    <p className="text-gray-300 font-medium">Years of Experience</p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                                >
                                    <TrendingUp className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900">Technology</h3>
                                    <p className="text-gray-500 mt-2 text-sm">State-of-the-art infrastructure for low latency.</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutInfo;
