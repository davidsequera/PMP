import React from 'react'
import './styles/SignUpComponent.css'
import { useHistory } from "react-router-dom";
import useInputValue from '../microcomponents/UseInputValue'
import UserInput from '../microcomponents/UserInput';
// import { useState } from 'react';
import  UserContextProvider from "../layout/context/UserContext";
import { useContext } from "react";
import { gql, useMutation } from '@apollo/client';
import Cookies from 'universal-cookie/es6';


const SIGNUP = gql`
  mutation signUp($type: signUpInput) {
    signUp(input: $type) {
      id
      name
      email
      password
    }
  }
`;
const SIGNIN = gql`
  mutation logIn($type: signInInput) {
    signIn(input: $type) {
      auth
      body
    }
  }
`;


const SignUpComponent = () =>{
    const [signUp] = useMutation(SIGNUP);
    const [signIn, { client,data, error}] = useMutation(SIGNIN);
    const {setJWT} = useContext(UserContextProvider);

    const name = useInputValue('')
    const email = useInputValue('')
    const password = useInputValue('')

    let history = useHistory()

    const cookies = new Cookies()


    async function handleSubmit(e){
        let userInfo = { name:name.value, email: email.value, password: password.value }
        let logInInfo = {email: email.value, password: password.value }
        e.preventDefault()
        console.log(userInfo)
        try {
          await signUp({variables: {type: userInfo}})
          await signIn({ variables: { type: logInInfo } });
        } catch (e) {
          console.log('Not match');
        }
      }

      if(data){
        if(data.signIn.auth){
          client.resetStore()
          let token = data.signIn.body
          // document.cookie= `id=${token}`
          cookies.remove('token')
          cookies.set('token', token)
          setJWT(cookies.get('token'))
          history.push('/')
        }
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
                id="3"
                title="Email"
                type="email"
                name={email}

            />
            <UserInput
                id="2"
                title="Password"
                type="password"
                name={password}
            />
            <button 
            className="button" id="SignUpComponent_button">Sign Up</button>
            {error && <p>ERROR</p>}
            </form>

        {/* {hi ? <h1>Succes</h1> : false} */}
        </div>

)
};



export default SignUpComponent;