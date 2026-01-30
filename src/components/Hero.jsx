import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = ({ customHeadline }) => {
    return (
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%)'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px' }}>
                    {/* Badge */}
                    <div className="fade-in" style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        borderRadius: '50px',
                        background: 'rgba(179, 0, 0, 0.08)',
                        border: '1px solid rgba(179, 0, 0, 0.3)',
                        color: 'var(--accent-crimson)',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem'
                    }}>
                        Performance-Driven Digital Marketing
                    </div>

                    {/* Headline - Deep Crimson */}
                    <h1 className="fade-in" style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em',
                        color: 'var(--accent-crimson)'
                    }}>
                        {customHeadline ? (
                            <span dangerouslySetInnerHTML={{ __html: customHeadline.replace(/\n/g, '<br/>') }} />
                        ) : (
                            <>
                                Award-Winning <br />
                                End-to-End Digital Solutions <br />
                                <span style={{ color: 'var(--text-charcoal)' }}>for Business Growth.</span>
                            </>
                        )}
                    </h1>

                    {/* Subheadline - Charcoal */}
                    <p className="fade-in" style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-muted)',
                        maxWidth: '600px',
                        marginBottom: '2.5rem',
                        animationDelay: '0.2s',
                        lineHeight: '1.7'
                    }}>
                        We blend creative strategy with data-driven automation to scale your brand faster and more efficiently.
                    </p>

                    {/* CTA Buttons */}
                    <div className="fade-in" style={{
                        display: 'flex',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        animationDelay: '0.4s'
                    }}>
                        <button className="btn btn-primary">
                            Request a Quote <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </button>
                        <button className="btn btn-outlined">
                            <PlayCircle size={20} style={{ marginRight: '0.5rem' }} /> Why Us?
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
