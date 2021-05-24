import React from 'react'
import {useMediaQuery} from 'react-responsive'
import VideoLooper from 'react-video-looper'

import Header from '../../components/Header'
import Description from '../../components/Description'
import Button from '../../components/Button'
import Item from '../../components/Item'
import RoadmapTitle from '../../components/RoadmapTitle'
import RoadmapContent from '../../components/RoadmapContent'

import './index.scss'

import HomeVideo from '../../assets/images/HomePage.mp4'
import Customer1 from '../../assets/images/customer1.png'
import Customer1Desktop from '../../assets/images/customer1@desktop.png'
import Customer2 from '../../assets/images/customer2.png'
import Customer2Desktop from '../../assets/images/customer2@desktop.png'
import Customer3 from '../../assets/images/customer3.png'
import Customer3Desktop from '../../assets/images/customer3@desktop.png'

const Home = () => {
    const isSMDesktop = useMediaQuery({ query: `(max-width: 1420px)` });
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const isXSMobile = useMediaQuery({ query: `(max-width: 390px)` });
    const [readmore, setReadMore] = React.useState(!isMobile||false)
    const texts1 = ["Auditing of contracts", "First NFT's minted", "Launch of the PreSale", "Locking of Liquidity for 1 year", "Platform goes live", "LP tokens and $JUDGE staking pools go live", " Uniswap listing", "First Crypto personalities put forward to the Community Court", "First publicly-voted NFTs created"]
    const texts2 = ["Further personalities put forward to the Community Court", "Launch of our NFT Marketplace", " Integration with NFT20.io to allow tokenization & further liquidity to our NFTs", "Opening of pools for other ERC20 token holders to earn customized NFTs around their project ideals", "Exchange listings", "Community voting around our selection of the next 'World' to be put up for Judgement", "Guest Artists"]
    const texts3 = ["Launch of community-voted New World", "Introduction of governance mechanism", " Marketplace expansion to include other NFTs", "Cross-chain capabilities", " In-house tokenization of Judgement NFTs, to increase liquidity and value"]
    return (
        <div>
            <VideoLooper source={HomeVideo} start={0} end={1.8} width={'100vw'} height={isMobile?'56vw':'calc(100vh - 112px)'} objectFit={'cover'} loopCount={1000} autoplay={true} />
            <div id="introduction" className={`introduction flex flex-wrap ${isMobile&&'items-center'} justify-center ${!isMobile&&'desktop'}`}>
                <div className="left-side">
                    <Header text="Introduction" isMobile={isMobile} />
                    <Description className="mt-2-c" maxWidth={`${isMobile?'200px':'554px'}`} isMobile={isMobile} text="Judgement Finance is an interactive, next-generation NFT, staking, and marketplace platform that allows users to decide who will become a Hero and who will become a Villain!" />
                    <Button className="mt-2-c" text="Our Whitepaper" isMobile={isMobile} />
                </div>
                <div className="right-side flex flex-col justify-center items-center">
                    <Description className="bordered" maxWidth={`${isMobile?'280px':'868px'}`} isMobile={isMobile} text="Initially focusing upon well-known personalitiesin the crypto space, people are brought before the 'Community Court', and token holders decide their fate!" />
                    <div className="flex flex-col">
                        <Description className="mt-3-c" maxWidth={`${isMobile?'220px':'740px'}`} isMobile={isMobile} text="Judgement Finance is a fully-working,fully-audited platform with guarantee locking of liquidity via our sale on the Unicrypt Network." />
                        {readmore&&(
                            <>
                                <Description className="mt-3-c" isMobile={isMobile} maxWidth={`${isMobile?'220px':'740px'}`} text="Our NFTs are designed to be fun, unique, and a little esoteric. You'll find small hidden references to events that you won't find with other projects." />
                                <Description className="mt-3-c" isMobile={isMobile} maxWidth={`${isMobile?'220px':'740px'}`} text="Our team is also public, and previous projects have brought investors excellent returns, giving you the confidence to invest without fear of inappropriate conduct." />
                                <span className={`${!isMobile&&'desktop-description'} normal mt-3-c rounded-full`} style={{maxWidth:`${isMobile?'220px':'740px'}`}}>The crypto space is only the beginning. In quarter two of 2021, we will begin our expansion into other worlds. Will it be Sports? Politics? Entertainment? Gaming?{!isMobile&&<span className={`${!isMobile&&'desktop-description'} highlight`}>You be the judge!</span>}</span>
                                {!isMobile&&<hr style={{width: '450px', border:'1px solid #FAFAFA', borderRadius:"2px"}} />}
                            </>
                        )
                        }
                        {isMobile&&<span onClick={() => setReadMore(!readmore)} className="read-more">Read more</span>}
                    </div>
                </div>
            </div>
            <div id="how-it-works" className="how-it-works flex flex-wrap items-center justify-center" style={{gap: !isMobile&&'158px', paddingTop: !isMobile&&'150px'}}>
                {isMobile?<img src={Customer1} alt="customer" style={{marginLeft: '-70px'}} />:<img src={Customer1Desktop} width="440px" alt="customer" />}
                <div className={`flex flex-col gap-2-c right-side px-4 ${!isMobile&&'items-start'}`} style={{marginLeft: `${isMobile&&!isXSMobile&&!isSMDesktop&&'-50px'}`, marginBottom: '20px'}}>
                    <Header text="How it works" isMobile={isMobile} />
                    <span className={`${!isMobile&&'desktop-description'} normal`} style={{maxWidth: `${isMobile?'320px':'895px'}`}}>The Judgement platform is where you go to stake our native&nbsp;<span className={`${!isMobile&&'desktop-description'} highlight`}>$JUDGE</span>&nbsp;token in order to earn&nbsp;<span className={`${!isMobile&&'desktop-description'} highlight`}>$REDEEM</span>&nbsp;tokens that can be swapped for our NFTs. Our platform also supports liquidity-token staking, where you can earn both $JUDGE and $REDEEM, where you’ll find our Community Court as well as our NFT Redemption page and NFT Marketplace. To know about how our platform works you can read through below article.</span>
                    <Button text="Medium Article" isMobile={isMobile} />
                </div>
            </div>
            <div id="tokenomics" className={`${!isMobile&&'tokenomics-desktop'} tokenomics flex flex-wrap items-center justify-center`} style={{paddingTop: !isMobile&&'200px'}}>
                <div className="left-side flex flex-col gap-2-c">
                    <Header text="Tokenomics" isMobile={isMobile} />
                    <Description isMobile={isMobile} text="There are two tokens within our ecosystem." />
                    <span style={{maxWidth: `${isMobile?'202px':'564px'}`}} className={`${!isMobile&&'desktop-description'} normal`}>Our main token is&nbsp;<span className={`${!isMobile&&'desktop-description'} highlight`}>$JUDGE</span>, which is our tradable token and what you can buy and sell on Uniswap (other exchanges will follow)</span>
                    <span style={{maxWidth: `${isMobile?'202px':'564px'}`}} className={`${!isMobile&&'desktop-description'} normal`}>We also have the&nbsp;<span>$REDEEM</span>&nbsp;token within our platform. This can only be used to exchange for NFTs found in our Redemption section. It has no other function or transferability.</span>
                    <Description isMobile={isMobile} maxWidth={`${isMobile?'202px':'564px'}`} text="The sole utility of the $REDEEM token is to swap for Judgement NFTs. It is not transferable outside of our platform." />
                    <hr style={{width: '66px', border:'1px solid #FAFAFA', borderRadius:"2px"}} />
                </div>
                <div className="right-side flex flex-col gap-4">
                    <p className={`${!isMobile&&'judge-header-desktop'} judge-header uppercase`}>$Judge</p>
                    <div className={`${!isMobile&&'judge-desktop'} judge flex flex-wrap`}>
                        <Item title="100K" content="Initial Supply" isMobile={isMobile} />
                        <Item title="124K" content="Maximum Supply" isMobile={isMobile} />
                        <Item title="3.3K" content="Private Sale" isMobile={isMobile} />
                        <Item title="54K" content="PreSale" isMobile={isMobile} />
                        <Item title="28.8K" content="Initial Uniswap Liquidity" isMobile={isMobile} />
                        <Item title="7K" content="Team Tokens" isMobile={isMobile} />
                        <Item title="6.9K" content="Marketing Tokens" isMobile={isMobile} />
                        <Item title="24K" content="Staking Rewards" isMobile={isMobile} />
                    </div>
                    <p className={`${!isMobile&&'judge-header-desktop'} judge-header uppercase`} style={{paddingTop: !isMobile&&'42px'}}>$Redeem</p>
                    <div className={`${!isMobile&&'judge-desktop'} judge flex flex-wrap items-end`}>
                        <Item title="180K" content="First Two Months" isMobile={isMobile} />
                        <Item title="90K" content="Month Thereafter" isMobile={isMobile} />
                        <Item title="1800K" content="Maximum Supply" isMobile={isMobile} />
                        <span className={`${!isMobile&&'emission-rate-desktop'} emission-rate`}>* Emission Rate</span>
                    </div>
                </div>
            </div>
            <div id="presale" className="presale flex flex-wrap items-center justify-center" style={{gap:`${isMobile?'unset':'158px'}`, paddingTop: !isMobile&&'200px'}}>
                {isMobile?<img src={Customer2} alt="Customer" style={{marginLeft: '-70px'}} />:<img src={Customer2Desktop} width="440px" alt="customer" />}
                <div className="right-side flex flex-col gap-2-c px-4" style={{marginLeft: `${(isMobile&&!isXSMobile&&!isSMDesktop)&&'-50px'}`, marginBottom: '20px'}}>
                    <Header text="Presale" isMobile={isMobile} />
                    <span className={`${!isMobile&&'desktop-description'} normal`} style={{maxWidth: `${isMobile?'250px':'820px'}`}}>Our presale will be held on&nbsp;<span className={`${!isMobile&&'desktop-description'} highlight`}>Unicrypt.network</span>&nbsp;to ensure that liquidity will be locked</span>
                    <span className={`${!isMobile&&'desktop-description'} normal`} style={{maxWidth: `${isMobile?'250px':'820px'}`}}>We will be looking over&nbsp;<span className={`${!isMobile&&'desktop-description'} highlight`}>$1M USD</span>&nbsp;in liquidity for the first year.</span>
                    <div className="table flex px-3 py-2 gap-1">
                        <div className="flex justify-between w-full">
                            <span className={`${!isMobile&&'desktop-description'} highlight uppercase`}>Presalre Rate</span>
                            <span className={`${!isMobile&&'desktop-description'} normal uppercase`}>54K $Judge</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span className={`${!isMobile&&'desktop-description'} highlight uppercase`}>At a price of</span>
                            <span className={`${!isMobile&&'desktop-description'} normal uppercase`}>90 $Judge per ETH</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span className={`${!isMobile&&'desktop-description'} highlight uppercase`}>Uniswap listing rate</span>
                            <span className={`${!isMobile&&'desktop-description'} normal uppercase`}>80 $Judge per ETH</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="roadmap" className="roadmap flex flex-wrap justify-center items-center" style={{paddingTop: !isMobile&&'200px', gap: !isMobile&&'270px'}}>
                <img src={isMobile?Customer3:Customer3Desktop} alt="customer" width={`${!isMobile?'400px':'unset'}`} />
                <div className="flex flex-col">
                    <Header text="Roadmap" isMobile={isMobile} />
                    <div className="roadmap-content" style={{paddingTop: '15px'}}>
                        <RoadmapTitle titleTag="Q1" titleYear="2021" isMobile={isMobile} />
                        <RoadmapContent texts={texts1} isMobile={isMobile} />
                        <RoadmapTitle titleTag="Q2" titleYear="2021" isMobile={isMobile} />
                        <RoadmapContent texts={texts2} isMobile={isMobile} />
                        <RoadmapTitle titleTag="Q3" titleYear="2021" isMobile={isMobile} />
                        <RoadmapContent texts={texts3} isMobile={isMobile} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home