const express = require('express');
const router = express.Router();
const PostModel = require('../models/postModel');

const postModel = new PostModel('data.json');

router.get('/sport', (req, res) => {
    const sports = postModel.loadPosts();
    res.render('sport', { sports });
});

router.post('/sport', (req, res) => {
    const { author, title, text } = req.body;
    const sport = {
        author,
        title,
        text,
    };
    postModel.savePost(sport);
    res.redirect('/sport');
});

router.post('/sport/delete/:id', (req, res) => {
    const postId = req.params.id;
    postModel.deletePost(postId);
    res.redirect('/sport');
});

module.exports = router;
