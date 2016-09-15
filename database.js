'use strict'

const mongoose = require('mongoose')
const MONGODB_URL = 'mongodb://localhost:27017/fake-reddit'

mongoose.Promise = Promise

module.exports.connect = () => mongose.connect(MONGODB_URL)
