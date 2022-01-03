import React from 'react'
import {BiPhoneCall} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";
import { ReactComponent as Fbicon } from "./../../../assets/fbicon.svg";
import { ReactComponent as Instaicon } from "./../../../assets/instaicon.svg";
import { ReactComponent as Twittericon } from "./../../../assets/twittericon.svg";

import './../ContactDetail/ContactDetail.css'
function ContactDetail() {
    return (
        <div className='container'>
    <div class="contactus_box ">
      <div class="contactus_title">
        <div className="container">
        <h1> Contact Us </h1>
      </div>
        </div>
        
      <div className="contactus_content">
      <div className="container">
        <div class="contactus_text">
          <div>
              
        <BiPhoneCall style={{ color: "white", backgroundColor: " black", borderRadius: "30px", width: "40px",  height: " 40px",}} />

        <p> (+91) 9000000000</p>
          </div>
          <div>
        <AiOutlineMail style={{ color: "white", backgroundColor: " black", borderRadius: "30px", width: "40px",height: " 40px", }}/>
            <p>contact@fanfiction.com </p>
          </div>
        </div>

        <div className="contactus_connect">
          <h1> Contact With Us </h1>
        </div>

        <div className="contactus_icons">
          <div className='icon'> <Fbicon />  @Fanfiction  </div>

          <div className='icon'> <Instaicon />  @Fanfiction </div>
          
           <div className='icon'> <Twittericon />  @Fanfiction </div>
        </div>
      </div>
      </div>
    </div>
        </div>
    )
}
export default ContactDetail;
