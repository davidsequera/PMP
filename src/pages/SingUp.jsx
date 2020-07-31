import React from 'react'
import ProfileComponent from '../components/ProfileComponent'

class LogIn extends React.Component{
    render(){
        return(
                <div className="Page-container" id="LogIn">
                    <div className="login">
                        <ProfileComponent/>
                    </div>
                </div>
            )
    }
}

export default LogIn