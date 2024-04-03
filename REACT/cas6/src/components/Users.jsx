import React from 'react';

export const Users = ({usersList}) => {
    console.log(usersList)
    return(
        <div id="users">
            {usersList.length > 0 ?
            <table border={1}>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zipcode</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company Name</th>
                    <th>Catch Phrase</th>
                    <th>Business</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.map(user=>{
                        return(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.street}, {user.address.suite}</td>
                                <td>{user.address.city}</td>
                               <td>{user.address.zipcode}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company.name}</td>
                                <td>{user.company.catchPhrase}</td>
                                 <td>{user.company.bs}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            : <h3>Loading...</h3>
            }
        </div>
    )
}