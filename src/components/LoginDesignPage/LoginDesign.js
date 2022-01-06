import React from 'react'
import './../LoginDesignPage/LoginDesign.css';
import Logo from './../../assets/download.png';
import Facebook from './../../assets/fb.png';
import Google from './../../assets/goog.png';
import {AiFillMail} from "react-icons/ai";
import {FiX} from "react-icons/fi";

function LoginDesign() {
    return (
        <>
        <div className='container'>
            <form>
            <div className='lgcros'>
                <img src={Logo}  className="Logo" alt="logo" />
                <h1 className='icon-2'> <FiX/></h1>
            </div>
               
            <div>
                <h1 className="h-1"> Welcome to Fanfiction  </h1>
                <p className='para-1'> Access tons novels and Comics by a single click</p>
                <h3 className="h-3"> Plesae Log In </h3>
            </div>

            <div className='main-bt'>
            <button className='btn-1'> <img  src= {Facebook} alt='' /> Facebook </button>
            <button className='btn-2'> <img  src= {Google} alt="" /> Google </button>
            </div>

            <div className='mail-countinue'>
            <h1 className='h1-mail'> Or Continue With </h1>

            <h2 className='mail-icon'> < AiFillMail/> Email Address </h2>            
            </div>

            <h3 className='h3-last'>No Account ? <span> Register </span></h3>

            <p className='para-2'>if you continue, you are agreeing to the </p>
            <p className='para-3'>Terms Of Use And Privacy Policy. </p>
        </form>
        </div>   
        </>
    )
}

export default LoginDesign;
