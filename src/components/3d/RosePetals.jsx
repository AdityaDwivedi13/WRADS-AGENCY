import React, { useEffect, useState } from 'react';

const RosePetals = () => {
    const [petals, setPetals] = useState([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Create glass-like red rose petals
        const petalCount = 12;
        const newPetals = [];

        for (let i = 0; i < petalCount; i++) {
            newPetals.push({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: 20 + Math.random() * 40,
                rotation: Math.random() * 360,
                duration: 15 + Math.random() * 20,
                delay: Math.random() * 10,
                opacity: 0.15 + Math.random() * 0.2,
                depth: Math.random() // For parallax effect
            });
        }

        setPetals(newPetals);

        // Track mouse for subtle parallax
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
            overflow: 'hidden'
        }}>
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    style={{
                        position: 'absolute',
                        left: `${petal.left}%`,
                        top: `${petal.top}%`,
                        width: `${petal.size}px`,
                        height: `${petal.size * 1.3}px`,
                        transform: `
                            rotate(${petal.rotation}deg) 
                            translateX(${mousePos.x * petal.depth}px) 
                            translateY(${mousePos.y * petal.depth}px)
                        `,
                        opacity: petal.opacity,
                        animation: `petalFloat ${petal.duration}s ease-in-out ${petal.delay}s infinite`,
                        transition: 'transform 0.3s ease-out'
                    }}
                >
                    {/* Glass-rendered rose petal SVG */}
                    <svg viewBox="0 0 40 52" style={{ width: '100%', height: '100%' }}>
                        <defs>
                            {/* Glass gradient for petal */}
                            <linearGradient id={`petalGlass${petal.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#B30000" stopOpacity="0.6" />
                                <stop offset="50%" stopColor="#CC1A1A" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#8B0000" stopOpacity="0.5" />
                            </linearGradient>
                            {/* Subtle shine effect */}
                            <linearGradient id={`petalShine${petal.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
                                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
                            </linearGradient>
                            <filter id={`petalBlur${petal.id}`}>
                                <feGaussianBlur stdDeviation="0.5" />
                            </filter>
                        </defs>
                        {/* Petal shape */}
                        <path
                            d="M20 0 C35 10 40 30 20 52 C0 30 5 10 20 0"
                            fill={`url(#petalGlass${petal.id})`}
                            filter={`url(#petalBlur${petal.id})`}
                        />
                        {/* Glass shine overlay */}
                        <path
                            d="M20 2 C30 10 32 25 20 40 C12 28 14 12 20 2"
                            fill={`url(#petalShine${petal.id})`}
                        />
                    </svg>
                </div>
            ))}

            <style>{`
                @keyframes petalFloat {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-30px) rotate(5deg);
                    }
                    50% {
                        transform: translateY(-10px) rotate(-3deg);
                    }
                    75% {
                        transform: translateY(-25px) rotate(2deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default RosePetals;
