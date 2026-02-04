import React from 'react'
import Hero from '../../components/sections/Hero';
import StatsBar from '../../components/sections/StatsBar';
import Features from '../../components/sections/Features';
import Platforms from '../../components/sections/Platforms';
import AccountTypes from '../../components/sections/AccountTypes';
import Steps from '../../components/sections/Steps';
import CTA from '../../components/sections/CTA';
const Home = () => {
    return (
        <div>
            <Hero />
            <StatsBar />
            <Features />
            <Platforms />
            <AccountTypes />
            <Steps />
            <CTA />
        </div>
    )
}

export default Home