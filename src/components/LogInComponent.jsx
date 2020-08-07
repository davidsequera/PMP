import React from 'react'
import './styles/LogInComponent.css'
import { MdAccountCircle } from 'react-icons/md';

class LogInComponent extends React.Component{
    render(){
        return(
                <div className="LogInComponent_container" id="Form">
                    <form className="LogInComponent_form" action="">
                    <MdAccountCircle className="LogInComponent_User-logo"/>
                    <div className="LogInComponent_item" id="LogInComponent_Email">
                        <label htmlFor="">Email</label>
                        <input
                        // onChange={this.props.onChange}
                        // className="form-control"
                        type="email"
                        // name="PublicName"
                        // value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="LogInComponent_item" id="LogInComponent_PublicName">
                        <label htmlFor="">Password</label>
                        <input
                        // onChange={this.props.onChange}
                        // className="form-control"
                        type="password"
                        // name="PublicName"
                        // value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <button 
                    // onClick={this.props.consoleprinter} 
                    className="button" id="LogInComponent_button">LOG IN</button>
                    </form>
                </div>
        )
    }
}

export default LogInComponent;