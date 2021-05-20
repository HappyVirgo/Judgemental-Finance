import React from 'react';

import './index.scss'

const Item = ({title, content, isMobile}) => {
    return (
        <div className={`${!isMobile&&'item-desktop'} item`}>
            <p className={`title ${!isMobile&&'desktop-title'}`}>{title}</p>
            <p className={`content ${!isMobile&&'desktop-content'}`}>{content}</p>
        </div>
    )
}

export default Item;