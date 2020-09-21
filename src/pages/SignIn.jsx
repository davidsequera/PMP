import React from 'react'
import SignInComponent from '../components/SignInComponent'

class SignIn extends React.Component{
    render(){
        return(
                <div className="Page-container" id="SignIn">
                    <div className="SignIn">
                        <SignInComponent/>
                    </div>
                </div>
            )
    }
}

export default SignIn