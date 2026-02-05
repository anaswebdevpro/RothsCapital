import React from 'react';
import CryptoHero from '../../components/sections/crypto/CryptoHero';
import CryptoFeatures from '../../components/sections/crypto/CryptoFeatures';
import CryptoWidget from '../../components/sections/crypto/CryptoWidget';
import CryptoStats from '../../components/sections/crypto/CryptoStats';
import CryptoCTA from '../../components/sections/crypto/CryptoCTA';

const Crypto = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <CryptoHero />
            <CryptoFeatures />
            <CryptoWidget />
            <CryptoStats />
            <CryptoCTA />
        </div>
    );
};

export default Crypto;
