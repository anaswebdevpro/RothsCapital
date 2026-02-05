import React, { useState } from 'react';
import { Container } from '../../../ui/Layout';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "How do I open an account?",
        answer: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Click the 'Open Account' button on our website</li>
                <li>Fill in your personal details in the registration form</li>
                <li>Verify your email address and phone number</li>
                <li>Complete the identity verification process (KYC)</li>
                <li>Make your first deposit and start trading</li>
            </ul>
        )
    },
    {
        question: "What documents are required for verification?",
        answer: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-bold mb-1">Proof of Identity:</h4>
                    <p>Passport, National ID, or Driver's License</p>
                </div>
                <div>
                    <h4 className="font-bold mb-1">Proof of Address:</h4>
                    <p>Utility bill, bank statement, or government-issued document (not older than 3 months)</p>
                </div>
                <div>
                    <h4 className="font-bold mb-1">Proof of Payment:</h4>
                    <p>Copy of credit/debit card (first 6 and last 4 digits visible) or bank statement showing your name</p>
                </div>
            </div>
        )
    },
    {
        question: "What trading platforms do you offer?",
        answer: (
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>MetaTrader 5 (MT5):</strong> Advanced platform with superior charting tools and automated trading capabilities</li>
                <li><strong>WebTrader:</strong> Browser-based platform accessible from any device without installation</li>
                <li><strong>Mobile App:</strong> Full-featured trading app for iOS and Android</li>
                <li><strong>Desktop Platform:</strong> Windows and macOS applications with advanced features</li>
            </ul>
        )
    },
    {
        question: "What are the trading hours?",
        answer: (
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Forex:</strong> 24/5 (Sunday 10 PM GMT to Friday 10 PM GMT)</li>
                <li><strong>Indices:</strong> Vary by market (typically 8 AM - 4:30 PM local time)</li>
                <li><strong>Commodities:</strong> Most trade 24/5 with specific maintenance periods</li>
                <li><strong>Cryptocurrencies:</strong> 24/7 trading available</li>
            </ul>
        )
    },
    {
        question: "What payment methods do you accept?",
        answer: (
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Credit/Debit Cards:</strong> Visa, Mastercard, Maestro (instant processing)</li>
                <li><strong>Bank Wire Transfer:</strong> Direct bank transfers (1-3 business days)</li>
                <li><strong>E-Wallets:</strong> Skrill, Neteller, PayPal, and others (instant processing)</li>
                <li><strong>Crypto:</strong> Bitcoin, Ethereum, USDT (instant processing)</li>
            </ul>
        )
    },
    {
        question: "How long do withdrawals take?",
        answer: (
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>E-Wallets:</strong> 0-24 hours (usually instant)</li>
                <li><strong>Credit/Debit Cards:</strong> 1-3 business days</li>
                <li><strong>Bank Wire:</strong> 2-5 business days</li>
                <li><strong>Crypto:</strong> 0-24 hours (usually within 1 hour)</li>
            </ul>
        )
    },
    {
        question: "Do you support automated trading?",
        answer: (
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Expert Advisors (EAs):</strong> Run automated strategies on MT5</li>
                <li><strong>API Access:</strong> Connect your custom trading algorithms</li>
                <li><strong>Copy Trading:</strong> Automatically copy successful traders</li>
                <li><strong>Social Trading:</strong> Follow and replicate trading signals</li>
            </ul>
        )
    },
    {
        question: "Do you offer a demo account?",
        answer: (
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Virtual Funds:</strong> $10,000 in virtual money to practice</li>
                <li><strong>Full Platform Access:</strong> All features of our live platforms</li>
                <li><strong>Real Market Data:</strong> Live prices and market conditions</li>
                <li><strong>No Risk:</strong> Perfect for testing strategies with no time limit</li>
            </ul>
        )
    }
];

const FAQList = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-20 bg-white">
            <Container maxW="4xl">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                            >
                                <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50/50 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FAQList;
