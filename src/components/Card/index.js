import React from 'react';

import './index.scss'

const Card = ({image, color, className, isMobile}) => {
    return (
        <div className={`flex flex-col card ${!isMobile&&'desktop'}`}>
            <div className='image' style={{borderColor: color}}>
                {image&&<img src={image} alt="card" />}
            </div>
            <span className="tag text-center">Redeem</span>
            <span className="amount text-center" style={{backgroundColor: color}}>10 $REDEEM</span>
        </div>
    )
}

export default Card