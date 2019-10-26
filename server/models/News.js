const mongoose = require("../database");

const newsSchema = mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
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
