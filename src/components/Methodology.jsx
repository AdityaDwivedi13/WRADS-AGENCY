import React from 'react';

const Methodology = () => {
    const steps = [
        { letter: 'B', title: 'Brand', desc: 'Defining core identity and positioning.' },
        { letter: 'O', title: 'Objectives', desc: 'Setting clear, measurable KPI targets.' },
        { letter: 'R', title: 'Reach', desc: 'Strategic targeting across optimal channels.' },
        { letter: 'E', title: 'Engagement', desc: 'Creating compelling interactions.' },
        { letter: 'A', title: 'Action', desc: 'Driving conversions and sales.' },
        { letter: 'L', title: 'Learnings', desc: 'Data analysis for continuous improvement.' },
    ];

    return (
        <section id="methodology" style={{
            padding: 'var(--section-padding)',
            background: 'white'
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ maxWidth: '600px', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                        marginBottom: '1rem',
                        color: 'var(--text-charcoal)',
                        fontWeight: '800'
                    }}>
                        The <span style={{ color: 'var(--accent-crimson)' }}>BOREAL</span> Framework
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        Our proprietary methodology for sustainable growth.
                    </p>
                </div>

                {/* Steps Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: 'var(--bg-light)',
                                borderRadius: '20px',
                                padding: '2rem',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(179, 0, 0, 0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Background Letter */}
                            <div style={{
                                fontSize: '5rem',
                                fontWeight: '900',
                                color: 'rgba(179, 0, 0, 0.04)',
                                position: 'absolute',
                                top: '-15px',
                                right: '10px',
                                lineHeight: 1
                            }}>
                                {step.letter}
                            </div>

                            {/* Circle with Letter */}
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--accent-crimson), var(--accent-crimson-light))',
                                color: 'white',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem auto',
                                boxShadow: '0 8px 25px rgba(179, 0, 0, 0.25)',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {step.letter}
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontSize: '1.25rem',
                                marginBottom: '0.5rem',
                                color: 'var(--text-charcoal)',
                                fontWeight: '700',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.9rem',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
