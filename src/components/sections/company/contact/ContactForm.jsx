import React from 'react';
import { Container } from '../../../ui/Layout';
import Button from '../../../ui/Button';

const ContactForm = () => {
    return (
        <section className="py-24 bg-white">
            <Container maxW="3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                    <p className="text-gray-600">
                        Have a specific question? Fill out the form below and our team will get back to you shortly.
                    </p>
                </div>

                <form className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                            <option>General Inquiry</option>
                            <option>Account Support</option>
                            <option>Technical Issue</option>
                            <option>Partnership</option>
                        </select>
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                    </div>

                    <div className="text-center">
                        <Button size="lg" className="w-full md:w-auto px-12 bg-secondary text-white hover:bg-secondary/90 font-bold">
                            Submit Message
                        </Button>
                    </div>
                </form>
            </Container>
        </section>
    );
};

export default ContactForm;
