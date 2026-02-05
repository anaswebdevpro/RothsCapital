import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { Container } from '../ui/Layout';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
    { name: 'Home', href: '/' },
    {
        name: 'Markets',
        href: '#',
        description: 'Trade global financial markets',
        subItems: [
            { name: 'Forex Trading', href: '/markets/forex' },
            { name: 'Stocks', href: '/markets/stocks' },
            { name: 'Metals', href: '/markets/metals' },
            { name: 'Indices', href: '/markets/indices' },
            { name: 'Cryptocurrencies', href: '/markets/crypto' },
        ]
    },
    {
        name: 'Accounts',
        href: '#',
        description: 'Choose the right account for you',
        subItems: [
            { name: 'Standard Account', href: '/accounts/standard' },
            { name: 'Prime Account', href: '/accounts/prime' },
            { name: 'ECN Pro', href: '/accounts/ecn' },
        ]
    },
    {
        name: 'Platforms',
        href: '#',
        description: 'Advanced trading platforms',
        subItems: [
            { name: 'MT5', href: '/platforms/mt5' },
        ]
    },
    {
        name: 'Tools',
        href: '#',
        description: 'Essential trading tools',
        subItems: [
            { name: 'Economic Calendar', href: '/tools/calendar' },
            { name: 'Pip Calculator', href: '/tools/pip-calc' },
        ]
    },
    {
        name: 'Company',
        href: '#',
        description: 'Learn more about us',
        subItems: [
            { name: 'About Us', href: '/company/about-us' },
            { name: 'FAQs', href: '/company/faqs' },
            { name: 'Contact Us', href: '/company/contact-us' },
        ]
    },
    {
        name: 'Partnership',
        href: '#',
        description: 'Partner with us',
        subItems: [
            { name: 'IB Program', href: '/partnership/ib-program' },
        ]
    },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-[#151925] text-white backdrop-blur-md py-1 shadow-sm"
            onMouseLeave={() => setHoveredLink(null)}
        >
            <Container>
                <nav className="flex items-center justify-between relative z-50 ">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 cursor-pointer">
                        <img src="/logo.png" alt="Roths Capitals" className="h-12 md:h-15" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6  lg:space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => setHoveredLink(link.name)}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <Link
                                    to={link.href}
                                    className="flex items-center text-sm lg:text-base font-medium text-white hover:text-primary transition-colors py-4"
                                >
                                    {link.name}
                                    {link.subItems && (
                                        <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                                    )}
                                </Link>

                                {/* Popover Dropdown */}
                                <AnimatePresence>
                                    {hoveredLink === link.name && link.subItems && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 z-50"
                                        >
                                            {/* Arrow */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-t border-l border-gray-200 rotate-45 transform -mb-2 z-10 shadow-sm"></div>

                                            {/* Content */}
                                            <div className="relative bg-background/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 overflow-hidden p-2">
                                                {link.subItems.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                                                        onClick={() => setHoveredLink(null)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" size="md" className="text-white hover:bg-white/10 hover:text-primary">Log In</Button>
                        <Button size="md">Register</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white hover:text-primary"
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
                        className="md:hidden bg-background border-b border-gray-200 overflow-y-auto max-h-[90vh] shadow-lg absolute top-full left-0 right-0 z-50"
                    >
                        <Container className="py-6 space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.name} className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                                    {link.subItems ? (
                                        <details className="group">
                                            <summary className="flex items-center justify-between text-base font-medium text-gray-600 py-2 cursor-pointer list-none">
                                                {link.name}
                                                <ChevronDown size={16} className="text-gray-400 group-open:rotate-180 transition-transform" />
                                            </summary>
                                            <div className="pl-4 py-2 space-y-2 bg-gray-50/50 rounded-md mt-1">
                                                {link.subItems.map(subItem => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.href}
                                                        className="block text-sm text-gray-500 hover:text-primary py-1"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </details>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className="block text-base font-medium text-gray-600 hover:text-primary py-2"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
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
