import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css'
import logo from '../assets/logo/logo.jpeg'

class Header extends React.Component{
    render(){
        return(
        <header className="component-container header" id="Header">
			<div className="header-container">
				<div className="logo-nav-container">
					<div className='logo-container'>
						<figure className="logo-figure">
							<img style={{width: '25px'}} className="logito" src={logo} alt="imagen portada"/>
						</figure>
						<Link className="header-text">CURSO PMP</Link>
					</div>
					{/* <Link className="logo-link" to="#starpage"></Link> */}
				</div>
				<nav className="menu">
					<ul>
						<li>
							<Link className='menu-options' to="#Design">Diseño y Montaje</Link>
						</li>
						<li>
							<Link className='menu-options' to="#Supplies">Suministros</Link>
						</li>
						<li>
							<Link className='menu-options' to="#Consults">Consultoria</Link>
						</li>
						<li>
							<Link className='menu-options' to="#Training">Capacitación</Link>
						</li>
						<li>
							<Link className='menu-options' to="#AboutUs">Nosotros</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
        )
    }
}

export default Header