import React from 'react'
import Hero from '../../components/sections/home/Hero';
import StatsBar from '../../components/sections/home/StatsBar';
import Features from '../../components/sections/home/Features';
import Platforms from '../../components/sections/home/Platforms';
import AccountTypes from '../../components/sections/home/AccountTypes';
import Steps from '../../components/sections/home/Steps';
import CTA from '../../components/sections/home/CTA';
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