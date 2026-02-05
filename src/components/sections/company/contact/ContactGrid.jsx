import React from 'react';
import { Container } from '../../../ui/Layout';
import { MessageCircle, MessageSquare, Mail, Phone, ArrowRight } from 'lucide-react';
import Button from '../../../ui/Button';

const contactMethods = [
    {
        icon: <MessageCircle className="w-8 h-8 text-green-500" />,
        title: "WhatsApp Business",
        description: "Instant messaging for quick queries, account support, and trading assistance. Available 24/7.",
        action: "Start Chat",
        link: "#whatsapp"
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
        title: "Live Chat Support",
        description: "Real-time assistance directly on our platform. Get immediate help with trading or technical issues.",
        action: "Launch Chat",
        link: "#chat"
    },
    {
        icon: <Mail className="w-8 h-8 text-secondary" />,
        title: "Email Support",
        description: "For detailed inquiries, document submissions, and comprehensive support. We respond within 24 hours.",
        action: "Send Email",
        link: "mailto:support@rothscapital.com"
    },
    {
        icon: <Phone className="w-8 h-8 text-red-500" />,
        title: "24/7 Emergency Line",
        description: "Available around the clock for critical trading issues, account emergencies, and urgent help.",
        action: "Call Now",
        link: "tel:+38617770397"
    }
];

const ContactGrid = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactMethods.map((method, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                                {method.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                            <p className="text-gray-600 text-sm mb-8 flex-grow">{method.description}</p>

                            <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-white hover:border-primary hover:text-primary group">
                                <span className="mr-2">{method.action}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ContactGrid;
