import React from 'react';

import './index.scss'

const JudgeBox = ({data, idx, isMobile}) => {
    const [show, setShow] = React.useState(false);
    const showDetails = () => {
        setShow(!show);
    }
    return (
        <div>
            <div className="space-x-3 flex items-center pl-3">
                <span className={`tag uppercase ${!isMobile&&'desktop'}`}>Current ARP</span>
                <span className={`arp ${!isMobile&&'desktop'}`}>{data.curArp}$</span>
            </div>
            <div className={`skating-card flex flex-col items-center ${!isMobile&&'desktop'}`}>
                <div className="flex usdt-wrapper" style={{paddingTop:isMobile?'12px':'42px'}}>
                    <span className="white-tag">USDT_JUDGE</span>
                    <div className="flex tvl-wrapper">
                        <span className="white-tag">TVL</span>
                        <span className="tvl">{data.tvl}$</span>
                    </div>
                </div>
                <div className={`flex ${isMobile?'space-x-6':'space-x-4'}`} style={{paddingTop:!isMobile&&'46px'}}>
                    <div className={`box stacked-box flex flex-col ${isMobile?'space-y-1':'space-y-3'} ${!isMobile&&'desktop'}`}>
                        <span className="title">Staked USD</span>
                        <span className="amount">${data.stacked}</span>
                        <span className={`description ${!isMobile&&'desktop'}`}>({data.stacked} LP Token)</span>
                    </div>
                    <div className={`box earned-box flex flex-col ${isMobile?'space-y-1':'space-y-3'} text-right ${!isMobile&&'desktop'}`}>
                        <span className="title">JUDGE Earned</span>
                        <span className="amount">{data.earned}</span>
                        <span className={`description ${!isMobile&&'desktop'}`}>(${data.earned})</span>
                    </div>
                </div>
                <div className="flex flex-col" style={{paddingTop: isMobile?'':'75px'}}>
                    <div className="flex items-center justify-between">
                        <span className={`description ${!isMobile&&'desktop'}`}>wallet : {data.wallet}$</span>
                        <span className={`badge ${!isMobile&&'desktop'}`}>max</span>
                    </div>
                    <input type="text" placeholder="Enter amount" className={`amount-input p-1 placeholder-white text-center ${!isMobile&&'desktop'}`} />
                    <button className={`connect-button pt-1 ${!isMobile&&'desktop'}`}>connect wallet</button>
                    <span className={`details-text pb-3 text-center items-center ${!isMobile&&'desktop'}`} onClick={showDetails}>
                        Details
                        <svg className="box__arrow inline ml-2" style={{transform: show&&'rotate(180deg)'}} width={isMobile?"16":"20"} height={isMobile?"16":"20"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 5L8 10.5L2.5 5" stroke="white" stroke-width="1.5"></path>
                        </svg>
                    </span>
                    {show&&<div className="flex flex-col">
                        <div className={`detail flex justify-between items-center ${!isMobile&&'desktop'}`}>
                            <span className="details-tag">Staked</span>
                            <span className="amount">0 LP tokens ($0)</span>
                        </div>
                        <div className={`detail flex justify-between items-center ${!isMobile&&'desktop'}`}>
                            <span className="details-tag">XFIT earned</span>
                            <span className="amount">0 JUDGE ($0)</span>
                        </div>
                        <div className={`detail flex justify-between items-center ${!isMobile&&'desktop'}`}>
                            <span className="details-tag">Rewards harvested</span>
                            <span className="amount">0 JUDGE ($0)</span>
                        </div>
                        <div className={`detail flex justify-between items-center ${!isMobile&&'desktop'}`}>
                            <span className="details-tag">Pool share</span>
                            <span className="amount">0%</span>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default JudgeBox;