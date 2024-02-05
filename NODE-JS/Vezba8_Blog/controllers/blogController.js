const express = require('express');
const router = express.Router();
const PostModel = require('../models/postModel');

const postModel = new PostModel('data.json');

router.get('/blog', (req, res) => {
    const posts = postModel.loadPosts();
    res.render('blog', { posts });
});

router.post('/blog', (req, res) => {
    const { author, title, text } = req.body;
    const post = {
        author,
        title,
        text,
    };
    postModel.savePost(post);
    res.redirect('/blog');
});

router.post('/blog/delete/:id', (req, res) => {
    const postId = req.params.id;
    postModel.deletePost(postId);
    res.redirect('/blog');
});

module.exports = router;
