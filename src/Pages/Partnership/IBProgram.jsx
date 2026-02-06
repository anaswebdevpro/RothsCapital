import React from 'react';
import IBHero from '../../components/sections/partnership/ib_program/IBHero';
import IBProgramInfo from '../../components/sections/partnership/ib_program/IBProgramInfo';
import IBTypes from '../../components/sections/partnership/ib_program/IBTypes';
import IBBenefits from '../../components/sections/partnership/ib_program/IBBenefits';
import IBTargetAudience from '../../components/sections/partnership/ib_program/IBTargetAudience';
import IBCTA from '../../components/sections/partnership/ib_program/IBCTA';

const IBProgram = () => {
    return (
        <div>
            <IBHero />
            <IBProgramInfo />
            <IBTypes />
            <IBBenefits />
            <IBTargetAudience />
            <IBCTA />
        </div>
    );
};

export default IBProgram;
