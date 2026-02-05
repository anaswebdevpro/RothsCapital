import React, { useEffect, useRef } from 'react';
import { Container } from '../../ui/Layout';

const MetalsWidget = () => {
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
                    "title": "Precious Metals",
                    "symbols": [
                        { "s": "OANDA:XAUUSD", "d": "Gold" },
                        { "s": "OANDA:XAGUSD", "d": "Silver" },
                        { "s": "OANDA:XPTUSD", "d": "Platinum" },
                        { "s": "OANDA:XPDUSD", "d": "Palladium" }
                    ],
                    "originalTitle": "Precious Metals"
                },
                {
                    "title": "Industrial Metals",
                    "symbols": [
                        { "s": "COMEX:HG1!", "d": "Copper" },
                        { "s": "COMEX:ALI1!", "d": "Aluminum" },
                        { "s": "LME:ZNC1!", "d": "Zinc" },
                        { "s": "LME:NIC1!", "d": "Nickel" }
                    ],
                    "originalTitle": "Industrial Metals"
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Metals Market Overview</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Access real-time pricing and market movement for precious and industrial metals.</p>
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

export default MetalsWidget;
