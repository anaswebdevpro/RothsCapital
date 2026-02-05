import React from 'react';
import PrimeHero from '../../components/sections/accounts/prime/PrimeHero';
import PrimeFeatures from '../../components/sections/accounts/prime/PrimeFeatures';
import PrimeSteps from '../../components/sections/accounts/prime/PrimeSteps';
import PrimeCTA from '../../components/sections/accounts/prime/PrimeCTA';
import AccountTypes from '../../components/sections/home/AccountTypes';

const Prime = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <PrimeHero />
            <PrimeSteps />
            <AccountTypes />
            <PrimeFeatures />
            <PrimeCTA />
        </div>
    );
};

export default Prime;
