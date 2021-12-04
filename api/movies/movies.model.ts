import mongoose, { Schema } from 'mongoose'

export interface IMovie {
  name: string
  genres: Array<string>
  spanish: Array<string>
  director: string
  year: number
  _id: mongoose.Schema.Types.ObjectId
}

const schema: Schema = new Schema({
  name: { type: String, required: true },
  spanish: { type: [String], required: true },
  genres: { type: [String], required: true },
  director: { type: String, required: true },
  year: { type: String, required: true },
  _id: { type: mongoose.Schema.Types.ObjectId },
})

export default mongoose.model<IMovie>('Movie', schema, 'Movie')
