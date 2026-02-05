import React from 'react';
import MT5Hero from '../../components/sections/platforms/mt5/MT5Hero';
import MT5Features from '../../components/sections/platforms/mt5/MT5Features';
import MT5Downloads from '../../components/sections/platforms/mt5/MT5Downloads';
// import MT5CTA from '../../components/sections/platforms/mt5/';
import MT5Anywhere from '../../components/sections/platforms/mt5/MT5Anywhere';
import Features from '../../components/sections/home/Features';

const MT5 = () => {
    return (
        <div>
            <MT5Hero />
            <MT5Features />
            <Features />
            <MT5Anywhere />
            <MT5Downloads />
            {/* <MT5CTA /> */}
        </div>
    );
};

export default MT5;
