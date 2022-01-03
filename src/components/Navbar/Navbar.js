import React, { useState } from "react";
import logo from '../../assets/logo.png'
import "./Navbar.css";

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);
    return (
        <>
            <nav className="navbar">

                <ul className={isMobile? "nav-links-mobile" : "nav-links"} 
                onClick={()=> setIsMobile(false)}
                >
                  <li> <img className="" src={logo} alt="logo"/> </li>
                    <li className="home"> Home </li>
                    <li className="services"> Services </li>
                    <li className="create"> Create</li>
                    <li className="write"> Write Benifits </li>
                    <li className="contest"> Contest</li>
                    <li className="Library"> Library</li>
                    <li className="login"> Login </li>
                </ul>
                <button
                className="mobile-menu-icon"
                onClick={()=>setIsMobile(!isMobile)}
                >
                   {isMobile ? <li className="fas fa-times"> 
                   </li> :<li className="fas fa-bars"></li>}
                </button>
            </nav>
        </>
    );
};
export default Navbar;