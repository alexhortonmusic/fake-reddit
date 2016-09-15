'use strict'

const express = require('express')
const chalk = require('chalk')
const bodyParser = require('body-parser')

const routes = require('./routes/') //index file containing routing info
const { connect } = require('./database')

const app = express()

const port = process.env.PORT || 3000
app.set('port', port)

app.set('view engine', 'pug')


// routes
app.use(routes)

//middlewares

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))


//Listens to Port for changes
// connect()
// 	.then(() => {
// 		app.listen(port, () => {
// 			console.log(`Express server listening on port ${port}`)
// 		})
// 	})
// 	.catch(console.error)


app.listen(3000)
