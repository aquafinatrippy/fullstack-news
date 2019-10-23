const mongoose = require("../database");

const commentSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
