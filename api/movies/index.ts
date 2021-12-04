import express = require('express')
import * as MovieController from './movies.controller'
const app = express.Router()

app.get('/filter', MovieController.filter)
app.get('/search', MovieController.search)
export { app }
