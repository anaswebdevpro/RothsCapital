import React, { useEffect, useRef } from 'react';
import { Container } from '../../../ui/Layout';
import { Calendar } from 'lucide-react';

const CalendarWidget = () => {
    const containerRef = useRef();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "width": "100%",
            "height": "800",
            "colorTheme": "light",
            "isTransparent": false,
            "locale": "en",
            "importanceFilter": "-1,0,1",
            "currencyFilter": "USD,EUR,JPY,GBP,AUD,CAD,CHF,CNY,NZD"
        });

        if (containerRef.current) {
            containerRef.current.innerHTML = ''; // Clear previous content
            containerRef.current.appendChild(script);
        }
    }, []);

    return (
        <section className="py-24 bg-gray-50">
            <Container>
                {/* Custom Wrapper matching Roths Capitals */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                    {/* Header */}
                    <div className="bg-[#D4AF37] px-6 py-4 flex items-center gap-3">
                        <Calendar className="text-white w-6 h-6" />
                        <h2 className="text-xl font-bold text-white uppercase tracking-wide">Live Economic Calendar</h2>
                    </div>

                    {/* Widget Content */}
                    <div className="p-1 min-h-[800px]">
                        <div className="tradingview-widget-container" ref={containerRef}>
                            <div className="tradingview-widget-container__widget"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CalendarWidget;
