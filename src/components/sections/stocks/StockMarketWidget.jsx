import React, { useEffect, useRef } from 'react';
import { Container } from '../../ui/Layout';

const StockMarketWidget = () => {
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
                    "title": "Indices",
                    "symbols": [
                        { "s": "FOREXCOM:SPXUSD", "d": "S&P 500" },
                        { "s": "FOREXCOM:NSXUSD", "d": "US 100" },
                        { "s": "FOREXCOM:DJI", "d": "Dow 30" },
                        { "s": "INDEX:NKY", "d": "Nikkei 225" },
                        { "s": "INDEX:DEU40", "d": "DAX Index" },
                        { "s": "FOREXCOM:UKXGBP", "d": "UK 100" }
                    ],
                    "originalTitle": "Indices"
                },
                {
                    "title": "Futures",
                    "symbols": [
                        { "s": "CME_MINI:ES1!", "d": "S&P 500" },
                        { "s": "CME:6E1!", "d": "Euro" },
                        { "s": "COMEX:GC1!", "d": "Gold" },
                        { "s": "NYMEX:CL1!", "d": "Crude Oil" },
                        { "s": "NYMEX:NG1!", "d": "Natural Gas" },
                        { "s": "CBOT:ZC1!", "d": "Corn" }
                    ],
                    "originalTitle": "Futures"
                },
                {
                    "title": "Bonds",
                    "symbols": [
                        { "s": "CME:GE1!", "d": "Eurodollar" },
                        { "s": "CBOT:ZB1!", "d": "T-Bond" },
                        { "s": "CBOT:UB1!", "d": "Ultra T-Bond" },
                        { "s": "EUREX:FGBL1!", "d": "Euro Bund" },
                        { "s": "EUREX:FBTP1!", "d": "Euro BTP" },
                        { "s": "EUREX:FGBM1!", "d": "Euro BOBL" }
                    ],
                    "originalTitle": "Bonds"
                },
                {
                    "title": "Forex",
                    "symbols": [
                        { "s": "FX:EURUSD", "d": "EUR/USD" },
                        { "s": "FX:GBPUSD", "d": "GBP/USD" },
                        { "s": "FX:USDJPY", "d": "USD/JPY" },
                        { "s": "FX:USDCHF", "d": "USD/CHF" },
                        { "s": "FX:AUDUSD", "d": "AUD/USD" },
                        { "s": "FX:USDCAD", "d": "USD/CAD" }
                    ],
                    "originalTitle": "Forex"
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stock Market Trading</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Access real-time pricing and market movement for the world's most traded stocks.</p>
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

export default StockMarketWidget;
