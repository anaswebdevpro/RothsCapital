import React from 'react';
import { Container } from '../../../ui/Layout';
import Button from '../../../ui/Button';

const CalendarCTA = () => {
    return (
        <section className=" bg-white">
           
                <div className="bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">Ready to Trade with Confidence?</h2>
                        <p className="text-lg md:text-xl text-secondary/80 mb-10 max-w-2xl mx-auto">
                            Join thousands of successful traders who use our Economic Calendar to stay ahead of the markets. Start your trading journey today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="w-full sm:w-auto px-12 bg-secondary text-white hover:bg-secondary/90 font-bold border-none">
                                Open Live Account
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto px-12 border-secondary text-secondary hover:bg-secondary hover:text-white">
                                Try Demo Account
                            </Button>
                        </div>
                    </div>
                </div>
       
        </section>
    );
};

export default CalendarCTA;
