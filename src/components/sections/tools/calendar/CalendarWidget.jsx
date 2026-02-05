import React, { useEffect, useRef } from 'react';
import { Container } from '../../../ui/Layout';

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
        <section className="py-20 bg-white">
            <Container>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-2">
                    <div className="tradingview-widget-container" ref={containerRef}>
                        <div className="tradingview-widget-container__widget"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CalendarWidget;
