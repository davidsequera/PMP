import React from 'react'
import { useContext } from 'react'
import UserContextProvider from '../layout/context/UserContext'
import BurgerButton from '../microcomponents/BurgerButton'
import LogOut from '../microcomponents/LogOut'
import './styles/Header.css'

const Header = () =>{
    const {jwt} = useContext(UserContextProvider)
        return(
        <header className="component-container header" id="Header">
            {jwt && <BurgerButton/> }
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