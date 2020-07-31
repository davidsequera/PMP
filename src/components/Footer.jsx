import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Footer.css'

class Footer extends React.Component{
    render(){
        return(
        <header className="header" id="starpage">
			<div className="header-container">
				<p>© 2020 - Curso PMP PMOK ver 6 -<Link to="Privacy">Privacy</Link></p>
			</div>
		</header>
        )
    }
}

export default Footer