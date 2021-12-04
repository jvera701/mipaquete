import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
require('./api/movies/movies.model')
require('./api/user/user.model')
import mongoose = require('mongoose')
import cors = require('cors')
import configure = require('./index')
import routes from './routes'

const app: express.Application = express()
app.use(cors())
app.use(express.json())
app.set('trust proxy', true)
const config = configure.config
app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`)
})

//routes that will be used
routes(app)
mongoose.connect(config.dbConnectionString)
app.use((err, req, res) => {
  //res.status(500).json({ error: err.message })
  console.error(err)
})

mongoose.connection.on('error', function (e) {
  console.error(e)
})

export default { app }
