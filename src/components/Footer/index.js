import React from 'react'

import './index.scss'

import Twitter from '../../assets/images/twitter.png'
import TwitterDesktop from '../../assets/images/twitter@2x.png'
import TelegramDesktop from '../../assets/images/telegram_app1@2x.png'
import Telegram from '../../assets/images/telegram_app1.png'

const Footer = ({isMobile}) => {
    return (
        <footer className={`flex justify-between items-center bg-red-c footer ${!isMobile&&'desktop'}`}>
            <div>
                <p className={`header font-bold`}>judgement finance</p>
                <p className="copyright">Copyright © 2021 Judgement. All Rights Reserved.</p>
            </div>
            <div className="social-links flex gap-3">
                <a href="/"><img src={isMobile?Telegram:TelegramDesktop} alt="telegram" /></a>   
                <a href="/"><img src={isMobile?Twitter:TwitterDesktop} alt="twitter" /></a>
                <a href="/"><img src={isMobile?Telegram:TelegramDesktop} alt="telegram" /></a>
            </div>
        </footer>
    )
}

export default Footer