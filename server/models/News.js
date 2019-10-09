const mongoose = require('../database')

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
    }
})

const News = mongoose.model('News', newsSchema)

module.exports = News