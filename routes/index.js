'use strict';

const { Router } = require('express')
const router = Router()

// models

router.get('/', (req, res) =>
  res.render('index')
)

router.get('/new', (req, res) => 
	res.render('new-topic')
)

module.exports = router
