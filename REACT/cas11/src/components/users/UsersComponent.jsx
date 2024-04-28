import React from 'react';
import PropTypes from 'prop-types';

export const UsersComponent = ({listOfUsers,error,deleteUser}) =>{

    return(
        <div id="users-component">
           {error === undefined ? 
           <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {listOfUsers.map(user=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>
                            <td><button onClick={()=>deleteUser(user.id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
           </table>
            : <h1>{error}</h1>}
        </div>
    )
}

UsersComponent.propTypes = {
    listOfUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.string,
    deleteUser: PropTypes.func
}