import React, { useEffect, useRef } from 'react';
import { Container } from '../../ui/Layout';

const CurrencyMatrix = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "width": "100%",
            "height": 500,
            "currencies": [
                "EUR",
                "USD",
                "JPY",
                "GBP",
                "CHF",
                "AUD",
                "CAD",
                "NZD",
                "CNY"
            ],
            "isTransparent": false,
            "colorTheme": "light",
            "locale": "en"
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
                    <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-700 text-xs font-bold rounded-full mb-4">FOREX PAIRS</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Global Currency Trading</h2>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="tradingview-widget-container" ref={containerRef}>
                        <div className="tradingview-widget-container__widget"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CurrencyMatrix;
