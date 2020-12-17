import React from 'react'
import { useApolloClient } from '@apollo/client';
import {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import  UserContextProvider from "../layout/context/UserContext";
import './styles/BurgerButton.css'
import { CgLogOut} from 'react-icons/cg'

function BurgerButton (){
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
                <div className="BurgerButton">
                    <div className="BurgerButton-main">
                        <div>
                            <CgLogOut role="button"className="burger-button" id="burger-menu" aria-label="BurgerButton" onClick={logOut}></CgLogOut>
                        </div>
                    </div>
                </div>
        )
    }

export default BurgerButton