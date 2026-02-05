import React from 'react';
import StocksHero from '../../components/sections/stocks/StocksHero';
import StocksFeatures from '../../components/sections/stocks/StocksFeatures';
import StockMarketWidget from '../../components/sections/stocks/StockMarketWidget';
import StocksStats from '../../components/sections/stocks/StocksStats';
import StocksCTA from '../../components/sections/stocks/StocksCTA';

const Stocks = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <StocksHero />
            <StocksFeatures />
            <StockMarketWidget />
            <StocksStats />
            <StocksCTA />
        </div>
    );
};

export default Stocks;
