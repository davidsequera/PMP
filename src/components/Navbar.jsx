import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

class Navbar extends React.Component{
    render(){
        return(
        <header className="header" id="starpage">
			<div className="header-container">
				<div className="logo-nav-container">
					<div className='logo-container'>
						<figure className="logo-figure">
							<img className="logito" src="https://cursopmp.visbal.co/logo.png" alt="imagen portada"/>
						</figure>
						<h2>Curso PMP</h2>
					</div>
					<Link className="logo-link" to="#starpage"></Link>
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
							<Link className='menu-options' to="#Clients">Nuestros clientes</Link>
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

export default Navbar