const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

    guestName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },
    
    phone: {
        type: Number,
        required: true
    },

  roomType: {
    type: String,
    required: true
  },

  numOfGuests: {
    type: Number,
    required: true
  },

  checkInDate: {
    type: Date,
    required: true
  },

  checkOutDate: {
    type: Date,
    required: true
  },

  hasBreakfast: {
    type: Boolean,
    required: true
  },

  totalCost: {
    type: Number,
    required: true
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
