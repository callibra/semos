import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export const Posts = () =>{
    const [posts,setPosts] = useState([]);
    const [postBody,setPostBody] = useState({title:"",body:""});

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{console.log(res); setPosts(res.data)})
            .catch(err=>{
                alert(err)
            })
    },[])

    async function deletePost(postId){
        await axios.delete('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then(response => {
                if (response.status === 200) {
                    setPosts([...posts.filter(post => post.id !== postId)]);
                } else {
                    throw new Error(`Failed to delete post with ID ${postId}`);
                }
            })
            .catch(error => {
                alert(error.message);
            });
    }
    

    async function addPost(){
        const addedItem = await axios.post('https://jsonplaceholder.typicode.com/posts',{
        id:posts.length+1,
        title:postBody.title,
        body:postBody.body,
        userId:posts.length+1});
        console.log(addedItem.data);
        setPostBody({title:"",body:""});
        setPosts([...posts,addedItem.data])
    }
    return(
        <div id="posts">
            <p>Add new Post:</p>
            <input type="text" placeholder='Enter Title' value={postBody.title} onChange={(e)=>{setPostBody({...postBody,title:e.target.value})}}/>
            <br/>
            <br/>
            <input type="text" placeholder='Enter Body' value={postBody.body} onChange={(e)=>{setPostBody({...postBody,body:e.target.value})}}/>
            <br/>
            <br/>
            <button onClick={addPost}>Add Post</button>
            <br/>
            <br/>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post=>{
                        return(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body.substring(0,100)}... <Link to={`/post/${post.id}`}>Show More</Link></td>
                                <td><button onClick={()=>deletePost(post.id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}