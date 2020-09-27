import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Footer.css'

class Footer extends React.Component{
    render(){
        return(
        <footer className="component-container footer" id="Footer">
			<div className="footer-container">
				<p className="footer-text">© 2020 - Curso PMP PMOK ver 6 -<Link to="/">Privacy</Link></p>
			</div>
		</footer>
        )
    }
}

export default Footer