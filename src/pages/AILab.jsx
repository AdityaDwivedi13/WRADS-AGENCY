import React from 'react';
import { Cpu, Zap, Activity, Database, LayoutTemplate } from 'lucide-react';
import ROICalculator from '../components/ROICalculator';

const AILab = () => {
    return (
        <div style={{
            padding: 'var(--section-padding)',
            paddingTop: '160px',
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%)'
        }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '50px',
                        background: 'rgba(179, 0, 0, 0.08)',
                        border: '1px solid rgba(179, 0, 0, 0.2)',
                        marginBottom: '2rem',
                        color: 'var(--accent-crimson)',
                        fontWeight: '600'
                    }}>
                        <Zap size={16} /> WRADS AUTOMATION LAB
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        color: 'var(--text-charcoal)'
                    }}>
                        The "Lean & Mean" <br />
                        <span style={{ color: 'var(--accent-crimson)' }}>Tech Stack.</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-muted)',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        We leverage a curated stack of high-impact tools to maximize ROI without the enterprise bloat.
                    </p>
                </div>

                {/* ROI Calculator Section */}
                <div style={{ marginBottom: '6rem' }}>
                    <ROICalculator />
                </div>

                {/* Tech Stack Grid */}
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '3rem',
                    fontSize: '2.5rem',
                    color: 'var(--accent-crimson)',
                    fontWeight: '800'
                }}>
                    Our Engine
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {[
                        { icon: Database, title: 'HubSpot CRM', desc: 'Centralized data hygiene and automated deal pipelines.' },
                        { icon: Activity, title: 'AI-Driven ROI', desc: 'Real-time performance reporting and predictive analytics.' },
                        { icon: LayoutTemplate, title: 'Programmatic Creative', desc: 'Automated ad variants for high-velocity testing.' },
                        { icon: Cpu, title: 'Workflow Automation', desc: 'Zapier/Make integrations to eliminate manual bottlenecks.' }
                    ].map((item, i) => (
                        <div
                            key={i}
                            style={{
                                padding: '2rem',
                                textAlign: 'left',
                                background: 'white',
                                borderRadius: '20px',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(179, 0, 0, 0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)';
                            }}
                        >
                            <div style={{
                                width: '50px', height: '50px',
                                background: 'rgba(179, 0, 0, 0.08)',
                                borderRadius: '12px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: 'var(--accent-crimson)'
                            }}>
                                <item.icon size={24} />
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                marginBottom: '0.75rem',
                                color: 'var(--text-charcoal)',
                                fontWeight: '700'
                            }}>
                                {item.title}
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AILab;
