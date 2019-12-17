const express = require('express');
const comments = require('./comments');
const fakePosts = require('../data/posts');

const router = express.Router({ mergeParams: true });



// Get a list of Posts
router.get('/', (req, res) => {
  // If we forget { mergeParams: true }, req.params.postId will be `undefined`
  const tagId = Number(req.params.tagId);
  // Keep only comments whose post_id matches the postId parameter
  const postPosts = fakePosts.filter((post) => post.tag_ids === tagId);
  res.json(postPosts);
});

module.exports = router;