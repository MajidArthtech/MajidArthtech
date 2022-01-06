import React from 'react'
import "./../ForgetPassword/Forget.css"
import Logo from "./../../assets/download.png"
import {FiX} from"react-icons/fi"
function Forget() {
    return (
        <>
        <div className='container'>            
            <form>
            <div className="icon">
                <img src={Logo}  className="Logo" alt="logo" />
                <h1 className='icon-2'> <FiX/></h1>
            </div>
            <div>
                <h1 className="h-1"> Reset password </h1>
                <h3 className="h-3">please Enter your email Address,</h3>
                <h3 className="h-3"> We need to Find your Account </h3>

                <input type="text" placeholder="E-mail Address" className="register_modal_inputs" required /> <br></br>

                <button className="send"> SEND MAIL </button>
                    <br />
                    <br />
                <h3 className='h-last-1'> or Login With </h3>
    
            </div>
            </form>
        </div>
       
        </>
    )
}

export default Forget;
