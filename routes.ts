import express from 'express'
import { app as appMovie } from './api/movies/index'
import { app as appUser } from './api/user/index'

export default function routes(application: express.Application) {
  application.use(appMovie)
  application.use(appUser)
}
