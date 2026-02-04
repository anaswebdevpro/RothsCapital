import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { Container } from '../ui/Layout';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Markets', href: '/markets' },
    { name: 'Accounts', href: '/accounts' },
    { name: 'Tools', href: '/tools' },
    { name: 'Company', href: '/company' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-gray-200 py-1 shadow-sm"
        >
            <Container>
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 cursor-pointer">
                        <img src="/logo.png" alt="Roths Capitals" className="h-12 md:h-16" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-lg font-medium text-gray-600 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" size="md" className="text-gray-700 hover:bg-gray-100">Log In</Button>
                        <Button size="md">Register</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-600 hover:text-secondary"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-gray-200 overflow-hidden shadow-lg"
                    >
                        <Container className="py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="block text-base font-medium text-gray-600 hover:text-primary"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col space-y-3">
                                <Button variant="outline" className="w-full justify-center">Log In</Button>
                                <Button className="w-full justify-center">Register</Button>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
