import React from 'react'
import { useMediaQuery } from 'react-responsive';

import Header from '../../components/Header';
import Card from '../../components/Card'
import Reactangle12 from '../../assets/images/Rectangle 12.png'
import Reactangle20 from '../../assets/images/Rectangle 20.png'
import Reactangle202x from '../../assets/images/Rectangle 20@2x.png'
import Avarta1 from '../../assets/images/avatar1.png'
import Avarta12x from '../../assets/images/avatar1@2x.png'
import Avarta2 from '../../assets/images/avatar2.png'
import Avarta22x from '../../assets/images/avatar2@2x.png'
import VSIcon from '../../assets/images/vs-icon.png'
import CardImage from '../../assets/images/card.png'
import CardImage2x from '../../assets/images/card@2x.png'

import './index.scss'

const CommunityCourt = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });
    const isXSMobile = useMediaQuery({ query: `(max-width: 390px)` });
    return (
        <div className={`flex flex-col items-center community-court ${!isMobile&&'desktop'}`}>
            <Header text="community court" className="bottom-bordered marginTop15" color="#FAFAFA" isMobile={isMobile} />
            <div className={`flex flex-wrap items-end justify-center paddingTop50 ${isMobile?(isXSMobile?'space-y-5':'space-x-5'):'space-x-24'}`}>
                <img src={Reactangle12} width={`${isMobile?'162':'418'}`} alt="rectangle" />
                <div className="flex flex-col">
                    <span className="description">Aucting ends in</span>
                    <div className="flex flex-col">
                        <div className="flex space-x-3">
                            <span className="limit-time">12</span>
                            <span className="limit-time">:</span>
                            <span className="limit-time">38</span>
                            <span className="limit-time">:</span>
                            <span className="limit-time">10</span>
                        </div>
                        <div className={`flex ${isMobile?'space-x-4':'space-x-8'}`}>
                            <span className="limit-time-tag">Hours</span>
                            <span className="limit-time-tag">Minutes</span>
                            <span className="limit-time-tag">Seconds</span>
                        </div>
                    </div>
                    <Header text="Paradise Circus" isMobile={isMobile} />
                    <div className={`flex items-center images pt-2 ${isMobile?'space-x-4':'space-x-10'}`}>
                        <div className={`flex flex-col ${isMobile?'space-y-2':'space-y-6'}`}>
                            <img src={isMobile?Avarta1:Avarta12x} alt="avatar" className="avatar avatar-yellow" />
                            <span className="badge badge-yellow text-center">34</span>
                        </div>
                        <img src={VSIcon} alt="vs" style={{marginTop:'-20px', width:!isMobile&&'60px'}} />
                        <div className={`flex flex-col ${isMobile?'space-y-2':'space-y-6'}`}>
                            <img src={isMobile?Avarta2:Avarta22x} alt="avatar" className="avatar avatar-red" />
                            <span className="badge badge-red text-center">12</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex ${isXSMobile?'flex-col space-y-4':'space-x-6'}`} style={{marginTop: isMobile?'65px':'281px', marginLeft: isXSMobile?'0px':(isMobile?'-65px':'-118px')}}>
                <div style={{marginTop:!isXSMobile&&(isMobile?'5px':'15px')}}><span className={`hero ${!isMobile&&'desktop'} ${!isXSMobile&&'mobile'}`}>Hero</span></div>
                <div className={`flex ${isMobile?'space-x-6':'space-x-40'}`}>
                    <Card color="#F7B038" image={isMobile?Reactangle20:Reactangle202x} isMobile={isMobile} />
                    <Card color="#F7B038" image={isMobile?Reactangle20:Reactangle202x} isMobile={isMobile} />
                    <Card color="#F7B038" image={isMobile?Reactangle20:Reactangle202x} isMobile={isMobile} />
                    <Card color="#F7B038" image={isMobile?Reactangle20:Reactangle202x} isMobile={isMobile} />
                </div>
            </div>
            <div className={`flex ${isXSMobile?'flex-col space-y-4':'space-x-6'} ${isXSMobile&&'items-end'}`} style={{paddingBottom: isMobile?'50px':'320px', marginRight: isXSMobile?'0px':(isMobile?'-65px':'-118px')}}>
                <div className={`flex ${isMobile?'space-x-6':'space-x-40'}`} style={{paddingTop: isMobile?'25px':'200px'}}>
                    <Card image={isMobile?CardImage:CardImage2x} color="#F73843" isMobile={isMobile} />
                    <Card image={isMobile?CardImage:CardImage2x} color="#F73843" isMobile={isMobile} />
                    <Card image={isMobile?CardImage:CardImage2x} color="#F73843" isMobile={isMobile} />
                    <Card image={isMobile?CardImage:CardImage2x} color="#F73843" isMobile={isMobile} />
                </div>
                <div style={{marginTop: !isXSMobile&&(isMobile?'35px':'230px')}}><span className={`villain ${!isMobile&&'desktop'} ${!isXSMobile&&'mobile'}`}>Villain</span></div>
            </div>
        </div>
    )
}

export default CommunityCourt