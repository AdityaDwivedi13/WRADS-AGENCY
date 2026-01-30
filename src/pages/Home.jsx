import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Methodology from '../components/Methodology';
import InteractiveGlobe from '../components/3d/InteractiveGlobe';
import TrustSignals from '../components/TrustSignals';

const Home = () => {
    return (
        <div style={{ position: 'relative', background: 'white' }}>
            {/* Globe Background for Hero */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 0,
                overflow: 'hidden'
            }}>
                <InteractiveGlobe />
            </div>

            {/* Hero with custom headline */}
            <Hero customHeadline="<span style='color: #B30000'>Transforming Vision into Revenue:</span><br/>From India to the Global Stage." />

            <TrustSignals />

            {/* Stats */}
            <Stats />

            {/* BOREAL Methodology */}
            <Methodology />
        </div>
    );
};

export default Home;
