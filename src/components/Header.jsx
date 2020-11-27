import React from 'react'
import { useContext } from 'react'
import UserContextProvider from '../layout/context/UserContext'
import './styles/Header.css'

const Header = () =>{
    const {jwt} = useContext(UserContextProvider)

        return(
        <header className="component-container header" id="Header">
            {jwt && <span className="header-log" ></span>}
            <div className="header-title">
                <h2 className="header-text">CURSO PMP</h2>
            </div>
            <div className="header-log">
            {jwt && <button>logOut</button>}
            </div>
		</header>
        )
}

export default Header