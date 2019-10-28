const News = require("../../models/News");
const router = require("express").Router();

router.get("/article/news", async (req, res) => {
    try {
        const news = await News.findOne({ authorId: req.user.id });
        res.send(news);
    } catch (error) {
        res.send(`Error gettin user news: ${error}`);
    }
});

router.get("/article/:id", async (req, res) => {
    try {
        const news = await News.findOne({ _id: req.params.id });
        res.send(news);
    } catch (error) {
        res.status(400).send(`Couldnt get single news: ${error}`);
    }
});

router.get("/news/all", async (req, res) => {
    try {
        const news = await News.find({});
        res.send(news);
    } catch (error) {
        res.status(400).send(`Couldnt get all news: ${error}`);
    }
});

router.post("/news", async (req, res) => {
    try {
        const news = new News({
            imageUrl: req.body.imageUrl,
            author: req.body.author,
            authorId: req.body.authorId,
            title: req.body.title,
            content: req.body.content
        });
        await news.save();
        res.send(news);
    } catch (error) {
        res.status(400).send(`Couldnt post to news: ${error}`);
    }
});

router.delete("/news/:id", async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id);
        res.send(news);
    } catch (error) {
        res.status(400).send(`Failed to find and delete: ${error}`);
    }
});

router.put("/news/:id", async (req, res) => {
    try {
        const news = await News.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                content: req.body.content
            },
            { new: true }
        );
        res.send(news);
    } catch (error) {
        res.status(400).send(`error updating: ${error}`);
    }
});

module.exports = router;
