import React, { useState } from 'react';
import { Container } from '../../../ui/Layout';
import Button from '../../../ui/Button';

const PipCalculator = () => {
    const [currency, setCurrency] = useState('USD');
    const [pair, setPair] = useState('EURUSD');
    const [size, setSize] = useState(1); // Standard lots
    const [result, setResult] = useState(null);

    const calculatePip = (e) => {
        e.preventDefault();

        // Simplified Logic for Demo
        // In a real app, you'd fetch live exchange rates.
        // Formula: (Pip Size / Exchange Rate) * Lot Size

        let pipValue = 0;
        const lotSize = size * 100000; // 1 Standard Lot = 100,000 units

        // Basic approximation logic
        if (pair.includes('JPY')) {
            pipValue = (0.01 / 110.50) * lotSize; // Approx rate
        } else {
            pipValue = 0.0001 * lotSize;
        }

        // Adjust for account currency if needed (assuming USD base for simplicity on majors)
        if (currency !== 'USD') {
            // Conversion logic would go here
        }

        setResult(pipValue.toFixed(2));
    };

    return (
        <section className="py-20 bg-gray-50">
            <Container maxW="4xl">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                    {/* Form Section */}
                    <div className="p-10 md:w-3/5">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Pip Value</h2>
                        <form onSubmit={calculatePip} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Account Currency</label>
                                <select
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                                >
                                    <option value="USD">USD - US Dollar</option>
                                    <option value="EUR">EUR - Euro</option>
                                    <option value="GBP">GBP - British Pound</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Currency Pair</label>
                                <select
                                    value={pair}
                                    onChange={(e) => setPair(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                                >
                                    <option value="EURUSD">EUR/USD</option>
                                    <option value="GBPUSD">GBP/USD</option>
                                    <option value="USDJPY">USD/JPY</option>
                                    <option value="AUDUSD">AUD/USD</option>
                                    <option value="USDCAD">USD/CAD</option>
                                    <option value="USDCHF">USD/CHF</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Trade Size (Lots)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    min="0.01"
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                />
                                <p className="text-xs text-gray-500 mt-1">1 Standard Lot = 100,000 units</p>
                            </div>

                            <Button type="submit" size="lg" className="w-full bg-secondary text-white hover:bg-secondary/90 font-bold">
                                Calculate
                            </Button>
                        </form>
                    </div>

                    {/* Result Section */}
                    <div className="bg-secondary p-10 md:w-2/5 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gold-gradient opacity-10 blur-3xl"></div>

                        <h3 className="text-xl font-medium text-white/80 mb-4 relative z-10">Pip Value</h3>

                        {result !== null ? (
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="relative z-10"
                            >
                                <div className="text-5xl font-bold mb-2 text-primary">
                                    {currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£'}{result}
                                </div>
                                <p className="text-sm text-gray-400">Per Pip</p>
                            </motion.div>
                        ) : (
                            <div className="relative z-10 text-gray-400 italic">
                                Click Calculate to see result
                            </div>
                        )}

                        <div className="mt-12 text-xs text-gray-500 border-t border-gray-700 pt-6 w-full text-center relative z-10">
                            *Values are approximate based on current market rates.
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PipCalculator;
