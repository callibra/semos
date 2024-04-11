import {Link} from 'react-router-dom';

export const Navigation = () =>{
    return(
        <ul id="navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
        </ul>
    )
}