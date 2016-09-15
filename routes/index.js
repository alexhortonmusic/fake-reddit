'use strict';

const { Router } = require('express')
const router = Router()

const newPost = require('../models/newPost')

// models

router.get('/', (req, res, err) =>
  newPost
    .find()
    .then(articles =>
      res.render('index', {page: 'Home', articles})
    )
    .catch(err)
)

router.get('/new', (req, res) =>
	res.render('new-topic')
)

router.post('/new', (req, res, err) => {
  console.log(req.body)
	newPost
		.create(req.body)
		.then(() => res.redirect('/'))
		.catch(err)
})

module.exports = router
