import { useApolloClient } from '@apollo/client';
import React from 'react'
import {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import  UserContextProvider from "../layout/context/UserContext";
import './styles/LogOut.css'

const LogOut = () =>{
    let history = useHistory()
    const {setJWT} =useContext(UserContextProvider)
    const client = useApolloClient()
    function logOut(){
        client.resetStore()
        localStorage.removeItem("token")
        setJWT()
        history.push("/signin")
    }
        return(
            <button className="LogOut"
            onClick={logOut}
            >logOut</button>
        )

}

export default LogOut