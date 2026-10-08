const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  name: String,
  price: Number,
  qty: Number,
  avg: Number,
  net: String,
  day: String,
});

module.exports = HoldingsSchema;
