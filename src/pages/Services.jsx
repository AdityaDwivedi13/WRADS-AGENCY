import React from 'react';
import { Building2, ShoppingCart, Code2, LineChart, Stethoscope, GraduationCap, Zap, Plane } from 'lucide-react';

const SectorCard = ({ title, cagr, strategy, icon: Icon, color }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: 'white',
        borderRadius: '24px',
        padding: '2rem',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(179, 0, 0, 0.08)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
        }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div style={{
                width: '50px', height: '50px',
                background: `rgba(${color}, 0.1)`,
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: `rgb(${color})`
            }}>
                <Icon size={24} />
            </div>
            <div style={{
                background: 'rgba(179, 0, 0, 0.08)',
                padding: '0.25rem 0.75rem',
                borderRadius: '50px',
                fontSize: '0.8rem',
                color: 'var(--accent-crimson)',
                fontWeight: '600',
                border: '1px solid rgba(179, 0, 0, 0.1)'
            }}>
                +{cagr} CAGR
            </div>
        </div>

        <h3 style={{
            fontSize: '1.25rem',
            marginBottom: '0.75rem',
            color: 'var(--text-charcoal)',
            fontWeight: '700'
        }}>
            {title}
        </h3>

        <div style={{ marginTop: 'auto' }}>
            <div style={{
                fontSize: '0.75rem',
                color: 'var(--accent-crimson)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem',
                fontWeight: '600'
            }}>
                Strategy Snapshot
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                {strategy}
            </p>
        </div>
    </div>
);

const Services = () => {
    const sectors = [
        {
            title: 'US Real Estate',
            cagr: '15%',
            icon: Building2,
            strategy: 'Hyper-local SEO & automated lead nurturing for agents.',
            color: '179, 0, 0' // Crimson accent
        },
        {
            title: 'UK E-Commerce',
            cagr: '20%',
            icon: ShoppingCart,
            strategy: 'Conversion rate optimization & personalized retention flows.',
            color: '100, 100, 100' // Grey
        },
        {
            title: 'SaaS & Tech',
            cagr: '25%',
            icon: Code2,
            strategy: 'ABM campaigns targeting enterprise decision makers.',
            color: '179, 0, 0' // Crimson
        },
        {
            title: 'Fintech',
            cagr: '18%',
            icon: LineChart,
            strategy: 'Trust-building content funnels & compliance-ready ads.',
            color: '100, 100, 100' // Grey
        },
        {
            title: 'Healthcare',
            cagr: '12%',
            icon: Stethoscope,
            strategy: 'HIPAA-compliant patient acquisition & telehealth marketing.',
            color: '179, 0, 0' // Crimson
        },
        {
            title: 'EdTech',
            cagr: '16%',
            icon: GraduationCap,
            strategy: 'Student lifecycle automation from enrollment to alumni.',
            color: '100, 100, 100' // Grey
        },
        {
            title: 'Green Energy',
            cagr: '22%',
            icon: Zap,
            strategy: 'Geo-targeted lead gen for solar & renewable installers.',
            color: '179, 0, 0' // Crimson
        },
        {
            title: 'Travel & Hospitality',
            cagr: '14%',
            icon: Plane,
            strategy: 'Visual storytelling & dynamic booking retargeting.',
            color: '100, 100, 100' // Grey
        }
    ];

    return (
        <div style={{
            padding: 'var(--section-padding)',
            paddingTop: '160px',
            minHeight: '100vh',
            background: 'var(--bg-light)'
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                    <div className="fade-in" style={{
                        color: 'var(--accent-crimson)',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        fontSize: '0.9rem',
                        letterSpacing: '0.1em'
                    }}>
                        GLOBAL OPPORTUNITIES
                    </div>
                    <h1 className="fade-in" style={{
                        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                        fontWeight: '800',
                        color: 'var(--accent-crimson)',
                        marginBottom: '0.5rem'
                    }}>
                        8 High-Growth Sectors.
                    </h1>
                    <h2 className="fade-in" style={{
                        fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                        fontWeight: '700',
                        color: 'var(--text-charcoal)'
                    }}>
                        One Strategy.
                    </h2>
                </div>

                {/* Sectors Grid */}
                <div className="bento-grid">
                    {sectors.map((sector, idx) => (
                        <div key={idx} className="bento-col-3 fade-in" style={{
                            gridColumn: 'span 3',
                            animationDelay: `${idx * 0.1}s`,
                        }}>
                            <style>{`
                                @media (max-width: 1100px) { .bento-col-3 { grid-column: span 6 !important; } }
                                @media (max-width: 650px) { .bento-col-3 { grid-column: span 12 !important; } }
                            `}</style>
                            <SectorCard {...sector} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
