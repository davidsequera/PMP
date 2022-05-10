import React,{useContext} from 'react'
import { CgLogOut } from 'react-icons/cg'
import { MdAccountCircle, MdHome } from 'react-icons/md'
import { BsFillCollectionFill } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import './styles/Menu.css'
import  UserContextProvider from "../layout/context/UserContext";





function Menu (props){
    const {logout} = useContext(UserContextProvider)
    let history = useHistory()
    function toPush(route){
        props.toogleAccoutMenu()
        history.push(route)
    }

        return(
                <div className={props.AccountMenuOn}>
                    <button onClick={()=>{toPush("/dashboard")}} className="Menu-item">
                        <MdAccountCircle className="Menu-item-icon"/>    
                        <p className="Menu-item-text">Mi cuenta</p>
                    </button>
                    <button onClick={()=>{toPush("/courses")}} className="Menu-item">
                        <BsFillCollectionFill className="Menu-item-icon"/>    
                        <p className="Menu-item-text">Cursos</p>
                    </button>
                    <button onClick={()=>{toPush("/")}} className="Menu-item">
                        <MdHome className="Menu-item-icon"/>    
                        <p className="Menu-item-text">Home</p>
                    </button>
                    <button onClick={logout} className="Menu-item">
                        <CgLogOut className="Menu-item-icon"/>    
                        <p className="Menu-item-text">Logout</p>
                    </button>
                </div>
        )
    }

export default Menu