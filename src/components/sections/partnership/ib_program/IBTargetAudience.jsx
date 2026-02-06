import React from 'react';
import { Container } from '../../../ui/Layout';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ibAudience = [
    "Proprietary Trading Firms",
    "Forex Educators & Coaches",
    "Financial Influencers & Analysts",
    "Trading Communities & Forums",
    "Multi-level Marketing Organizations",
    "Wealth Management Firms"
];

const kolAudience = [
    "Social Media Influencers",
    "Content Creators & Bloggers",
    "Financial Analysts & Experts",
    "Community Leaders & Moderators",
    "Brand Ambassadors"
];

const IBTargetAudience = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                {/* IB Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Who can become our IB?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our Introducing Broker program is suitable for a wide range of professionals and organizations in the financial industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ibAudience.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex items-center relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                                <div className="mr-4 text-primary bg-primary/10 p-2 rounded-full">
                                    <CheckCircle2 size={20} />
                                </div>
                                <span className="font-semibold text-secondary text-lg">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* KOL Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Who can become our KOL?</h2>
                        <p className="text-lg text-gray-600 mb-10">
                            Our KOL program welcomes various types of influencers and content creators in the financial space.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {kolAudience.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex items-center relative overflow-hidden group hover:shadow-md transition-all duration-300"
                                >
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                                    <div className="mr-3 text-primary">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <span className="font-medium text-secondary">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center"
                    >
                        {/* Placeholder for "Two Golden Bulls" illustration */}
                        <img
                            src="/twobulls.png"
                            alt="Two Golden Bulls"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default IBTargetAudience;
