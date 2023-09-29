const mongoose = require('mongoose');
const specialistSchema = new mongoose.Schema({
    category: {
      type: String,
      unique: [true, "specialist is required"],
      required: [true, "specialist is required"],
    },
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
    updatedAt: { 
      type: Date,
      default: () => Date.now(),
    },
  });

module.exports = mongoose.model('Specialist' , specialistSchema);