const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      // unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      required: true,
      minlength: 10,
    },
    country: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 3,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
