import React from 'react'

import './index.scss'

const Header = ({text, className, isMobile, color="#F73843", size="nl"}) => {
    return (
        <span className={`header ${size} ${!isMobile&&'desktop-header desktop'} ${className} pt-6`} style={{color: color}}>{text}</span>
    )
}

export default Header;