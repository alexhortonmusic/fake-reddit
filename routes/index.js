'use strict';

const { Router } = require('express')
const router = Router()

// models

router.get('/', (req, res) =>
  res.render('index')
)

module.exports = router
