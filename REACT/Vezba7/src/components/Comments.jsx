export const Comments = ({loadComments,comments,setShowComments,showComments}) =>{
    return (
        <div id="comments">
            {comments.length === 0 && <button onClick={loadComments}> Load Comments</button>}
            {comments.length > 0 && <button onClick={setShowComments}>{showComments ? "Hide Comments" : "Show Comments"}</button>}
            {comments.length > 0 && showComments && comments.map(comm=>{
                return(
                    <div key={comm.id}>
                        <h3>{comm.name}</h3>
                        <h4>{comm.email}</h4>
                        <p>{comm.body}</p>
                        <hr/>
                    </div>
                )
            })

            }
        </div>
    )
}