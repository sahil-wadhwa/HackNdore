import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 }
});

const Item = mongoose.model('Item', itemSchema);

export default Item;