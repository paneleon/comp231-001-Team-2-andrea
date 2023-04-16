const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

    guestName: {
        type: String,
        required: true,
        index: true 
    },

    email: {
        type: String,
        required: true,
    },
    
    phone: {
        type: Number,
        required: true
    },

    room: {
      type: String, 
      required: true
    },

    roomid: {
      type: String, 
      required: true
    },

    checkInDate: {
      type: String,
    },

    checkOutDate: {
      type: String,
    },

    totalAmount: {
      type: Number,
      required: true
    },

    totalDays: {
      type:Number,
      required: true
    },

    status: {
      type: String,
      required: true, default: "Booked"
    }

}, {
    timestamps:true,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
