import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchCommentsRequest,deleteCommentsRequest} from './../actions/CommentsActions';

export const Comments = () => {

    const dispatch = useDispatch();
    const comments = useSelector(state=>state.CommentsReducer.comments);
    const greska = useSelector(state=>state.CommentsReducer.error);

    useEffect(()=>{
        dispatch(fetchCommentsRequest())
    },[])

    return(
        <div id="comments">
            {comments.map(comment=>{
                return(
                    <div key={comment.id}>
                        <p><span>Name: </span>{comment.name}</p>
                        <p><span>Email: </span>{comment.email}</p>
                        <p><span>Body: </span>{comment.body}</p>
                        <button onClick={()=>dispatch(deleteCommentsRequest(comment.id))}>Delete</button>
                        <hr/>
                    </div>
                )
            })}
            {greska && <h1>{greska}</h1>}
        </div>
    )
}