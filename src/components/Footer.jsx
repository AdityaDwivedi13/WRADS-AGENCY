import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" style={{
            background: 'var(--bg-light)',
            paddingTop: '5rem',
            paddingBottom: '2rem',
            borderTop: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem'
                }}>
                    {/* Brand Col */}
                    <div>
                        <div style={{
                            fontSize: '1.5rem',
                            fontWeight: '800',
                            marginBottom: '1.5rem',
                            color: 'var(--text-charcoal)'
                        }}>
                            WRADS<span style={{ color: 'var(--accent-crimson)' }}>.</span>
                        </div>
                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.9rem',
                            lineHeight: '1.8'
                        }}>
                            Helping ambitious brands scale through performance marketing and intelligent automation.
                        </p>

                        {/* Social Links */}
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            marginTop: '1.5rem'
                        }}>
                            {[Facebook, Linkedin, Instagram, Twitter].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        background: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-muted)',
                                        transition: 'all 0.2s',
                                        border: '1px solid rgba(0,0,0,0.08)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = 'var(--accent-crimson)';
                                        e.currentTarget.style.borderColor = 'var(--accent-crimson)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'var(--text-muted)';
                                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)';
                                    }}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem',
                            fontWeight: '600',
                            color: 'var(--text-charcoal)'
                        }}>
                            Company
                        </h4>
                        <ul style={{ listStyle: 'none' }}>
                            {['About Us', 'Services', 'AI Lab', 'Careers'].map(item => (
                                <li key={item} style={{ marginBottom: '0.8rem' }}>
                                    <a
                                        href="#"
                                        style={{
                                            color: 'var(--text-muted)',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s',
                                            fontSize: '0.95rem'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-crimson)'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Address */}
                    <div>
                        <h4 style={{
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem',
                            fontWeight: '600',
                            color: 'var(--text-charcoal)'
                        }}>
                            Office
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <h5 style={{
                                    color: 'var(--accent-crimson)',
                                    fontSize: '0.95rem',
                                    marginBottom: '0.3rem',
                                    fontWeight: '600'
                                }}>
                                    India
                                </h5>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                                    RTB 118, Royal Tower, Shipra Suncity, <br />
                                    Indirapuram Ghaziabad, Uttar Pradesh, India
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem',
                            fontWeight: '600',
                            color: 'var(--text-charcoal)'
                        }}>
                            Contact
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                color: 'var(--text-muted)'
                            }}>
                                <Phone size={18} color="var(--accent-crimson)" />
                                <span>+971 50 123 4567</span>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                color: 'var(--text-muted)'
                            }}>
                                <Mail size={18} color="var(--accent-crimson)" />
                                <span>hello@wrads.agency</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{
                    textAlign: 'center',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem'
                }}>
                    © {new Date().getFullYear()} White Rose Automation and Digital Services. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
