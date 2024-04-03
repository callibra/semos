import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts';
import Todos from './components/Todos';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log('Error fetching posts: ', error));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Posts</a>
            </li>
            <li>
              <a href="/todos">Todos</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Posts posts={posts} />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
