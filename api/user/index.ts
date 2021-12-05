import express = require('express')
import * as UserController from './user.controller'
const app = express.Router()

app.get('/ip', UserController.getIP)
app.get('/token', UserController.getToken)

export { app }
