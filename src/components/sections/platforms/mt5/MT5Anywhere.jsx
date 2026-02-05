import React from 'react';
import { Container } from '../../../ui/Layout';
import { Apple, Play } from 'lucide-react';

const MT5Anywhere = () => {
    return (
        <section className="py-24 bg-white relative">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <div className="relative">
                            {/* Device Mockup Groups */}
                            <div className="flex justify-center items-end gap-2">
                                <div className="w-64 md:w-80 h-40 md:h-56 bg-gray-100 rounded-t-xl border-t-8 border-x-8 border-gray-800 shadow-xl flex items-center justify-center">
                                    <span className="text-gray-400">Desktop</span>
                                </div>
                            </div>
                            {/* Overlaid Phones */}
                            <div className="absolute bottom-0 -right-4 md:-right-8 w-20 md:w-28 h-32 md:h-44 bg-gray-800 rounded-xl border-4 border-gray-900 shadow-2xl skew-y-6"></div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Trade Anywhere, Anytime</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our MT5 platform is available across all devices. Start trading on your desktop within the comfort of your office and continue on your mobile while you're on the move.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <button className="flex items-center gap-3 bg-black text-white px-5 py-2 rounded-lg hover:opacity-80 transition-opacity">
                                <Apple className="w-8 h-8" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase">Download on the</div>
                                    <div className="text-lg font-bold leading-none">App Store</div>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 bg-black text-white px-5 py-2 rounded-lg hover:opacity-80 transition-opacity">
                                <Play className="w-7 h-7 fill-current" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase">Get it on</div>
                                    <div className="text-lg font-bold leading-none">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MT5Anywhere;
