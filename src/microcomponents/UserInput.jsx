import React from 'react'
import './styles/UserInput.css'

const UserInput = (props) =>{

    return(
        <div className="UserInput_item" id={props.id}>
        <label htmlFor="">{props.title}</label>
        <input
        type={props.type}
        {...props.name}
        />
    </div>
    )
}

export default UserInput