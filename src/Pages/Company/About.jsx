import React from 'react';
import AboutHero from '../../components/sections/company/about/AboutHero';
import AboutMission from '../../components/sections/company/about/AboutMission';
import AboutInfo from '../../components/sections/company/about/AboutInfo';
import AboutFeatures from '../../components/sections/company/about/AboutFeatures';
import AboutCTA from '../../components/sections/company/about/AboutCTA';

const About = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <AboutHero />
            <AboutMission />
            <AboutInfo />
            <AboutFeatures />
            <AboutCTA />
        </div>
    );
};

export default About;
