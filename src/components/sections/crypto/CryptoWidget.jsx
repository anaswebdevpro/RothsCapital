import React, { useEffect, useRef } from 'react';
import { Container } from '../../ui/Layout';

const CryptoWidget = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "width": "100%",
            "height": "600",
            "defaultColumn": "overview",
            "screener_type": "crypto_mkt",
            "displayCurrency": "USD",
            "colorTheme": "light",
            "locale": "en",
            "isTransparent": false,
            "showSymbolLogo": true,
            "tabs": [
                {
                    "title": "Major Cryptocurrencies",
                    "symbols": [
                        { "s": "BINANCE:BTCUSDT", "d": "Bitcoin" },
                        { "s": "BINANCE:ETHUSDT", "d": "Ethereum" },
                        { "s": "BINANCE:BNBUSDT", "d": "BNB" },
                        { "s": "BINANCE:XRPUSDT", "d": "XRP" },
                        { "s": "BINANCE:ADAUSDT", "d": "Cardano" },
                        { "s": "BINANCE:SOLUSDT", "d": "Solana" }
                    ]
                }
            ]
        });

        containerRef.current.appendChild(script);

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <section className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-700 text-xs font-bold rounded-full mb-4">MARKET DATA</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Live Crypto Market</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real-time pricing for the world's leading cryptocurrencies.</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 overflow-hidden h-[600px]">
                    <div className="tradingview-widget-container h-full w-full" ref={containerRef}>
                        <div className="tradingview-widget-container__widget h-full w-full"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CryptoWidget;
