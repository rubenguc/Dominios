import mongoose, { Schema } from "mongoose";

const { ObjectId } = Schema.Types;

const dominioSchema = new Schema({
  nombreApp: { type: String, required: true },
  puerto: { type: String, required: true },
  nombreDom: { type: String, required: true }
});

export default mongoose.model("Dominio", dominioSchema);
