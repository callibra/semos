import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {registerUser} from './../../api/authApi';
export const Register = () =>{
    const [userData,setUserData] = useState({username:"",password:""})
    const navigate = useNavigate();

    async function register(){
        try{
            const registerResponse = await registerUser(userData.username,userData.password);
            console.log(registerResponse);
            alert(registerResponse.data.message)
            navigate("/login")
        }
        catch(e){
            alert(e);
        }
    }
    return(
        <div id="register">
            <label>Username:</label>
            <input
                type="text"
                placeholder='Enter Username'
                value={userData.username}
                onChange={(e)=>{setUserData({...userData,username:e.target.value})}}
            />
            <br/>
            <br/>
            <label>Password:</label>
            <input
                type="password"
                placeholder='Enter Password'
                value={userData.password}
                onChange={(e)=>{setUserData({...userData,password:e.target.value})}}
            />
            <br/>
            <br/>
            <button onClick={register}>Register</button>
        </div>
    )
}