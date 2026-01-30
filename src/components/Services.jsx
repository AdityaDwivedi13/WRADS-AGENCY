import React from 'react';
import { MousePointer2, Settings, Globe } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, items }) => (
    <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '2.5rem',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        height: '100%',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
        cursor: 'pointer'
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(179, 0, 0, 0.08), 0 0 0 1px rgba(179, 0, 0, 0.1)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
        }}>
        {/* Icon Container */}
        <div style={{
            width: '56px',
            height: '56px',
            background: 'rgba(179, 0, 0, 0.08)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            color: 'var(--accent-crimson)'
        }}>
            <Icon size={26} />
        </div>

        {/* Title - Crimson */}
        <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '1.5rem',
            color: 'var(--accent-crimson)',
            fontWeight: '700'
        }}>
            {title}
        </h3>

        {/* Items List - Charcoal */}
        <ul style={{ listStyle: 'none' }}>
            {items.map((item, idx) => (
                <li key={idx} style={{
                    marginBottom: '0.8rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '0.95rem'
                }}>
                    <span style={{
                        width: '6px',
                        height: '6px',
                        background: 'var(--accent-crimson)',
                        borderRadius: '50%',
                        marginRight: '12px',
                        flexShrink: 0
                    }} />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const Services = () => {
    const categories = [
        {
            title: "Paid Media",
            icon: MousePointer2,
            items: ["Paid Search (Google/Bing)", "Paid Social (Meta, TikTok)", "Programmatic Ads", "Amazon Advertising"]
        },
        {
            title: "Owned & Earned",
            icon: Globe,
            items: ["SEO & GEO", "Social Media Management", "Email Marketing (Klaviyo)", "Content Strategy"]
        },
        {
            title: "Strategy & Creative",
            icon: Settings,
            items: ["Brand Positioning", "Marketing Analytics", "Performance Creative", "Conversion Optimization"]
        }
    ];

    return (
        <section id="services" style={{
            padding: 'var(--section-padding)',
            background: 'var(--bg-light)'
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                        marginBottom: '1rem',
                        color: 'var(--accent-crimson)',
                        fontWeight: '800'
                    }}>
                        Our Expertise
                    </h2>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.1rem',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        Comprehensive digital solutions tailored for growth.
                    </p>
                </div>

                {/* Services Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {categories.map((cat, idx) => (
                        <ServiceCard key={idx} {...cat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
