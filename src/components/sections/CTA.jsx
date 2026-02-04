import React from 'react';
import { Container } from '../ui/Layout';
import Button from '../ui/Button';

export default function CTA() {
    return (
        <div className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background to-surface z-0" />

            <Container className="relative z-10">
                <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">

                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">
                            Ready to start your <br />
                            <span className="text-primary">Trading Journey?</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-xl">
                            Join thousands of traders who have already chosen Roths Capitals as their preferred broker. Fast, secure, and reliable.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg">Open Live Account</Button>
                            <Button size="lg" variant="outline">Open Demo Account</Button>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-md lg:max-w-full relative">
                        <div className="relative z-10">
                            <img
                                src="/cta-img.png"
                                alt="Mobile Trading"
                                className="w-full drop-shadow-2xl"
                            />
                        </div>
                        {/* Glow behind phone */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/40 rounded-full blur-[80px] -z-10" />
                    </div>

                </div>
            </Container>
        </div>
    );
}
