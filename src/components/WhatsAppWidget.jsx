import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
    return (
        <a href="https://wa.me/971501234567" target="_blank" rel="noreferrer" style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '60px',
            height: '60px',
            background: '#25D366',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
            zIndex: 2000,
            transition: 'transform 0.3s',
            cursor: 'pointer'
        }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <MessageCircle size={32} />
            <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                width: '14px',
                height: '14px',
                background: 'var(--accent-crimson)',
                borderRadius: '50%',
                border: '2px solid white'
            }} />
        </a>
    );
};

export default WhatsAppWidget;
