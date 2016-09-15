'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('newPost', {
  title: String,
  image: String,
  link: String
})
