import React from 'react'
import { useHistory } from 'react-router-dom'

const Logout = () =>{
    let history = useHistory()
    function logOut(){
        client.resetStore()
        history
    }
    console.log(jwt)

        return(
            <button
            onClick={logOut}
            ></button>
        )

}

export default Logout