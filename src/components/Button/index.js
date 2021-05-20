import React from 'react';

import './index.scss'

const Button = ({text, className, isMobile}) => {
    return (
        <button className={`bg-red-c focus:outline-none btn ${className} ${!isMobile&&'desktop-button'}`}>{text}</button>
    )
}

export default Button