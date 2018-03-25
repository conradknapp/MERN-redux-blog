const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  categories: String,
  title: String,
  content: String,
  date: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("Post", PostSchema);
