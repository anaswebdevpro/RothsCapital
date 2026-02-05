import React from 'react';
import { Container } from '../../../ui/Layout';
import Button from '../../../ui/Button';
import { Headphones, Mail } from 'lucide-react';

const FAQCTA = () => {
    return (
        <section className="py-24 bg-gray-50">
            <Container className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                    Can't find the answer you're looking for? Our support team is here to help you 24/7.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                    <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-left min-w-[280px]">
                        <div className="bg-primary/10 p-4 rounded-full text-primary">
                            <Headphones className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 font-medium">Call Us 24/7</div>
                            <div className="text-lg font-bold text-gray-900">+386 1 777 0397</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-left min-w-[280px]">
                        <div className="bg-primary/10 p-4 rounded-full text-primary">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 font-medium">Email Support</div>
                            <div className="text-lg font-bold text-gray-900">support@Roths Capitals.com</div>
                        </div>
                    </div>
                </div>

                <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-bold px-10">
                    Contact Support
                </Button>
            </Container>
        </section>
    );
};

export default FAQCTA;
