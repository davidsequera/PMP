import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function Layout (props){
    return(
        <React.Fragment>
            <Navbar/>
            <div className="Layout-container">
                {props.children}
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Layout