import React from 'react';
import StandardHero from '../../components/sections/accounts/standard/StandardHero';
import StandardFeatures from '../../components/sections/accounts/standard/StandardFeatures';
import StandardSteps from '../../components/sections/accounts/standard/StandardSteps';
import StandardCTA from '../../components/sections/accounts/standard/StandardCTA';
import AccountTypes from '../../components/sections/home/AccountTypes';

const Standard = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <StandardHero />
            <StandardSteps />
            <AccountTypes />
            <StandardFeatures />
            <StandardCTA />
        </div>
    );
};

export default Standard;
