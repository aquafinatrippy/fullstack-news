const mongoose = require("../database");

const newsSchema = mongoose.Schema({
    author: {
        type: String
    },
    authorId: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
