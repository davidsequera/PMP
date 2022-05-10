import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import './styles/SignInButton.css'
import {FaSignInAlt} from 'react-icons/fa'

const SignInButton = () => {
    const {pathname}  = useLocation()
    let history = useHistory()
    function toSignIn(){
        history.push("/signin")
    }
        return(
            <div className={pathname === '/signin'? "hidden": "SignInButton-container"}>
                {
                window.matchMedia("(min-width: 768px)").matches?
                <button className="SignIn"
                onClick={toSignIn}
                >SignIn</button>
                :
                <FaSignInAlt role="button" onClick={toSignIn} className="account-button"/>
                }
            </div>

        )

}

export default SignInButton