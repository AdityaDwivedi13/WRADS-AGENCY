import React, { useState, useEffect } from 'react';

const TimezoneWidget = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (offset, label) => {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'UTC'
        };
        // Calculate time based on offset
        const utc = time.getTime() + (time.getTimezoneOffset() * 60000);
        const targetTime = new Date(utc + (3600000 * offset));

        return (
            <div className="timezone-item">
                <span className="tz-label">{label}</span>
                <span className="tz-time">
                    {targetTime.toLocaleTimeString('en-US', { ...options, hour12: false })}
                </span>
            </div>
        );
    };

    return (
        <div className="timezone-widget">
            {formatTime(5.5, 'IST')}
            <div className="tz-divider">|</div>
            {formatTime(0, 'GMT')}
            <div className="tz-divider">|</div>
            {formatTime(-5, 'EST')}
        </div>
    );
};

export default TimezoneWidget;
