import Movie from './movies.model'
import { Request, Response, NextFunction } from 'express'
import axios from 'axios'
import configure = require('../../index')
const config = configure.config

export async function filter(req: Request, res: Response, next: NextFunction) {
  try {
    const { genres, director, year, page, maxPage } = req.query
    let obj = {}
    if (genres) obj['genres'] = { $all: JSON.parse(genres as string) }
    if (director) obj['director'] = director
    if (year) obj['year'] = year

    const newPage = parseInt(page as string) || 1
    const newRegister = parseInt(maxPage as string) || 10

    const answer = await Movie.find(
      obj,
      {},
      {
        skip: (newPage - 1) * newRegister,
        limit: newRegister,
      }
    )
    res.status(200).send(answer)
  } catch (error) {
    console.error(error)
    next()
  }
}

export async function search(req: Request, res: Response, next: NextFunction) {
  try {
    const { search } = req.query
    const spanish: any = await Movie.findOne({
      spanish: { $all: [search] },
    })

    if (spanish) {
      const name = spanish.name
      const answer = await axios.get(
        'http://www.omdbapi.com/?apikey=' + config.apiKey,
        {
          params: {
            t: name,
            type: 'movie',
          },
        }
      )
      res.status(200).send(answer.data)
    } else {
      const answer = await axios.get(
        'http://www.omdbapi.com/?apikey=' + config.apiKey,
        {
          params: {
            t: search,
            type: 'movie',
          },
        }
      )
      res.status(200).send(answer.data)
    }
  } catch (error) {
    console.log(error)
    next()
  }
}
