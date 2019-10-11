import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const dominioSchema = new Schema({
  nombreApli: String,
  puerto    : number,
  nombreDomi: String
})
  
export default mongoose.model('dominio', dominioSchema)