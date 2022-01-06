
import Logo from "./../../assets/download.png";
import { FiX } from "react-icons/fi";
import './../CreateAccount/Create.css'

function CreateAccount() {
    return (
        <div className='container'>
            <form>
            <div className="Crosic" >
                <img src={Logo}  className="Logo" alt="logo" />
                <h1 className='icon-2'> <FiX/></h1>
            </div>
               
            <div className="input_section">
                <h1 className="h-1">Create Account</h1>
                <h3 className="h-3">Email Address</h3>
                <input type="text" placeholder="Enter E-mail..." className="register_modal_inputs" required />
                <br />
                <h3 className="h-3">Email Passwoord</h3>
                <input type="password"  placeholder="Enter Password..." className="register_modal_inputs" required />

                <br />
                <button className="create-account"> Create Account  </button>
                    <br />
                    <br />
    
            </div>
        </form>
        </div>
    )
}
export default CreateAccount;
