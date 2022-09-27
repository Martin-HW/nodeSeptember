const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "you must provide a name"],
  },
  email: {
    type: String,
    required: [true, "you must provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "you must provide a password"],
  },
});

module.exports = model("User", UserSchema);
