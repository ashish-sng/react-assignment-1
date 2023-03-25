import React from "react";
import "./Header.css";
import picture from "./logos/picture.png";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <div className="header-text">
          {/* <h1> */}
            An inspiring design delivered to<br/>
            inbox every morning
          {/* </h1> */}
        </div>
        <div className="text">
          Our team scouts the internet for the best designs,<br/>
          illustrations and art and delivers a truly inspiring<br/>
          one every day to your inbox.
        </div>
        <div className="just-text">
          <b>Show me how it looks</b>
        </div>
        <div className="buttons">
          <button className="button1">Your e-mail address</button>
          <button className="button2">Register</button>
        </div>
        <div className="just-another-text">
          Free - No Spam - No Data Sharing
        </div>
      </div>
      <div className="right">
        <img src={picture} alt="logo" className="picture" />
      </div>
    </div>
  );
}

export default Header;
