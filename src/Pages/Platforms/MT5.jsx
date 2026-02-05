import React from 'react';
import MT5Hero from '../../components/sections/platforms/mt5/MT5Hero';
import MT5Features from '../../components/sections/platforms/mt5/MT5Features';
import MT5Downloads from '../../components/sections/platforms/mt5/MT5Downloads';
// import MT5CTA from '../../components/sections/platforms/mt5/';
import MT5Anywhere from '../../components/sections/platforms/mt5/MT5Anywhere';

const MT5 = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <MT5Hero />
            <MT5Features />
            <MT5Anywhere />
            <MT5Downloads />
            {/* <MT5CTA /> */}
        </div>
    );
};

export default MT5;
