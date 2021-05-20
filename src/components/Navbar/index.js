import React from 'react'

import './index.scss'

import Logo from '../../assets/images/logo.png'
import LogoDesktop from '../../assets/images/logo@2x.png'
import LogoText from '../../assets/images/judgement.finance.png'
import LogoTextDesktop from '../../assets/images/judgement.finance@2x.png'
import Hamburger from '../../assets/images/hamburger.png'

const Navbar = ({isMobile, isXSMobile, isSMDesktop}) => {
    const [open, setOpen] = React.useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    return (
        <nav className={`px-5 py-1 flex justify-between items-center navbar ${!isMobile&&'desktop'}`}>
            <div className="flex items-center justify-center gap-2-c">
                <img src={isMobile?Logo:LogoDesktop} alt="logo" />
                {isMobile?(!isXSMobile&&<img src={LogoText} alt="logo" />):(<img src={LogoTextDesktop} alt="logo" />)}
            </div>
            <div className={`flex gap-5 items-center destkop links`}>
                <button className={`btn-launch ${!isMobile&&'desktop'} bg-red-c focus:outline-none hover:opacity-75`} style={{order: isSMDesktop&&'10'}}>Launch App</button>
                {isSMDesktop?<span className="cursor-pointer" onClick={toggle}><img src={Hamburger} alt="hamburger" /></span>:
                    <div className="flex nav-links">
                        <a href="#introduction" className="nav-link">Introduction</a>
                        <a href="#how-it-works" className="nav-link">How it works</a>
                        <a href="#tokenomics" className="nav-link">Takenomics</a>
                        <a href="#presale" className="nav-link">Presale</a>
                        <a href="#roadmap" className="nav-link">Roadmap</a>
                    </div>}
            </div>
            {open&&(<div className="flex flex-col fixed font-bold font-mons py-5 gap-5 items-center z-10 w-full h-full bg-black left-0 top-0 text-white">
                <div className="flex items-center justify-between w-full px-5">
                    <img src={Logo} alt="logo" />
                    <span className="cursor-pointer" onClick={() => setOpen(false)}>X</span>
                </div>
                <a href="#introduction" className="nav-link" onClick={() => setOpen(false)}>Introduction</a>
                <a href="#how-it-works" className="nav-link" onClick={() => setOpen(false)}>How it works</a>
                <a href="#tokenomics" className="nav-link" onClick={() => setOpen(false)}>Takenomics</a>
                <a href="#presale" className="nav-link" onClick={() => setOpen(false)}>Presale</a>
                <a href="#roadmap" className="nav-link" onClick={() => setOpen(false)}>Roadmap</a>
                {!isXSMobile&&<button className={`btn-launch ${!isMobile&&'desktop'} bg-red-c focus:outline-none hover:opacity-75`}>Launch App</button>}
            </div>)}
        </nav>
    )
}

export default Navbar