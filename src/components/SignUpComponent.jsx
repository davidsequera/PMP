import React from 'react'
import './styles/SignUpComponent.css'
import useInputValue from '../microcomponents/UseInputValue'
import UserInput from '../microcomponents/UserInput';
// import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';


const SIGNUP = gql`
  mutation signUp($type: signUpInput) {
    signUp(input: $type) {
      _id
      name
      email
      password
    }
  }
`;



const SignUpComponent = () =>{
    const [signUp] = useMutation(SIGNUP);
    const name = useInputValue('dani')
    const email = useInputValue('dani@gmail.com')
    const password = useInputValue('12345')



    // const[hi, setHi] = useState(false)

    function handleSubmit(e){
        let userInfo = { name:name.value, email: email.value, password: password.value }
        e.preventDefault()
        console.log(userInfo)
        signUp({variables: {type: userInfo}})
        // setHi(true)
    }

    return(
        <div className="SignUpComponent_container" id="Form">
            <form className="SignUpComponent_form" id="theForm" onSubmit={handleSubmit} action="" >
            <h1 className="SignInComponent_Title title">Registrate</h1>
            <UserInput
                id="2"
                title="Name"
                type="text"
                name={name}

            />
            <UserInput
                id="2"
                title="Email"
                type="email"
                name={email}

            />
            <UserInput
                id="2"
                title="password"
                type="password"
                name={password}
            />
            <button 
            className="button" id="SignUpComponent_button">Sign Up</button>
            </form>

        {/* {hi ? <h1>Succes</h1> : false} */}
        </div>

)
};



export default SignUpComponent;