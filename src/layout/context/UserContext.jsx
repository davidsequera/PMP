import { ApolloClient } from '@apollo/client'
import React, {createContext, useState} from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie/es6'


const Context = createContext({})

export const  UserContextProvider = ({children}) =>{
    const cookies = new Cookies()
    const client = ApolloClient 
    const history = useHistory()  
    const [jwt, setJWT] = useState(cookies.get('token'))
    function logout(){
        client.resetStore()
        cookies.remove('token')
        setJWT()
        history.push('/signin')
    }
    return <Context.Provider value={{jwt, setJWT, logout}}>
        {children}
    </Context.Provider>
}

export default Context





