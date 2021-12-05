import User from './user.model'
import { Request, Response, NextFunction } from 'express'

export async function getIP(req: Request, res: Response, next: NextFunction) {
  try {
    const { ip } = req.query
    const user = await User.findOne({ ip: ip as string })
    if (user) res.status(200).json(user.requests)
    else {
      res.status(404).json('User not found')
    }
  } catch (error) {
    console.error(error)
    next()
  }
}

export async function getToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { token } = req.query
    const user = await User.findOne({ token: token as string })
    if (user) res.status(200).json(user.requests)
    else {
      res.status(404).json('User not found')
    }
  } catch (error) {
    console.error(error)
    next()
  }
}
