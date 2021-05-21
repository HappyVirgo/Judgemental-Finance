import React from 'react'

import './index.scss'

const Header = ({text, className, isMobile, color="#F73843"}) => {
    return (
        <span className={`header ${!isMobile&&'desktop-header'} ${className} pt-6`} style={{color: color}}>{text}</span>
    )
}

export default Header;