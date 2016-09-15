'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('newPost', {
  title: {type: String, required: true},
  image: {type: String, required: true},
  link: {type: String, required: true}
})
