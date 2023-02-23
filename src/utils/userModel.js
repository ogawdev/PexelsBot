const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  name: String,
  username: String,
  phone: String,
});

const User = mongoose.model("users", userSchema);
module.exports = User;
