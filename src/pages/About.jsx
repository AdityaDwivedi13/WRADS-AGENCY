import React from 'react';

const About = () => {
    return (
        <div style={{
            padding: 'var(--section-padding)',
            paddingTop: '160px',
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%)'
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ maxWidth: '900px', margin: '0 auto', marginBottom: '4rem' }}>
                    <div className="fade-in" style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        border: '2px solid var(--accent-crimson)',
                        borderRadius: '50px',
                        color: 'var(--accent-crimson)',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        marginBottom: '2rem',
                        letterSpacing: '0.1em'
                    }}>
                        THE FOUNDER'S VISION
                    </div>

                    {/* Main Headline - Crimson Red */}
                    <h1 className="fade-in" style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '800',
                        lineHeight: '1.15',
                        color: 'var(--accent-crimson)',
                        marginBottom: '1rem'
                    }}>
                        Built on Trust. <br />
                        Scaled by Performance.
                    </h1>
                </div>

                {/* Main Content Card */}
                <div className="fade-in" style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    background: 'white',
                    borderRadius: '32px',
                    padding: 'clamp(2rem, 5vw, 4rem)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.06)',
                    border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                    {/* Decorative Quote Line */}
                    <div style={{
                        borderLeft: '4px solid var(--accent-crimson)',
                        paddingLeft: '2rem',
                        marginBottom: '3rem'
                    }}>
                        <p style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                            color: 'var(--text-charcoal)',
                            lineHeight: '1.9',
                            fontWeight: '400'
                        }}>
                            White Rose didn't begin in a boardroom with massive venture capital. It began with a singular, powerful conviction: that <strong style={{ color: 'var(--accent-crimson)' }}>engineering precision from India</strong> could drive unprecedented growth for global businesses.
                        </p>
                    </div>

                    {/* Body Paragraphs */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        color: 'var(--text-charcoal)'
                    }}>
                        <p style={{
                            fontSize: '1.15rem',
                            lineHeight: '1.85',
                            color: 'var(--text-muted)'
                        }}>
                            We started with humble roots but a massive commitment to measurable results. We evolved from a small, focused operation into a global strategic partner by proving one thing repeatedly: <strong style={{ color: 'var(--text-charcoal)' }}>we don't just deliver services; we deliver increased market value.</strong>
                        </p>

                        <p style={{
                            fontSize: '1.15rem',
                            lineHeight: '1.85',
                            color: 'var(--text-muted)'
                        }}>
                            We bridged the gap between technical execution and high-level strategy. Today, our clients—from agile startups to established enterprises—don't just hire us; they trust us with their future.
                        </p>

                        {/* Highlighted Closing Statement */}
                        <div style={{
                            background: 'rgba(179, 0, 0, 0.04)',
                            borderRadius: '16px',
                            padding: '2rem',
                            marginTop: '1rem'
                        }}>
                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: '1.8',
                                color: 'var(--text-charcoal)',
                                fontWeight: '500',
                                margin: 0
                            }}>
                                They confide in us because we have proven, time and again, that we can generate <span style={{ color: 'var(--accent-crimson)' }}>higher performance</span>, <span style={{ color: 'var(--accent-crimson)' }}>tangible sales revenue</span>, and <span style={{ color: 'var(--accent-crimson)' }}>sustainable scalability</span>.
                            </p>
                        </div>

                        {/* Defining Metric Statement */}
                        <p style={{
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            color: 'var(--accent-crimson)',
                            textAlign: 'center',
                            marginTop: '2rem',
                            fontFamily: 'var(--font-display)',
                            fontStyle: 'italic'
                        }}>
                            "Your growth is now our defining metric."
                        </p>
                    </div>
                </div>

                {/* Stats Row */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    maxWidth: '900px',
                    margin: '4rem auto 0'
                }}>
                    {[
                        { value: '5+', label: 'Countries Served' },
                        { value: '50+', label: 'Projects Delivered' },
                        { value: '3x', label: 'Avg. ROI Increase' }
                    ].map((stat, idx) => (
                        <div key={idx} className="fade-in" style={{
                            textAlign: 'center',
                            padding: '2rem',
                            background: 'white',
                            borderRadius: '20px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                            border: '1px solid rgba(0,0,0,0.05)',
                            animationDelay: `${idx * 0.1}s`
                        }}>
                            <div style={{
                                fontSize: '2.5rem',
                                fontWeight: '800',
                                color: 'var(--accent-crimson)',
                                marginBottom: '0.5rem'
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.95rem',
                                fontWeight: '500'
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
