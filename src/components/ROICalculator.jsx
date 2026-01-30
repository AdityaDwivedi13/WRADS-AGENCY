import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

const ROICalculator = () => {
    const [leads, setLeads] = useState(100);
    const [conversion, setConversion] = useState(2); // percent
    const [value, setValue] = useState(500); // dollars

    const currentRevenue = leads * (conversion / 100) * value;
    const improvedLeads = leads * 1.5; // 50% increase assumption
    const improvedConversion = conversion * 1.25; // 25% increase
    const potentialRevenue = improvedLeads * (improvedConversion / 100) * value;
    const difference = potentialRevenue - currentRevenue;

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'white',
            borderRadius: '24px',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{
                    padding: '0.8rem',
                    background: 'var(--accent-crimson)',
                    borderRadius: '12px',
                    color: 'white'
                }}>
                    <Calculator size={24} />
                </div>
                <h2 style={{ margin: 0, color: 'var(--text-charcoal)' }}>Growth Audit Calculator</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                {/* Sliders */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="input-group">
                        <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                            Monthly Leads
                        </label>
                        <input
                            type="range" min="50" max="5000" step="50"
                            value={leads} onChange={(e) => setLeads(parseInt(e.target.value))}
                            style={{ width: '100%', accentColor: 'var(--accent-crimson)' }}
                        />
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-charcoal)' }}>{leads}</div>
                    </div>

                    <div className="input-group">
                        <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                            Conv. Rate (%)
                        </label>
                        <input
                            type="range" min="0.5" max="10" step="0.1"
                            value={conversion} onChange={(e) => setConversion(parseFloat(e.target.value))}
                            style={{ width: '100%', accentColor: 'var(--accent-crimson)' }}
                        />
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-charcoal)' }}>{conversion}%</div>
                    </div>

                    <div className="input-group">
                        <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                            Avg. Customer Value ($)
                        </label>
                        <input
                            type="range" min="100" max="10000" step="100"
                            value={value} onChange={(e) => setValue(parseInt(e.target.value))}
                            style={{ width: '100%', accentColor: 'var(--accent-crimson)' }}
                        />
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-charcoal)' }}>${value}</div>
                    </div>
                </div>

                {/* Results Panel */}
                <div style={{
                    background: 'rgba(179, 0, 0, 0.04)',
                    borderRadius: '16px',
                    padding: '2rem',
                    border: '1px solid rgba(179, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Current Monthly Revenue</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-charcoal)' }}>
                            ${currentRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </div>
                    </div>

                    <div>
                        <div style={{ color: 'var(--accent-crimson)', fontSize: '0.9rem', fontWeight: 'bold' }}>WRADS Method Potential</div>
                        <div style={{
                            fontSize: '2.5rem',
                            fontWeight: '800',
                            color: 'var(--accent-crimson)'
                        }}>
                            ${potentialRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </div>
                        <div style={{ color: '#00a65a', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: '600' }}>
                            +${difference.toLocaleString(undefined, { maximumFractionDigits: 0 })} Increase
                        </div>
                    </div>

                    <button className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }}>
                        Get Full Analysis <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;
