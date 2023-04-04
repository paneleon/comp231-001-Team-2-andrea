const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomType: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  maxGuests: {
    type: Number,
    required: true
  },

  image: {
    type: String
  },

  //to check availability 
  currentBookings: []
} , {
  timestamps: true,
});

module.exports = mongoose.model('Room', roomSchema);
