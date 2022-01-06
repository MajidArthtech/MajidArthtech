import React from 'react'
import {BiPhoneCall} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";
import { ReactComponent as Fbicon } from "./../../../assets/fbicon.svg";
import { ReactComponent as Instaicon } from "./../../../assets/instaicon.svg";
import { ReactComponent as Twittericon } from "./../../../assets/twittericon.svg";
import './../ContactDetail/ContactDetail.css'
function ContactDetail() {
    return (
      <div className='main'>
       <h1 className='contact-11'>  Contact Us</h1>
        <div className='container'>

          <div className='contact-icon'>
          <div className='phone-1'>
            <BiPhoneCall style={{ color: "white", backgroundColor: " black", borderRadius: "30px", width: "40px",  height: " 40px", }} />
            <p> (+91) 9000000000</p>
          </div>

          <div className='mail-icon'>
            <AiOutlineMail style={{ color: "white", backgroundColor: " black", borderRadius: "30px",width: "40px",height: " 40px", }} />
            <p>contact@fanfiction.com </p>
          </div>
          </div>


          <div class="contactus_connect">
          <h1> Contact With Us </h1>
        </div>
        <div class="contactus_icons">

          <div className='icon-1'> <Fbicon /> @Fanfiction </div>

          <div className='icon-2'>  <Instaicon />  @Fanfiction </div>

          <div className='icon-3'>  <Twittericon /> @Fanfiction </div>
        </div>


        </div>
        </div>
    )
}
export default ContactDetail;
