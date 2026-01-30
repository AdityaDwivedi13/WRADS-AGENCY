import React, { useState } from 'react';
import { TrendingUp, Cpu, Feather, Zap, Target, Brain, BookOpen, BarChart3, Network } from 'lucide-react';

const Leadership = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const founders = [
        {
            id: 'utkarsh',
            tag: 'The Growth Architect',
            name: 'Utkarsh Gupta',
            role: 'Co-Founder | Chief Growth Strategist',
            quote: '"Marketing is not an expense; it is a revenue engine."',
            bio: 'Utkarsh is the driving force behind the agency\'s performance-first philosophy. Moving beyond vanity metrics, he specializes in constructing end-to-end digital ecosystems where brand visibility translates directly into market dominance. His expertise lies in decoding the friction points that stall business growth and deploying high-impact funnels to overcome them.',
            focus: [
                'Enterprise-Grade Digital Strategy',
                'Performance Media & Lead Acquisition',
                'Business Process Automation'
            ],
            icon: TrendingUp,
            secondaryIcon: BarChart3,
            gradient: 'linear-gradient(135deg, rgba(179, 0, 0, 0.08) 0%, rgba(179, 0, 0, 0.02) 100%)'
        },
        {
            id: 'aditya',
            tag: 'The Technologist',
            name: 'Aditya Dhar Dwivedi',
            role: 'Co-Founder | Head of AI & Automation',
            quote: '"We don\'t guess. We calculate."',
            bio: 'Aditya brings a paradigm shift to the agency by replacing traditional intuition with computational rigor. With deep expertise in Large Language Models (LLMs), NLP, and Data Science, he engineers marketing systems that are intelligent, scalable, and self-optimizing. He pioneers the use of Retrieval-Augmented Generation (RAG) and predictive modeling to ensure client budgets are allocated with mathematical precision.',
            focus: [
                'AI-Powered Marketing Automation & LLMs',
                'Predictive Analytics & ROI Modeling',
                'Scalable MLOps for Business Growth'
            ],
            icon: Cpu,
            secondaryIcon: Network,
            gradient: 'linear-gradient(135deg, rgba(179, 0, 0, 0.08) 0%, rgba(179, 0, 0, 0.02) 100%)'
        },
        {
            id: 'prgupta',
            tag: 'The Strategist & Mentor',
            name: 'P. R. Gupta',
            role: 'Co-Founder | Head of Brand Strategy & Education',
            quote: '"Clarity is the ultimate competitive advantage."',
            bio: 'With a distinguished background as an author and faculty member, P. R. Gupta ensures that every campaign is built on an unshakable foundation of communication theory and strategic discipline. He bridges the critical gap between academic rigor and real-world execution, ensuring that brands do not just follow trends but build lasting legacies. He serves as the agency\'s ethical compass and strategic anchor.',
            focus: [
                'Brand Positioning & Narrative Architecture',
                'Strategic Communication Frameworks',
                'Corporate Training & Development'
            ],
            icon: Feather,
            secondaryIcon: BookOpen,
            gradient: 'linear-gradient(135deg, rgba(179, 0, 0, 0.08) 0%, rgba(179, 0, 0, 0.02) 100%)'
        }
    ];

    return (
        <div style={{
            padding: 'var(--section-padding)',
            paddingTop: '160px',
            minHeight: '100vh',
            background: '#FFFFFF'
        }}>
            <div className="container">
                {/* Page Header */}
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', marginBottom: '5rem' }}>
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
                        LEADERSHIP & VISIONARIES
                    </div>

                    <h1 className="fade-in" style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '800',
                        lineHeight: '1.15',
                        color: 'var(--accent-crimson)',
                        marginBottom: '1.5rem'
                    }}>
                        The Architects of Your Growth
                    </h1>

                    <p className="fade-in" style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-muted)',
                        lineHeight: '1.7',
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic'
                    }}>
                        "Converging Business Logic, Computational Intelligence, and Strategic Clarity."
                    </p>
                </div>

                {/* Founder Cards - Triad Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto 6rem'
                }}>
                    {founders.map((founder, idx) => {
                        const Icon = founder.icon;
                        const SecondaryIcon = founder.secondaryIcon;
                        const isHovered = hoveredCard === founder.id;

                        return (
                            <div
                                key={founder.id}
                                className="fade-in leader-card"
                                onMouseEnter={() => setHoveredCard(founder.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    background: isHovered ? '#F5F5F5' : 'var(--bg-glass)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid var(--border-light)',
                                    borderRadius: '28px',
                                    padding: '2.5rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                                    boxShadow: isHovered
                                        ? '0 25px 60px rgba(179, 0, 0, 0.12), 0 0 0 1px rgba(179, 0, 0, 0.15)'
                                        : '0 4px 30px rgba(0, 0, 0, 0.05)',
                                    animationDelay: `${idx * 0.15}s`
                                }}
                            >
                                {/* Floating 3D Icon */}
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    display: 'flex',
                                    gap: '0.5rem'
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'linear-gradient(135deg, var(--accent-crimson), var(--accent-crimson-light))',
                                        borderRadius: '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 8px 25px rgba(179, 0, 0, 0.25)',
                                        animation: 'floatSlow 4s ease-in-out infinite',
                                        animationDelay: `${idx * 0.3}s`
                                    }}>
                                        <Icon size={24} color="white" />
                                    </div>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        background: 'rgba(179, 0, 0, 0.1)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        animation: 'floatSlow 5s ease-in-out infinite',
                                        animationDelay: `${idx * 0.5}s`
                                    }}>
                                        <SecondaryIcon size={18} color="var(--accent-crimson)" />
                                    </div>
                                </div>

                                {/* Tag */}
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.4rem 1rem',
                                    background: 'rgba(179, 0, 0, 0.08)',
                                    borderRadius: '20px',
                                    color: 'var(--accent-crimson)',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    letterSpacing: '0.05em',
                                    marginBottom: '1.5rem',
                                    textTransform: 'uppercase'
                                }}>
                                    {founder.tag}
                                </div>

                                {/* Name */}
                                <h2 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: '800',
                                    color: isHovered ? 'var(--accent-crimson)' : 'var(--text-charcoal)',
                                    marginBottom: '0.5rem',
                                    transition: 'all 0.3s ease',
                                    textShadow: isHovered ? '0 0 20px rgba(179, 0, 0, 0.3)' : 'none'
                                }}>
                                    {founder.name}
                                </h2>

                                {/* Role */}
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--accent-crimson)',
                                    fontWeight: '600',
                                    marginBottom: '1.5rem',
                                    opacity: 0.9,
                                    textShadow: isHovered ? '0 0 15px rgba(179, 0, 0, 0.25)' : 'none',
                                    transition: 'all 0.3s ease'
                                }}>
                                    {founder.role}
                                </p>

                                {/* Quote */}
                                <div style={{
                                    borderLeft: '3px solid var(--accent-crimson)',
                                    paddingLeft: '1rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: 'var(--text-charcoal)',
                                        fontFamily: 'var(--font-display)',
                                        fontStyle: 'italic',
                                        lineHeight: '1.6'
                                    }}>
                                        {founder.quote}
                                    </p>
                                </div>

                                {/* Bio */}
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: '1.75',
                                    marginBottom: '1.5rem'
                                }}>
                                    {founder.bio}
                                </p>

                                {/* Key Focus */}
                                <div>
                                    <p style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--accent-crimson)',
                                        fontWeight: '700',
                                        marginBottom: '0.75rem',
                                        letterSpacing: '0.05em'
                                    }}>
                                        KEY FOCUS
                                    </p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {founder.focus.map((item, i) => (
                                            <div key={i} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            }}>
                                                <div style={{
                                                    width: '6px',
                                                    height: '6px',
                                                    background: 'var(--accent-crimson)',
                                                    borderRadius: '50%'
                                                }} />
                                                <span style={{
                                                    fontSize: '0.85rem',
                                                    color: 'var(--text-charcoal)',
                                                    fontWeight: '500'
                                                }}>
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Synergy Section */}
                <div className="fade-in" style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    textAlign: 'center',
                    padding: '4rem 3rem',
                    background: 'linear-gradient(135deg, rgba(179, 0, 0, 0.04) 0%, rgba(255, 255, 255, 1) 100%)',
                    borderRadius: '32px',
                    border: '1px solid rgba(179, 0, 0, 0.1)'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginBottom: '2rem'
                    }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            background: 'linear-gradient(135deg, var(--accent-crimson), var(--accent-crimson-light))',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 30px rgba(179, 0, 0, 0.25)'
                        }}>
                            <Zap size={28} color="white" />
                        </div>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                        fontWeight: '800',
                        color: 'var(--accent-crimson)',
                        marginBottom: '1.5rem'
                    }}>
                        Why This Leadership Mix Matters
                    </h2>

                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-muted)',
                        lineHeight: '1.85',
                        marginBottom: '2rem'
                    }}>
                        Most agencies offer one perspective. White Rose offers three:
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '2rem'
                    }}>
                        {[
                            { label: 'The Aggression of Growth', name: 'Utkarsh', icon: TrendingUp },
                            { label: 'The Precision of Science', name: 'Aditya', icon: Brain },
                            { label: 'The Wisdom of Strategy', name: 'P. R. Gupta', icon: Target }
                        ].map((pillar, idx) => {
                            const PillarIcon = pillar.icon;
                            return (
                                <div key={idx} style={{
                                    padding: '1.5rem',
                                    background: 'white',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                                    border: '1px solid rgba(0, 0, 0, 0.05)'
                                }}>
                                    <PillarIcon size={24} color="var(--accent-crimson)" style={{ marginBottom: '0.75rem' }} />
                                    <p style={{
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        color: 'var(--text-charcoal)',
                                        marginBottom: '0.25rem'
                                    }}>
                                        {pillar.label}
                                    </p>
                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--accent-crimson)',
                                        fontWeight: '500'
                                    }}>
                                        ({pillar.name})
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <p style={{
                        fontSize: '1.35rem',
                        fontWeight: '600',
                        color: 'var(--text-charcoal)',
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic'
                    }}>
                        Together, we deliver a complete digital evolution.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Leadership;
