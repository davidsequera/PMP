import React from 'react'
import './styles/ProfileComponent.css'
import { MdAccountCircle } from 'react-icons/md';

class ProfileComponent extends React.Component{
    render(){
        return(
                <div className="ProfileComponent_container">
                    <form className="ProfileComponent_form" action="">
                    <MdAccountCircle className="ProfileComponent_User-logo"/>
                    <div className="ProfileComponent_item" id="ProfileComponent_Username">
                        <label htmlFor="">Username</label>
                        <input
                        // onChange={this.props.onChange}
                        // className="form-control"
                        // type="text"
                        // name="jobTitle"
                        // value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="ProfileComponent_item" id="ProfileComponent_PublicName">
                        <label htmlFor="">Public Name</label>
                        <input
                        // onChange={this.props.onChange}
                        // className="form-control"
                        type="text"
                        // name="PublicName"
                        // value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="ProfileComponent_item" id="ProfileComponent_Email">
                        <label htmlFor="">Email</label>
                        <input
                        // onChange={this.props.onChange}
                        // className="form-control"
                        type="email"
                        // name="PublicName"
                        // value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <button 
                    // onClick={this.props.consoleprinter} 
                    className="button" id="ProfileComponent_button">Save</button>
                    </form>
                </div>
        )
    }
}

export default ProfileComponent;