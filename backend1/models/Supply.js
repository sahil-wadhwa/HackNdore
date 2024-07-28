// models/Supply.js
import mongoose from 'mongoose';

const supplySchema = new mongoose.Schema({
  supply_name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  batch_no: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  shelf_life: {
    type: Number,
    required: true
  },
  reorder_level: {
    type: Number,
    required: true
  },
  reorder_quantity: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: true
  }
});

const Supply = mongoose.model('Supply', supplySchema);

export default Supply;
