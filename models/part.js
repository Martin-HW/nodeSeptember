const { Schema, model } = require("mongoose");

const Part = Schema({
  color: {
    type: String,
    required: [true, "you must provide a car"],
  },
  name: {
    type: String,
    required: [true, "you must provide a name"],
  },
  description: {
    type: String,
    required: [true, "you must provide a description"],
  },
});

module.exports = model("Part", Part);
