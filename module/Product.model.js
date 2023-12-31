import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  myFile: {
    type: String,
    required: true,
  },
  comment: {
    type: [Object],
  },
  recommended: {
    type: Array,
    default: [],
  },
  favorites: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    default: 0,
  },
  maxCount: {
    type: Number,
    default: 1,
  },
  name: {
    type: String,
    required: true,
  },
  teg: {
    type: Array,
    default: [],
    required: true,
  },
  size: {
    type: Array,
    default: [],
    required: true,
  },
  color: {
    type: Array,
    default: [],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export default mongoose.model("product", productSchema);
