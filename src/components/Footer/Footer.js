import React from "react";
import "./Footer.css";
import { SocialMediaIconsReact } from "social-media-icons-react";

const Footer = () => {
  return (
    <>
      <div className="Footer_main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
            <ul>
          <li className="Heading_footer"><h2> About </h2></li>
          <li className="content_footer"> About Us </li>
          <li className="content_footer"> Terms Of Use</li>
          <li className="content_footer"> Privacy Policy </li>
          <li className="content_footer"> Web Map </li>
        </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
            <ul>
        <li className="Heading_footer"><h2> Contact Us </h2></li>
        <li className="content_footer"> Business </li>
        <li className="content_footer"> Author Brand </li>
        <li className="content_footer"> Contact Detail </li>
        <li className="content_footer"> DMCA </li>
        </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
            <ul><li className="Heading_footer"><h2> Resources </h2></li>
          <li className="content_footer"> Writer Benefit </li>
         <li className="content_footer"> FAQ</li>
        <li className="content_footer"> Content Policy </li>
        </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
            <ul>
          <li className="Heading_footer"><h2> Fanfiction </h2></li>
          <div className="footerIcons">
            <div>
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                borderWidth="0"
                borderStyle="solid"
                icon="twitter"
                iconColor="rgba(245,241,241,1)"
                backgroundColor="rgba(166,161,161,1)"
                iconSize="3"
                roundness="49%"
                url="https://www.twitter.com/"
                size="30"
              />
            </div>

            <div className="instaIcon">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                borderWidth="0"
                borderStyle="solid"
                icon="instagram"
                iconColor="rgba(245,241,241,1)"
                backgroundColor="rgba(166,161,161,1)"
                iconSize="3"
                roundness="49%"
                url="https://www.instagram.com/"
                size="30"
              />
            </div>
            <div>
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                borderWidth="0"
                borderStyle="solid"
                icon="facebook"
                iconColor="rgba(245,241,241,1)"
                backgroundColor="rgba(166,161,161,1)"
                iconSize="3"
                roundness="49%"
                url="https://www.facebook.com/"
                size="30"
                margin-left='10px'
              />
            </div>
          </div>
        </ul>
            </div>
          </div>
         </div>
      </div>
    </>
  );
};

export default Footer;
