import "./../LoginPage/Login.css"
import SignLogo from "./../../assets/download.png";
import {BsFillArrowLeftSquareFill} from "react-icons/bs"

function Login() {
    return (
        <div className='container'>
            <form>
            <div className="modal_content2">
                <img src={SignLogo}  className="Logo" alt="logo" />
               
            <div className="input_section">

                <h3 className="h-3">Email Address:</h3>
                <input type="text" placeholder="enter e-mail" className="register_modal_inputs" required />
                <br />
                <h3 className="h-3">Password:</h3>
                <input type="password"  placeholder="Password" className="register_modal_inputs" required />

                <br />
                <button className="login"> Login </button>
                    <br />
                    <br />
                
                <div className="other2options">

                <h3 className="h3-last">  Create Account <span> | </span> </h3>
                <h3 className="h-lasts"> Forgot Password</h3>
                </div>

                <div>
                    <h1 className="OtherSocial_login"> <BsFillArrowLeftSquareFill/>Other Social Login</h1>
                </div>
            </div>
        </div>
        </form>
        </div>
    )
}

export default Login;
