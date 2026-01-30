import React, { useEffect, useRef, useState, useMemo } from 'react';
import Globe from 'react-globe.gl';

const InteractiveGlobe = () => {
    const globeEl = useRef();
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    // Red connection arcs from India to global hubs
    const arcsData = useMemo(() => [
        { startLat: 20.5937, startLng: 78.9629, endLat: 37.0902, endLng: -95.7129, color: '#B30000' }, // India -> USA
        { startLat: 20.5937, startLng: 78.9629, endLat: 55.3781, endLng: -3.4360, color: '#CC1A1A' }, // India -> UK
        { startLat: 20.5937, startLng: 78.9629, endLat: 25.2048, endLng: 55.2708, color: '#B30000' }, // India -> Dubai/UAE
        { startLat: 20.5937, startLng: 78.9629, endLat: 31.0461, endLng: 34.8516, color: '#CC1A1A' }, // India -> Israel
        { startLat: 20.5937, startLng: 78.9629, endLat: 38.9637, endLng: 35.2433, color: '#B30000' }, // India -> Turkey
        { startLat: 20.5937, startLng: 78.9629, endLat: -25.2744, endLng: 133.7751, color: '#CC1A1A' }, // India -> Australia
    ], []);

    // Data points/nodes
    const pointsData = useMemo(() => [
        { lat: 20.5937, lng: 78.9629, name: 'India (HQ)', size: 0.6, color: '#B30000' },
        { lat: 37.0902, lng: -95.7129, name: 'USA', size: 0.4, color: '#CC1A1A' },
        { lat: 55.3781, lng: -3.4360, name: 'UK', size: 0.4, color: '#B30000' },
        { lat: 25.2048, lng: 55.2708, name: 'Dubai', size: 0.4, color: '#CC1A1A' },
        { lat: 31.0461, lng: 34.8516, name: 'Israel', size: 0.3, color: '#B30000' },
        { lat: 38.9637, lng: 35.2433, name: 'Turkey', size: 0.3, color: '#CC1A1A' },
        { lat: -25.2744, lng: 133.7751, name: 'Australia', size: 0.3, color: '#B30000' },
    ], []);

    useEffect(() => {
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);

        // Auto-rotate slowly
        if (globeEl.current) {
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.3;
            globeEl.current.pointOfView({ lat: 20, lng: 50, altitude: 2.5 });
        }

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            right: '-10%',
            zIndex: 0,
            opacity: 0.25,
            pointerEvents: 'none',
            filter: 'saturate(0.8) contrast(1.1)'
        }}>
            <Globe
                ref={globeEl}
                width={dimensions.width}
                height={dimensions.height}
                // Holographic glass/marble Earth texture - using a lighter earth texture
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                backgroundColor="rgba(0,0,0,0)"
                // Subtle grey/silver atmosphere for white theme
                atmosphereColor="#C0C0C0"
                atmosphereAltitude={0.18}
                // Red connection arcs
                arcsData={arcsData}
                arcColor="color"
                arcDashLength={0.6}
                arcDashGap={3}
                arcDashInitialGap={() => Math.random() * 5}
                arcDashAnimateTime={2500}
                arcStroke={0.6}
                // Data points
                pointsData={pointsData}
                pointColor="color"
                pointAltitude={0.06}
                pointRadius="size"
                pointsMerge={true}
            />
        </div>
    );
};

export default InteractiveGlobe;
