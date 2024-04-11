import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Posts } from "./components/Posts";
import {PostSingle} from './components/PostSingle';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:postId" element={<PostSingle/>} />
      </Route>
    </Routes>
  </Router>
);
