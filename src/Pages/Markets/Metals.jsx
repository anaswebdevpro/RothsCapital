import React from 'react';
import MetalsHero from '../../components/sections/metals/MetalsHero';
import MetalsFeatures from '../../components/sections/metals/MetalsFeatures';
import MetalsWidget from '../../components/sections/metals/MetalsWidget';
import MetalsStats from '../../components/sections/metals/MetalsStats';
import MetalsCTA from '../../components/sections/metals/MetalsCTA';

const Metals = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <MetalsHero />
            <MetalsFeatures />
            <MetalsWidget />
            <MetalsStats />
            <MetalsCTA />
        </div>
    );
};

export default Metals;
