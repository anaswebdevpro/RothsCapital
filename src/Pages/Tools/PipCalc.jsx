import React from 'react';
import PipCalcHero from '../../components/sections/tools/pip_calc/PipCalcHero';
import PipCalculator from '../../components/sections/tools/pip_calc/PipCalculator';

const PipCalc = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <PipCalcHero />
            <PipCalculator />
        </div>
    );
};

export default PipCalc;
