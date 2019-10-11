import mongoose, { Schema} from 'mongoose'

const { objectId } = Schema.Types 
const adminSchema = new Schema({
    nombre   : {type: String, required: true},
    apellido : {type: String, required: true},
    tlf      : Number,
    direccion: String,
    email    : {type: String, required: true},
    password : { type: String, required: true}
})

export default mongoose.model('admin', adminSchema)