
import React from 'react';
import ForexHero from '../../components/sections/forex/ForexHero';
import ForexFeatures from '../../components/sections/forex/ForexFeatures';
import CurrencyMatrix from '../../components/sections/forex/CurrencyMatrix';
import ForexStats from '../../components/sections/forex/ForexStats';
import ForexCTA from '../../components/sections/forex/ForexCTA';

const Forex = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <ForexHero />
            <ForexFeatures />
            <CurrencyMatrix />
            <ForexStats />
            <ForexCTA />
        </div>
    );
};

export default Forex;
