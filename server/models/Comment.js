const mongoose = require("../database");

const commentSchema = mongoose.Schema({
  comment: {
    type: String,
    trim: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const comment = mongoose.model("comment", commentSchema);

module.exports = comment;
