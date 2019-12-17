// routes/comments.js
const express = require('express');
const router = express.Router();
const tags = require('../data/tags');
const fakePosts = require('./posts');

router.get('/', (req, res) => {
  res.json(tags);
});

// Get a single tag
router.get('/:tagId', (req, res) => {
  // Find the tag in the array that has the id given by req.params.tagI
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const tagId = Number(req.params.tagId);
  const foundTag = tags.find((tag) => tag.id === tagId);
  if (!foundTag) {
    return res.status(404).json({
      error: 'Tag not found',
    });
  }
  return res.json(foundTag);
});

router.use('/:tagId/posts', fakePosts);
  module.exports = router;