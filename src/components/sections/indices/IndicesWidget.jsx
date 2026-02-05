import React, { useEffect, useRef } from 'react';
import { Container } from '../../ui/Layout';

const IndicesWidget = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "colorTheme": "light",
            "dateRange": "12M",
            "showChart": true,
            "locale": "en",
            "width": "100%",
            "height": "600",
            "largeChartUrl": "",
            "isTransparent": false,
            "showSymbolLogo": true,
            "showFloatingTooltip": false,
            "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
            "plotLineColorFalling": "rgba(41, 98, 255, 1)",
            "gridLineColor": "rgba(240, 243, 250, 0)",
            "scaleFontColor": "rgba(106, 109, 120, 1)",
            "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
            "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
            "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
            "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
            "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
            "tabs": [
                {
                    "title": "US Indices",
                    "symbols": [
                        { "s": "FOREXCOM:SPXUSD", "d": "S&P 500" },
                        { "s": "FOREXCOM:NSXUSD", "d": "Nasdaq 100" },
                        { "s": "FOREXCOM:DJI", "d": "Dow 30" },
                        { "s": "CBOE:RUT", "d": "Russell 2000" }
                    ],
                    "originalTitle": "Indices"
                },
                {
                    "title": "European Indices",
                    "symbols": [
                        { "s": "INDEX:DEU40", "d": "DAX 40" },
                        { "s": "FOREXCOM:UKXGBP", "d": "FTSE 100" },
                        { "s": "INDEX:FRA40", "d": "CAC 40" },
                        { "s": "INDEX:EUS50", "d": "Euro Stoxx 50" }
                    ],
                    "originalTitle": "commodities"
                },
                {
                    "title": "Asian Indices",
                    "symbols": [
                        { "s": "INDEX:NKY", "d": "Nikkei 225" },
                        { "s": "INDEX:HSI", "d": "Hang Seng" },
                        { "s": "TVC:SHCOMP", "d": "Shanghai Composite" },
                        { "s": "INDEX:XJO", "d": "ASX 200" }
                    ],
                    "originalTitle": "bonds"
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Indices Market Overview</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Track the performance of major global stock market indices in real-time.</p>
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

export default IndicesWidget;
