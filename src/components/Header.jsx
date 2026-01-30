import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import TimezoneWidget from './TimezoneWidget';
import '../index.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
        borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.05)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {/* Logo - Charcoal with Crimson accent */}
          <Link to="/" style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            letterSpacing: '-0.03em',
            color: 'var(--text-charcoal)',
            textDecoration: 'none',
            fontFamily: 'var(--font-display)'
          }}>
            WRADS<span style={{ color: 'var(--accent-crimson)' }}>.</span>
          </Link>

          <div className="desktop-only">
            <TimezoneWidget />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          {[
            { label: 'Sectors', path: '/sectors' },
            { label: 'Methodology', path: '/#boreal' },
            { label: 'About', path: '/about' },
            { label: 'Leadership', path: '/leadership' },
            { label: 'AI Lab', path: '/ai-lab' }
          ].map((item) => (
            item.path.startsWith('/#') ?
              <a key={item.label} href={item.path.substring(1)} style={navLinkStyle}>{item.label}</a> :
              <Link key={item.label} to={item.path} style={navLinkStyle}>{item.label}</Link>
          ))}
          <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
            Get Growth Audit
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-toggle"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-charcoal)',
            cursor: 'pointer',
            display: 'block'
          }}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'white', padding: '2rem',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
        }}>
          <Link to="/sectors" style={mobileLinkStyle}>Sectors</Link>
          <a href="/#boreal" style={mobileLinkStyle}>Methodology</a>
          <Link to="/about" style={mobileLinkStyle}>About</Link>
          <Link to="/leadership" style={mobileLinkStyle}>Leadership</Link>
          <Link to="/ai-lab" style={mobileLinkStyle}>AI Lab</Link>
          <div style={{ marginTop: '1rem' }}>
            <TimezoneWidget />
          </div>
          <button className="btn btn-primary" style={{ width: '100%' }}>Get Growth Audit</button>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
          .desktop-only { display: block; }
        }
        @media (max-width: 899px) {
          .desktop-only { display: none; }
        }
      `}</style>
    </header>
  );
};

const navLinkStyle = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '0.95rem',
  transition: 'color 0.2s',
  fontFamily: 'var(--font-main)'
};

const mobileLinkStyle = {
  color: 'var(--text-charcoal)',
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontFamily: 'var(--font-display)'
};

export default Header;
