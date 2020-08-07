import React from 'react'
import LogInComponent from '../components/LogInComponent'

class LogIn extends React.Component{
    render(){
        return(
                <div className="Page-container" id="SingUp">
                    <div className="login">
                        <LogInComponent/>
                    </div>
                </div>
            )
    }
}

export default LogIn