const Comment = require("../../models/Comment");
const router = require("express").Router();

router.post("/comment/add", async (req, res) => {
    try {
        const comment = new Comment({
            author: req.body.author,
            comment: req.body.comment
        });
        await comment.save();
        res.send(comment);
    } catch (error) {
        res.status(400).send(`Failed to post comment ${error}`);
    }
});

router.get("/comments", async (req, res) => {
    try {
        const comments = await Comment.find({});
        res.send(comments);
    } catch (error) {
        res.status(400).send(`Couldnt get comments: ${error}`);
    }
});

module.exports = router;
