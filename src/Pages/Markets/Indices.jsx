import React from 'react';
import IndicesHero from '../../components/sections/indices/IndicesHero';
import IndicesFeatures from '../../components/sections/indices/IndicesFeatures';
import IndicesWidget from '../../components/sections/indices/IndicesWidget';
import IndicesStats from '../../components/sections/indices/IndicesStats';
import IndicesCTA from '../../components/sections/indices/IndicesCTA';

const Indices = () => {
    return (
        <div>
            <IndicesHero />
            <IndicesFeatures />
            <IndicesWidget />
            <IndicesStats />
            <IndicesCTA />
        </div>
    );
};

export default Indices;
