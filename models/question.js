const mongoose = require('mongoose');

// Question Schema
const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    options: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Option' }],
    totalVotes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Question Model
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
