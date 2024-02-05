const fs = require('fs');
const path = require('path');

class PostModel {
    constructor(filePath) {
        this.filePath = path.join(__dirname, filePath);
        this.posts = this.loadPosts();
    }

    loadPosts() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    savePost(post) {
        this.posts.push({ id: Date.now().toString(), ...post });
        this.writeToFile();
    }

    deletePost(postId) {
        this.posts = this.posts.filter(post => post.id !== postId);
        this.writeToFile();
    }

    writeToFile() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.posts), 'utf8');
    }
}

module.exports = PostModel;
