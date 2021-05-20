import React from 'react'

import './index.scss'

const Header = ({text, className, isMobile}) => {
    return (
        <p className={`header ${!isMobile&&'desktop-header'} ${className} pt-6`}>{text}</p>
    )
}

export default Header;