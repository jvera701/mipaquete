import User from '../api/user/user.model'

const auth = async (req, res, next) => {
  try {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    const ip = req.ip
    const { token } = req.query
    if (token) {
      const user = await User.findOne({ token: token })
      if (user) {
        await User.updateOne({ token: token }, { $push: { requests: fullUrl } })
      } else {
        await User.create({ token: token, requests: [fullUrl] })
      }
    } else {
      const user = await User.findOne({ ip: ip })
      if (user) {
        await User.updateOne({ ip: ip }, { $push: { requests: fullUrl } })
      } else {
        await User.create({ ip: ip, requests: [fullUrl] })
      }
    }
    next()
  } catch (err) {
    console.log(err)
  }
}

export default auth
