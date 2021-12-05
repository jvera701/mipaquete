import express = require('express')
import * as MovieController from './movies.controller'
import auth from '../../middleware/middleware'
const app = express.Router()

app.get('/filter', auth, MovieController.filter)
app.get('/search', auth, MovieController.search)
export { app }
