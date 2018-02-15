const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.posts_get_all);

router.post("/", PostsController.posts_create_post);

router.get("/:post_id", PostsController.posts_get_post);

router.delete("/:post_id", PostsController.posts_delete_post);

module.exports = router;
