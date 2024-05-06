import React from 'react';
import {Navigate,Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import { getToken } from '../config/StorageFunctions';

export const PrivateRoute = ({redirectPath='/login',children}) =>{
    const token = useSelector(state=>state.authReducer.token || getToken())
    console.log(token);
    if(!token){
        return <Navigate to={redirectPath}/>
    }
    return children ? children : <Outlet/>
}


PrivateRoute.propTypes={
    redirectPath: PropTypes.string,
    children: PropTypes.element
}