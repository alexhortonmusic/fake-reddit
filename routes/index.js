'use strict';

const { Router } = require('express')
const router = Router()

const New = require('../models/newPost')

// models

router.get('/', (req, res) =>
  res.render('index')
)

router.get('/new', (req, res) => 
	res.render('new-topic')
)

router.post('/new', (req, res, err) => {
	New
		.create(req.body)
		.then(() => res.redirect('/'))
		.catch(err)
})

module.exports = router
