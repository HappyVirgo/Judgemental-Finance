import React from 'react';

import './index.scss'

const RoadmapContent = ({texts, isMobile}) => {
    return (
        <div className={`${!isMobile&&'desktop'} roadmap-texts flex flex-col`}>
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