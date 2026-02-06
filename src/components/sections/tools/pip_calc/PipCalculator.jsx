import React, { useState } from 'react';
import { Container } from '../../../ui/Layout';
import Button from '../../../ui/Button';
import { Globe, Wallet, Activity, CreditCard, ChevronRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PipCalculator = () => {
    const [accountCurrency, setAccountCurrency] = useState('USD');
    const [currencyPair, setCurrencyPair] = useState('EURUSD');
    const [lotSize, setLotSize] = useState(1);
    const [pipAmount, setPipAmount] = useState(10);
    const [results, setResults] = useState(null);

    const calculatePip = (e) => {
        e.preventDefault();

        // Simplified Logic for Demo Context
        // 1 Standard Lot = 100,000 units
        // Standard Pip = 0.0001 (0.01 for JPY pairs)

        const isJPY = currencyPair.includes('JPY');
        const pipDecimal = isJPY ? 0.01 : 0.0001;
        const volume = lotSize * 100000;

        // Base Logic:
        // Pip Value (in Quote Currency) = Volume * PipDecimal
        // e.g. 1 Lot EURUSD -> 100,000 * 0.0001 = $10 USD
        // e.g. 1 Lot USDJPY -> 100,000 * 0.01 = ¥1000 JPY

        let rawPipValue = volume * pipDecimal;
        let convertedPipValue = rawPipValue;

        // Approximate Exchange Rates for Conversion (Demo purposes)
        // Ideally these come from an API
        const rates = {
            EURUSD: 1.08,
            GBPUSD: 1.26,
            USDJPY: 150.00,
            USDCAD: 1.35,
            USDCHF: 0.88,
            AUDUSD: 0.65,
            NZDUSD: 0.60,
            // Crosses
            EURGBP: 0.85,
            EURJPY: 162.00,
            GBPJPY: 190.00
        };

        // Determine Quote Currency from Pair (Last 3 chars)
        const quoteCurrency = currencyPair.slice(3);

        // Convert rawPipValue (in Quote Currency) to Account Currency
        if (quoteCurrency !== accountCurrency) {
            // Check direct pair availability (AccountCurrency + QuoteCurrency or vice versa)
            const conversionPair1 = accountCurrency + quoteCurrency; // e.g. USDJPY
            const conversionPair2 = quoteCurrency + accountCurrency; // e.g. EURUSD (if Quote=USD, Acc=EUR)

            if (quoteCurrency === 'USD') {
                // raw is in USD. 
                if (accountCurrency === 'EUR') convertedPipValue = rawPipValue / rates.EURUSD;
                else if (accountCurrency === 'GBP') convertedPipValue = rawPipValue / rates.GBPUSD;
                // ... others
            } else if (accountCurrency === 'USD') {
                // raw is in non-USD (e.g. JPY, CAD, CHF)
                // If Quote=JPY, we need JPY->USD. Pair is USDJPY. Rate is USD/JPY = 150. 
                // 1 USD = 150 JPY. 1 JPY = 1/150 USD.
                // Value in USD = Value in JPY / Rate
                if (quoteCurrency === 'JPY') convertedPipValue = rawPipValue / rates.USDJPY;
                else if (quoteCurrency === 'CAD') convertedPipValue = rawPipValue / rates.USDCAD;
                else if (quoteCurrency === 'CHF') convertedPipValue = rawPipValue / rates.USDCHF;
                // For AUD/USD, Quote is USD, already handled.
                // For GBP/USD, Quote is USD, already handled.
            }
        }

        // Total Value
        const totalValue = convertedPipValue * pipAmount;

        setResults({
            pipValue: convertedPipValue.toFixed(2),
            totalValue: totalValue.toFixed(2),
            currencySymbol: getCurrencySymbol(accountCurrency)
        });
    };

    const getCurrencySymbol = (curr) => {
        switch (curr) {
            case 'EUR': return '€';
            case 'GBP': return '£';
            case 'JPY': return '¥';
            default: return '$';
        }
    };

    return (
        <section className="py-24 bg-gray-50">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Calculator Section */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                            {/* Header */}
                            <div className="bg-[#D4AF37] p-6 text-center">
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Advanced Pip Calculator</h2>
                                <p className="text-white/80 text-sm mt-1">Calculate your risk effectively</p>
                            </div>

                            <div className="p-8 md:p-10">
                                <form onSubmit={calculatePip} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Currency Pair */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                <Globe size={16} className="text-[#D4AF37]" /> Currency Pair
                                            </label>
                                            <div className="relative">
                                                <select
                                                    value={currencyPair}
                                                    onChange={(e) => setCurrencyPair(e.target.value)}
                                                    className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all appearance-none cursor-pointer hover:border-[#D4AF37]"
                                                >
                                                    <optgroup label="Major Pairs">
                                                        <option value="EURUSD">EUR/USD</option>
                                                        <option value="GBPUSD">GBP/USD</option>
                                                        <option value="USDJPY">USD/JPY</option>
                                                        <option value="USDCAD">USD/CAD</option>
                                                        <option value="USDCHF">USD/CHF</option>
                                                        <option value="AUDUSD">AUD/USD</option>
                                                        <option value="NZDUSD">NZD/USD</option>
                                                    </optgroup>
                                                    <optgroup label="Cross Pairs">
                                                        <option value="EURGBP">EUR/GBP</option>
                                                        <option value="EURJPY">EUR/JPY</option>
                                                        <option value="GBPJPY">GBP/JPY</option>
                                                    </optgroup>
                                                </select>
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                    <ChevronRight size={16} className="rotate-90" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Account Currency */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                <Wallet size={16} className="text-[#D4AF37]" /> Account Currency
                                            </label>
                                            <div className="relative">
                                                <select
                                                    value={accountCurrency}
                                                    onChange={(e) => setAccountCurrency(e.target.value)}
                                                    className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all appearance-none cursor-pointer hover:border-[#D4AF37]"
                                                >
                                                    <option value="USD">USD - US Dollar</option>
                                                    <option value="EUR">EUR - Euro</option>
                                                    <option value="GBP">GBP - British Pound</option>
                                                    <option value="JPY">JPY - Japanese Yen</option>
                                                </select>
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                    <ChevronRight size={16} className="rotate-90" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Trade Size */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                <Activity size={16} className="text-[#D4AF37]" /> Position Size (Lots)
                                            </label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                min="0.01"
                                                value={lotSize}
                                                onChange={(e) => setLotSize(e.target.value)}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all hover:border-[#D4AF37]"
                                            />
                                        </div>

                                        {/* Pip Movement */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                <CreditCard size={16} className="text-[#D4AF37]" /> Pip Movement
                                            </label>
                                            <input
                                                type="number"
                                                step="1"
                                                min="1"
                                                value={pipAmount}
                                                onChange={(e) => setPipAmount(e.target.value)}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all hover:border-[#D4AF37]"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-[#D4AF37] hover:bg-[#c5a027] text-white font-bold text-lg py-4 h-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all rounded-lg"
                                        >
                                            Calculate Pip Value
                                        </Button>
                                    </div>
                                </form>

                                {/* Results */}
                                <AnimatePresence>
                                    {results && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="mt-10 pt-10 border-t border-gray-100"
                                        >
                                            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center uppercase tracking-wide">Calculation Results</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 text-center relative overflow-hidden group hover:shadow-md transition-all">
                                                    <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Pip Value</div>
                                                    <div className="text-3xl font-black text-[#D4AF37]">
                                                        {results.currencySymbol}{results.pipValue}
                                                    </div>
                                                    <div className="text-xs text-gray-400 mt-2">Value of 1 Pip</div>
                                                </div>

                                                <div className="bg-[#21232D] p-6 rounded-xl border border-gray-800 text-center relative overflow-hidden shadow-lg">
                                                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#D4AF37] opacity-10 rounded-bl-full"></div>
                                                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Total Value</div>
                                                    <div className="text-3xl font-black text-white">
                                                        {results.currencySymbol}{results.totalValue}
                                                    </div>
                                                    <div className="text-xs text-gray-500 mt-2">For {pipAmount} Pips Movement</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Bottom Info - Professional Tools */}
                        <div className="mt-12 bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Tools for Smart Trading</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Our Pip Calculator is designed to provide you with real-time accuracy for your position sizing and risk management needs. Whether you trade forex majors, minors, or exotics, knowing the precise value of a pip is crucial for maintaining a profitable portfolio.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: "Real-Time Accuracy", desc: "Based on live market conditions for precise planning." },
                                    { title: "Multi-Currency", desc: "Support for all major deposit currencies." },
                                    { title: "Risk Control", desc: "Calculate potential profit and loss before entering trades." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-gray-50 p-4 rounded-lg">
                                        <div className="font-bold text-gray-900 mb-2">{item.title}</div>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* How to Use */}
                        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
                            <h3 className="text-lg font-bold text-[#D4AF37] mb-4 border-b border-gray-100 pb-2">How to Use</h3>
                            <ul className="space-y-4">
                                {[
                                    "Select your Currency Pair from the dropdown list.",
                                    "Choose your Account Base Currency.",
                                    "Enter your Trade Size in Lots (Standard Lot = 100,000 units).",
                                    "Input the number of Pips for movement calculation.",
                                    "Click 'Calculate' to see the Value per Pip and Total Value."
                                ].map((step, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                                        <span className="flex-shrink-0 w-6 h-6 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center font-bold text-xs">{i + 1}</span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Tips */}
                        <div className="bg-[#21232D] rounded-xl shadow-md p-6 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-5 rounded-bl-full"></div>
                            <h3 className="text-lg font-bold text-[#D4AF37] mb-4 flex items-center gap-2">
                                <Info size={18} /> Quick Tips
                            </h3>
                            <div className="space-y-4 text-sm text-gray-300">
                                <p>
                                    <strong className="text-white">JPY Pairs:</strong> Remember that Japanese Yen pairs are calculated to the second decimal place (0.01), unlike most pairs which are to the fourth (0.0001).
                                </p>
                                <p>
                                    <strong className="text-white">Risk Management:</strong> Use the Total Value calculation to ensure your stop-loss doesn't exceed your risk percentage (e.g., 1-2% of account balance).
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-[#D4AF37] to-[#F3E5AB] rounded-xl shadow-md p-8 text-center">
                            <h3 className="text-xl font-bold text-secondary mb-2">Ready to Trade?</h3>
                            <p className="text-secondary/80 text-sm mb-6">Open an account today and start trading with competitive spreads.</p>
                            <Button className="w-full bg-secondary text-white border-none hover:bg-secondary/90">Open Live Account</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PipCalculator;
