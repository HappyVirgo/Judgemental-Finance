import React from 'react';

import './index.scss'

const RoadmapContent = ({texts, isMobile}) => {
    return (
        <div className={`${!isMobile&&'desktop space-y-4'} roadmap-texts flex flex-col space-y-1`}>
        {texts.map((text, idx) => {
            return (
                <p className={`${!isMobile&&'desktop'} roadmap-text`} key={idx}>
                    {text}
                </p>
            )
        })}
        </div>
    )
}

export default RoadmapContent