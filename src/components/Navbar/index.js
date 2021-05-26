import React from 'react'
import {withRouter} from 'react-router'

import './index.scss'

import Logo from '../../assets/images/logo.png'
import LogoDesktop from '../../assets/images/logo@2x.png'
import LogoText from '../../assets/images/judgement.finance.png'
import LogoTextDesktop from '../../assets/images/judgement.finance@2x.png'
import Hamburger from '../../assets/images/hamburger.png'

const Navbar = (props) => {
    const {isMobile, isXSMobile, isSMDesktop, location} = props;
    const [open, setOpen] = React.useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    return (
        <nav className={`px-5 py-1 flex justify-between items-center navbar ${!isMobile&&'desktop'}`}>
            <div className="flex items-center justify-center space-x-3">
                <a href="/"><img src={isMobile?Logo:LogoDesktop} alt="logo" /></a>
                {isMobile?(!isXSMobile&&<a href="/"><img src={LogoText} alt="logo" /></a>):(<a href="/"><img src={LogoTextDesktop} alt="logo" /></a>)}
            </div>
            <div className={`flex items-center destkop links ${isMobile?'space-x-5':'space-x-12'}`}>
                <button className={`btn-launch ${!isMobile&&'desktop'} bg-red-c focus:outline-none hover:opacity-75`} style={{order: isSMDesktop?'0':'10', marginLeft:"48px"}}>{location.pathname.includes("/home")?'Launch App':'Connect'}</button>
                {isSMDesktop?<span className="cursor-pointer" onClick={toggle}><img src={Hamburger} alt="hamburger" width={!isMobile&&'35px'} /></span>:(
                    <div className="flex nav-links space-x-8">
                        <a href="/community-court" className="nav-link">Community Court</a>
                        <a href="/home/#introduction" className="nav-link">Introduction</a>
                        <a href="/home/#how-it-works" className="nav-link">How it works</a>
                        <a href="/home/#tokenomics" className="nav-link">Takenomics</a>
                        <a href="/home/#presale" className="nav-link">Presale</a>
                        <a href="/home/#roadmap" className="nav-link">Roadmap</a>
                    </div>
                )}
            </div>
            {open&&(<div className="flex flex-col fixed font-bold font-mons py-5 space-y-5 items-center z-10 w-full h-full bg-black left-0 top-0 text-white">
                <div className="flex items-center justify-between w-full px-5">
                    <img src={Logo} alt="logo" width={!isMobile&&'80px'} />
                    <span className="cursor-pointer md:text-4xl" onClick={() => setOpen(false)}>X</span>
                </div>
                <a href="/community-court" className="nav-link md:text-4xl">Community Court</a>
                <a href="/home/#introduction" className="nav-link md:text-4xl" onClick={() => setOpen(false)}>Introduction</a>
                <a href="/home/#how-it-works" className="nav-link md:text-4xl" onClick={() => setOpen(false)}>How it works</a>
                <a href="/home/#tokenomics" className="nav-link md:text-4xl" onClick={() => setOpen(false)}>Takenomics</a>
                <a href="/home/#presale" className="nav-link md:text-4xl" onClick={() => setOpen(false)}>Presale</a>
                <a href="/home/#roadmap" className="nav-link md:text-4xl" onClick={() => setOpen(false)}>Roadmap</a>
                {<button className={`btn-launch ${!isMobile&&'desktop'} bg-red-c focus:outline-none hover:opacity-75`}>{location.pathname.includes("/home")?'Launch App':'Connect'}</button>}
            </div>)}
        </nav>
    )
}

export default withRouter(Navbar)