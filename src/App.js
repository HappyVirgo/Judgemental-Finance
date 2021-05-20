import React from 'react';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import {useMediaQuery} from 'react-responsive'

import Home from './pages/Home'
import SkatingPool from './pages/SkatingPool'
import CommunityCourt from './pages/CommunityCourt'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './App.scss'

import './assets/css/tailwind.css';
import './assets/scss/app.scss';

function App() {
  const isSMDesktop = useMediaQuery({ query: `(max-width: 1420px)` });
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const isXSMobile = useMediaQuery({ query: `(max-width: 390px)` });

  return (
    <div className="bg-black-c">
      <BrowserRouter>
        <Navbar isMobile={isMobile} isXSMobile={isXSMobile} isSMDesktop={isSMDesktop} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/skating-pool" component={SkatingPool} />
          <Route path="/community-court" component={CommunityCourt} />
          <Redirect from="/" to="/home" />
        </Switch>
        <Footer isMobile={isMobile} />
      </BrowserRouter>
    </div>
  );
}

export default App;
