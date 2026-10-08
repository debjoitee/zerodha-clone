const mongoose = require("mongoose");
const HoldingsSchema = require("../schemas/HoldingsSchemas");

const HoldingsModel = mongoose.model("Holding", HoldingsSchema);

module.exports = HoldingsModel;
