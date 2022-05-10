import React from 'react'
import { useContext } from 'react'
import UserContextProvider from '../layout/context/UserContext'
import AccountButton from '../microcomponents/AccountButton'
import SignInButton from '../microcomponents/SignInButton'
import './styles/Header.css'

const Header = () =>{
    const {jwt} = useContext(UserContextProvider)
        return(
        <header className="component-container header" id="Header">
            <span className="header-log" ></span>
            <div className="header-title">
                <h2 className="header-text">Cursos</h2>
            </div>
            {/* <Menu/> */}
            <div className="header-log">
            {jwt? <AccountButton/> : <SignInButton/>}
            </div>
		</header>
        )
}

export default Header