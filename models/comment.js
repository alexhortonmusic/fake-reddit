'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('comment', {
  userName: String,
  datePosted: String,
  commentText: String,
  postId: String
})
