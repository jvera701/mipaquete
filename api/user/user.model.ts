import mongoose, { Schema } from 'mongoose'

export interface IUser {
  ip: string
  token: string
  requests: Array<string>
}

const schema: Schema = new Schema({
  ip: { type: String },
  token: { type: String, unique: true },
  requests: { type: [String] },
})

export default mongoose.model<IUser>('User', schema, 'User')
