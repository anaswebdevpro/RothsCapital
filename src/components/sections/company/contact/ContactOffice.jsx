import React from 'react';
import { Container } from '../../../ui/Layout';
import { MapPin, Clock, Phone } from 'lucide-react';

const ContactOffice = () => {
    return (
        <section className="py-24 bg-gray-50">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Headquarters</h2>
                        <p className="text-lg text-gray-600 mb-10">
                            Visit our state-of-the-art trading facility for premium in-person service. We are located in the heart of the financial district.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-white p-3 rounded-lg shadow-sm h-min">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Location</h3>
                                    <p className="text-gray-600">
                                        Merab Kostava Street 33,<br />
                                        N23 0171 Tbilisi, Georgia
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 bg-white p-3 rounded-lg shadow-sm h-min">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Operating Hours</h3>
                                    <p className="text-gray-600">
                                        Monday - Friday: 8:30 AM - 7:00 PM<br />
                                        Saturday: 9:00 AM - 5:00 PM<br />
                                        Sunday: Emergency Support Only
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 bg-white p-3 rounded-lg shadow-sm h-min">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Contact</h3>
                                    <p className="text-gray-600 mb-2">
                                        For appointments and urgent consultations:
                                    </p>
                                    <a href="tel:+38617770397" className="text-lg font-bold text-secondary hover:text-primary transition-colors">
                                        +386 1 777 0397
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-300 relative">
                        {/* Placeholder Map - In production use Google Maps iframe */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                <span className="text-xl font-semibold">Interactive Map Loading...</span>
                            </div>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.2974418659556!2d44.77626631567688!3d41.71424197923565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472d4fa555555%3A0x1a8c6b8c8c8c8c8c!2sMerab%20Kostava%20St%2C%20T'bilisi%2C%20Georgia!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Office Location"
                            className="absolute inset-0 opacity-80 hover:opacity-100 transition-opacity"
                        ></iframe>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactOffice;
