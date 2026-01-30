import React from 'react';
import { TrendingUp } from 'lucide-react';

const TrustSignals = () => {
    const trends = [
        "Global E-com Sales to hit $6.3 Trillion by 2025",
        "AI Adoption in Marketing projected to grow 186%",
        "Video Marketing generates 66% more qualified leads",
        "Omnichannel strategies drive 80% higher store visits",
        "Mobile commerce to control 73% of total E-com sales",
        "Personalized email campaigns improve CTR by 14%"
    ];

    return (
        <div style={{
            background: 'white',
            padding: '1rem 0',
            borderTop: '1px solid rgba(0,0,0,0.05)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
        }}>
            {/* Label */}
            <div style={{
                position: 'absolute',
                left: 0,
                zIndex: 10,
                background: 'white',
                padding: '0 1.5rem',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                borderRight: '1px solid rgba(0,0,0,0.08)'
            }}>
                <span style={{
                    color: 'var(--accent-crimson)',
                    fontWeight: 'bold',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <TrendingUp size={16} /> 2025 INSIGHTS
                </span>
            </div>

            {/* Scrolling Trends */}
            <div style={{
                display: 'inline-flex',
                gap: '4rem',
                animation: 'scroll 40s linear infinite',
                paddingLeft: '180px'
            }}>
                {[...trends, ...trends, ...trends].map((trend, i) => (
                    <span key={i} style={{
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span style={{ color: 'var(--accent-crimson)', fontSize: '1.2rem' }}>•</span> {trend}
                    </span>
                ))}
            </div>

            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
            `}</style>
        </div>
    );
};

export default TrustSignals;
