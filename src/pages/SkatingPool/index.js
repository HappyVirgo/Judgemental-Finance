import React from 'react'
import {useMediaQuery} from 'react-responsive'

import JudgeBox from '../../components/JudgeBox'
import Header from '../../components/Header'

import './index.scss'

const judges = [
    {
        curArp: 150,
        tvl: 120,
        stacked: 0,
        earned: 0,
        wallet: 100
    },
    {
        curArp: 150,
        tvl: 120,
        stacked: 0,
        earned: 0,
        wallet: 100
    }
]

const SkatingPool = () => {
    const isSMDesktop = useMediaQuery({ query: `(max-width: 1420px)` });
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const isXSMobile = useMediaQuery({ query: `(max-width: 390px)` });
    return (
        <div className="flex flex-col items-center justify-center">
            <div className={`flex items-center justify-center headerWrapper ${!isMobile&&'desktop'}`}>
                <Header text="Skating Pool" className="bottom-bordered mt-3" color="#FAFAFA" isMobile={isMobile} />
            </div>
            <div className={`judges flex flex-wrap justify-center align-items-center ${!isMobile&&'desktop'}`}>
                {judges.map((judge, idx) => {
                    return (
                        <JudgeBox key={idx} idx={idx} data={judge} isMobile={isMobile} />
                    )
                })}
            </div>
            <div className="flex flex-col">
                <div className={`how-work flex flex-col items-center ${!isMobile&&'desktop'}`}>
                    <div className={`headerWrapper ${!isMobile&&'desktop'} text-center`}>
                        <Header text="How does Judgement staking platform work?" className="paddingTop50 text-center" isMobile={isMobile} />
                    </div>
                    <span className="description">There are two ways to stake on our platform.</span>
                </div>
                <div className={`how-work-description flex flex-col ${!isMobile&&'desktop'}`}>
                    <span className="description"><span className="first-text">1</span>Stake our tradable token <span className="tag">$JUDGE</span>. Whenever you stake $JUDGE, you will earn <span className="tag">$REDEEM</span> tokens. $REDEEM tokens can be redeemed for our NFTs in the NFT Redemption section of our App.</span>
                    <span className="description"><span className="first-text">1</span>Stake our tradable token <span className="tag">$JUDGE</span>. Whenever you stake $JUDGE, you will earn <span className="tag">$REDEEM</span> tokens. $REDEEM tokens can be redeemed for our NFTs in the NFT Redemption section of our App.</span>
                </div>
            </div>
        </div>
    )
}

export default SkatingPool