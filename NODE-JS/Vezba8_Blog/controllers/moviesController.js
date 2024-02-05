const express = require('express');
const router = express.Router();
const PostModel = require('../models/postModel');

const postModel = new PostModel('data.json');

router.get('/movie', (req, res) => {
    const movies = postModel.loadPosts();
    res.render('movie', { movies });
});

router.post('/movie', (req, res) => {
    const { author, title, text } = req.body;
    const movies = {
        author,
        title,
        text,
    };
    postModel.savePost(movies);
    res.redirect('/movie');
});

router.post('/movie/delete/:id', (req, res) => {
    const postId = req.params.id;
    postModel.deletePost(postId);
    res.redirect('/movie');
});

module.exports = router;
