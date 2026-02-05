import React from 'react';
import IBHero from '../../components/sections/partnership/ib_program/IBHero';
import IBTypes from '../../components/sections/partnership/ib_program/IBTypes';
import IBBenefits from '../../components/sections/partnership/ib_program/IBBenefits';
import IBCTA from '../../components/sections/partnership/ib_program/IBCTA';

const IBProgram = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <IBHero />
            <IBTypes />
            <IBBenefits />
            <IBCTA />
        </div>
    );
};

export default IBProgram;
