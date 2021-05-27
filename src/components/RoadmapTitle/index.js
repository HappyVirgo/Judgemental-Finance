import React from 'react';

import './index.scss'

const RoadmapTitle = ({titleTag, titleYear, isMobile}) => {
    return (
        <div className={`flex items-center roadmap-title ${isMobile?'space-x-1':'space-x-24'} ${!isMobile&&'desktop'}`}>
            <div className="relative" style={{width: `${isMobile?'16px':'68px'}`, height: `${isMobile?'16px':'68px'}`}}>
                <div className={`w-4 h-4 bg-red-c absolute rounded-full ${!isMobile&&'outCircle'}`}></div>
                <div className={`w-2 h-2 bg-white absolute rounded-full m-1 ${!isMobile&&'innerCircle'}`}></div>
            </div>
            <span className={`${!isMobile&&'desktop'} tag`}>{titleTag}&nbsp;<span className={`${!isMobile&&'desktop'} year`}>{titleYear}</span></span>
        </div>
    )
}

export default RoadmapTitle