const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
}); // nosso formado do banco de dados

module.exports = mongoose.model('Post', PostSchema);