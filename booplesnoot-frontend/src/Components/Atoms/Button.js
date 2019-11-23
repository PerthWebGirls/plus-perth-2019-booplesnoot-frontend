import React from 'react';

const Button = ({onButtonClick, ...props}) => {
    return <button type="submit" className="btn btn-secondary btn-block" onClick={onButtonClick}>{props.children}</button>;
        
};

export default Button;