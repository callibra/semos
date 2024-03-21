import React from 'react';
import PropTypes from 'prop-types';

export const Comments = ({listOfComments,datum}) =>{
    console.log(listOfComments)
    return(
        <div id="comments">
            {
                listOfComments.map(comment=>{
                    return(
                        <div key={comment.id}>
                        {comment.author === 'Filip' ? <h3>Author: {comment.author} </h3> : <h3>No known author</h3>}
                        <p style={{backgroundColor: comment.author==="Elena" ?'red':""}}>Content: {comment.content} </p>
                        <p>{datum}</p>
                        <hr/>
                        </div>    
                    )
                })
            }
        </div>
    )
}

Comments.propTypes = {
    listOfComments: PropTypes.arrayOf(PropTypes.object),
    datum: PropTypes.string.isRequired
}