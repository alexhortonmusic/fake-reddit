'use strict';

const { Router } = require('express')
const router = Router()

const newPost = require('../models/newPost')
const comment = require('../models/comment')

// models
router.get('/', (req, res, err) =>
  newPost
    .find().sort({score: -1})
    .then(articles =>
      res.render('index', {page: 'Home', articles})
    )
    .catch(err)
)

// up vote
router.post('/:id/up', (req, res, err) => {
  let postID = req.params.id;
  newPost
    .findByIdAndUpdate(postID, { $inc: {score: 1} })
    .then(() => res.redirect('/'))
    .catch(console.error)
})

//down vote
router.post('/:id/down', (req, res, err) => {
  let postID = req.params.id;
  newPost
    .findByIdAndUpdate(postID, { $inc: {score: -1} })
    .then(() => res.redirect('/'))
    .catch(console.error)
})

router.get('/new', (req, res) =>
	res.render('new-topic', {page: 'New Post'})
)

router.post('/new', (req, res, err) => {
  req.body.score = 0
  console.log(req.body)
	newPost
		.create(req.body)
		.then(() => res.redirect('/'))
		.catch(err)
})

router.get('/comments', (req, res) => {
  // let _postId = req.params.id
  let _postId = '57dc49de8feeab12a1d9cbdb'
  comment
    .find({ postId: _postId })
    .sort({ datePosted: -1 })
    .then(comments =>
      console.log(comments)
      )
})

// router.post('/comments', (req, res, err) => {
//
// })


module.exports = router
