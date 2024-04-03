import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Posts } from "./components/Posts";
import { Comments } from "./components/Comments";
import { Todos } from "./components/Todos";
import {PostDetails} from './components/PostDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route path="/comments" element={<Comments />} /> */}
        <Route path="/posts" element={<Posts />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/post/:postId" element={<PostDetails/>} />
      </Route>
    </Routes>
  </Router>
);
