import React from 'react'
import { useContext } from 'react'
import UserContextProvider from '../layout/context/UserContext'
import LogOut from '../microcomponents/LogOut'
import './styles/Header.css'

const Header = () =>{
    const {jwt} = useContext(UserContextProvider)
    if(!jwt) console.log("[Header] logOut")
        return(
        <header className="component-container header" id="Header">
            <span className="header-log" ></span>
            <div className="header-title">
                <h2 className="header-text">CURSO PMP</h2>
            </div>
            <div className="header-log">
            {jwt? <LogOut/> : <span className="header-log" ></span>}
            </div>
		</header>
        )
}

export default Header