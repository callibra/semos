import {LOGIN_SUCCESS,LOGIN_FAILED,LOGOUT_USER} from './constants';

export const logInSuccess = (data) =>{
    return{
        type:LOGIN_SUCCESS,
        payload:data
    }
}

export const logInFailed = (error) => {
    return{
        type:LOGIN_FAILED,
        payload:error
    }
}
export const logOutUser = () =>{
    return{
        type:LOGOUT_USER,
        payload:"Logged Out !!!"
    }
}