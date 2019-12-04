import React from 'react';
import './LoadingIndicator.css';

export const LoadingIndicator = ({size='lg'}) => {
    return (
        <div className={`loading-indicator loading-indicator--${size}`}>
            <i className="fas fa-spinner fa-pulse fa-3x"></i>
        </div>
    )
}

export default LoadingIndicator;