import React from 'react';

import './index.scss'

const Descripition = ({text, maxWidth, className, isMobile}) => {
    return (
        <span className={`description ${!!maxWidth?'flex':''} ${className} ${!isMobile&&'desktop-description'}`} style={{maxWidth:`${maxWidth}`}}>{text}</span>
    )
}

export default Descripition;