const Post = require("../models/Post");
const mongoose = require("mongoose");

exports.posts_get_all = (req, res, next) => {
  Post.find()
    .exec()
    .then(docs => {
      const response = {
        posts: docs.map(doc => {
          return {
            title: doc.title,
            categories: doc.categories,
            content: doc.content,
            id: doc._id
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err });
    });
};

exports.posts_create_post = (req, res, next) => {
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    categories: req.body.categories,
    title: req.body.title,
    content: req.body.content
  });
  post
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created post successfully",
        createdPost: {
          title: result.title,
          categories: result.categories,
          content: result.content,
          _id: result._id
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.posts_get_post = (req, res, next) => {
  const id = req.params.post_id;
  Post.findById(id)
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json({
          post: doc
        });
      } else {
        res.status(404).json({ message: "No entry for given id" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.posts_delete_post = (req, res, next) => {
  const id = req.params.post_id;
  Post.remove({ _id: id })
    .exec()
    .then(doc => {
      res.status(200).json({
        message: "Post deleted"
      });
    })
    .catch(err => {
      console.error(err);
      res.status(404).json({ error: err });
    });
};
