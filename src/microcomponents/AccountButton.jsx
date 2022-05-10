import React, { useEffect, useRef, useState } from 'react'
import './styles/AccountButton.css'
import { MdAccountCircle} from 'react-icons/md'
import { TiThMenu } from 'react-icons/ti'
import Menu from '../components/Menu'




function AccountButton (){

    const [AccountMenuOn, setAccountMenuState] = useState(false)

    let menuRef = useRef()

    const button = {
        role:"button",
        className:"account-button" ,
        id:"AccountButton",
        "aria-label":"AccountButton",
        label:"AccountButton" ,
        onClick: toogleAccoutMenu
     }

     useEffect(() => {
        let maybeHandler = (event) => {
          if (!menuRef.current.contains(event.target)) {
            setAccountMenuState(false)
          }
        }
        document.addEventListener("mousedown", maybeHandler);
        return () => {
          document.removeEventListener("mousedown", maybeHandler);
        }
      })

    function toogleAccoutMenu(){
        if(!AccountMenuOn){
            setAccountMenuState(true)
        }else{
            setAccountMenuState(false)
        }        
    }
        return(
                <div className="AccountButton">
                    <div ref={menuRef} className="AccountButton-main">
                        {
                            window.matchMedia("(min-width: 768px)").matches?
                            <MdAccountCircle {...button}/>
                            :
                            <TiThMenu {...button} />
                        }
                        <Menu  AccountMenuOn={AccountMenuOn? "Menu" : "hidden"} toogleAccoutMenu={toogleAccoutMenu} />
                    </div>
                </div>
        )
    }

export default AccountButton