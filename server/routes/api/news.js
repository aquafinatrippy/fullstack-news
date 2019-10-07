const News = require('../../models/News')
const router = require('express').Router()

router.get('/news/allNews', async (req, res) => {
    try {
        const news = News.find({})
        res.send(news)
    } catch (error) {
        res.status(400).send(`Couldnt get all news: ${error}`)
    }
})

module.exports = router