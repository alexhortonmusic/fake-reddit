'use strict'

const mongoose = require('mongoose')
const MONGODB_URL = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/fake-reddit'

mongoose.Promise = Promise

module.exports.connect = () => mongoose.connect(MONGODB_URL)
