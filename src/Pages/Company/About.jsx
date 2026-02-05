import React from 'react';
import AboutHero from '../../components/sections/company/about/AboutHero';
import AboutMission from '../../components/sections/company/about/AboutMission';
import AboutInfo from '../../components/sections/company/about/AboutInfo';
import AboutFeatures from '../../components/sections/company/about/AboutFeatures';
import AboutCTA from '../../components/sections/company/about/AboutCTA';

const About = () => {
    return (
        <div>
            <AboutHero />
            <AboutMission />
            <AboutInfo />
            <AboutFeatures />
            <AboutCTA />
        </div>
    );
};

export default About;
