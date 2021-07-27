const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    Assigdesc: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);
const Assignment = mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment;
