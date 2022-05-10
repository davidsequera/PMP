import React from 'react'
import { VscError } from 'react-icons/vsc'
import './styles/ErrorBanner.css'



function ErrorBanner (){
        return(
            <div className='ErrorBanner'>
                <VscError className="ErrorBanner-icon"/>
                <p className="ErrorBanner-text">Incorrect username or password.</p>
            </div>
        )
    }

export default ErrorBanner