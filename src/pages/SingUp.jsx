import React from 'react'
import SingUpComponent from '../components/SignUpComponent'

class SingUp extends React.Component{
    render(){
        return(
                <div className="Page-container" id="SingUp">
                    <div className="singUp">
                        <SingUpComponent/>
                    </div>
                </div>
            )
    }
}

export default SingUp