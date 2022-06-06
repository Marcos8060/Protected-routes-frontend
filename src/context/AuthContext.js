import { createContext, useState, usEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export default AuthContext


export const AuthProvider = ({ children }) =>{
    const history = useNavigate();

    let [ authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):(null))
    let [ user, setUser] = useState(localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')):(null))


    let loginUser = async(e) =>{
        e.preventDefault();
         let response = await  fetch('http://127.0.0.1:8000/api/token/',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ 'username':e.target.username.value, 'password': e.target.password.value})
        }) 
        let data = await response.json();
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            history('/')
        }else{
            alert('Something wen wrong!')
        }

    }
    let contextData = {
        user: user,
        loginUser: loginUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}