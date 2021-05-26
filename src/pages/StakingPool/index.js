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

const StakingPool = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const isXSMobile = useMediaQuery({ query: `(max-width: 390px)` });
    return (
        <div className="flex flex-col items-center justify-center">
            <div className={`flex items-center justify-center headerWrapper ${!isMobile&&'desktop'}`}>
                <Header text="Staking Pool" className="bottom-bordered mt-3" color="#FAFAFA" isMobile={isMobile} />
            </div>
            <div className={`judges flex flex-wrap justify-center align-items-center ${!isMobile?'desktop space-x-20':(isXSMobile?'space-y-8':'space-x-8')}`}>
                {judges.map((judge, idx) => {
                    return (
                        <JudgeBox key={idx} idx={idx} data={judge} isMobile={isMobile} />
                    )
                })}
            </div>
            <div className="flex flex-col px-10" style={{maxWidth: isMobile&&'720px'}}>
                <div className={`how-work flex flex-col items-center ${!isMobile&&'desktop'}`}>
                        <Header text="How does Judgement staking platform work?" size="sm" className="paddingTop50 text-center" isMobile={isMobile} />
                    <span className="description">There are two ways to stake on our platform.</span>
                </div>
                <div className={`how-work-description flex flex-col ${!isMobile&&'desktop'}`}>
                    <span className="description"><span className="first-text">1</span>Stake our tradable token <span className="tag">$JUDGE</span>. Whenever you stake $JUDGE, you will earn <span className="tag">$REDEEM</span> tokens. $REDEEM tokens can be redeemed for our NFTs in the NFT Redemption section of our App.</span>
                    <span className="description"><span className="first-text">2</span>Stake <span className="tag">$JUDGE/ETH LP V2</span> tokens. By this option, not only do you earn $REDEEM tokens, but you will earn $JUDGE tokens as well. You will be able to see the amount of $JUDGE and $REDEEM you are earning via our interactive, personalized dashboard.</span>
                </div>
            </div>
        </div>
    )
}

export default StakingPool