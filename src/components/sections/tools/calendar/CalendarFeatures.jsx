import React from 'react';
import { Container } from '../../../ui/Layout';
import { Bell, Filter, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Bell,
        title: "Real-time Updates",
        description: "Get instant notifications on market-moving events as they happen. Never miss an important economic release again."
    },
    {
        icon: Filter,
        title: "Advanced Filtering",
        description: "Filter events by country, impact level, or asset class. Customize the calendar to show only what matters to your trading strategy."
    },
    {
        icon: BarChart2,
        title: "Market Analysis",
        description: "Historical data and market expectations help you analyze potential market reactions before they happen."
    }
];

const CalendarFeatures = () => {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Powerful Features for <span className="text-[#D4AF37]">Smart Trading</span></h2>
                    <p className="text-lg text-gray-600">
                        Designed with traders in mind, our Economic Calendar offers everything you need to stay informed and make better trading decisions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-white shadow-lg shadow-gray-200/50 border border-transparent hover:border-[#D4AF37]/30 hover:shadow-xl transition-all group"
                        >
                            <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon size={28} className="text-[#D4AF37]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default CalendarFeatures;
