import React from 'react';
import ECNHero from '../../components/sections/accounts/ecn/ECNHero';
import ECNFeatures from '../../components/sections/accounts/ecn/ECNFeatures';
import ECNSteps from '../../components/sections/accounts/ecn/ECNSteps';
import ECNCTA from '../../components/sections/accounts/ecn/ECNCTA';
import AccountTypes from '../../components/sections/home/AccountTypes';

const ECN = () => {
    return (
        <div>
            <ECNHero />
            <ECNSteps />
            <AccountTypes />
            <ECNFeatures />
            <ECNCTA />
        </div>
    );
};

export default ECN;
