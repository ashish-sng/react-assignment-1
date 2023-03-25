import React from 'react'
import './Footer.css'
import { arr, arr2 } from './constants/text'
import Texter from './textHelper/Texter'
import logo1 from './logos/InstagramLogo.png'
import logo2 from './logos/LinkedinLogo.png'

function Footer() {
  return (
    <div className="footer">
      <div className="f-left">
        {arr.map((item) => {
          return <Texter text={item} />;
        })}
      </div>
      <div className="f-right">
        {arr2.map((item) => {
          return <Texter text={item} />;
        })}
        <div className="f-logo">
          <img src={logo1} alt="logo1" />
          <img src={logo2} alt="logo2" />
        </div>
        <br />
        <div style={{ color: 'white',fontSize:'1.2rem' }}>
          <span>hello Dweep.io</span>
        </div>
      </div>
    </div>
  );
}

export default Footer