import express from 'express'
import { app as appMovie } from './api/movies/index'

export default function routes(application: express.Application) {
  application.use(appMovie)
}
