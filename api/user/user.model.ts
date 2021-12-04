import mongoose, { Schema } from 'mongoose'

export interface IUser {
  ip: string
  token: string
  _id: mongoose.Schema.Types.ObjectId
}

const schema: Schema = new Schema({
  ip: { type: String },
  token: { type: String },
  _id: { type: mongoose.Schema.Types.ObjectId },
})

export default mongoose.model<IUser>('User', schema, 'User')
