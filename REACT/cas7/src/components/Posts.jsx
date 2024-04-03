import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export const Posts = () =>{
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{console.log(res); setPosts(res.data)})
            .catch(err=>{
                alert(err)
            })
    },[])

    async function deletePost(postId){
      const deletedItem = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + postId);
      alert(deletedItem.status);
      setPosts([...posts.filter(post=>post.id !== postId)]);
    }
    return(
        <div id="posts">
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