import React from 'react';
import { Container } from '../../ui/Layout';
import Button from '../../ui/Button';

const IndicesCTA = () => {
    return (
        <section className="py-24 bg-gold-gradient relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <Container className="relative z-10 text-center text-secondary">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Master Global Markets?</h2>
                <p className="text-xl text-secondary/80 max-w-2xl mx-auto mb-10">
                    Join thousands of successful indices traders who trust Roths Capital for premium trading conditions and expert support.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 border-none font-bold px-10">
                        Open Indices Account
                    </Button>
                    <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-10">
                        Try Indices Demo
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default IndicesCTA;
