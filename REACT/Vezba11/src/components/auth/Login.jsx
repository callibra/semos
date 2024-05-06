import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {logIntoApp} from './duck/operations';
import {useNavigate,Link} from 'react-router-dom';

export const Login = () =>{
    const [loginData,setLoginData] = useState({username:"",password:""});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function logIn(){
        try{
            await dispatch(logIntoApp(loginData.username,loginData.password));
            navigate("/users")
        }
        catch(err){
            alert(err)
        }
    }
    
    return(
        <div id="login">
            <label>Username:</label>
            <input
                type={"text"}
                placeholder="Enter Username"
                value={loginData.username}
                onChange={(e)=>{setLoginData({...loginData,username:e.target.value})}}
            />
            <br/>
            <br/>
            <label>Password:</label>
            <input 
                type={"password"}
                placeholder="Enter Password"
                value={loginData.password}
                onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}}
            />
            <br/>
            <br/>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
            <button onClick={logIn}>Log In</button>
        </div>
    )
}