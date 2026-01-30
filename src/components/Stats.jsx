import React from 'react';

const Stats = () => {
    const stats = [
        { label: "Active Clients", value: "300+" },
        { label: "History of Excellence", value: "17+ Years" },
        { label: "Performance Partners", value: "Top 2%" },
    ];

    return (
        <section style={{
            borderTop: '1px solid rgba(0,0,0,0.05)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            background: 'white'
        }}>
            <div className="container" style={{ padding: '4rem 1.5rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: '800',
                                marginBottom: '0.5rem',
                                color: 'var(--accent-crimson)'
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                color: 'var(--text-muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                fontSize: '0.9rem',
                                fontWeight: '500'
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
