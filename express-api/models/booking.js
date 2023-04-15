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

    // roomType: {
    //   type: String,
    //   required: true
    // },

    // numOfGuests: {
    //   type: Number,
    //   required: true
    // },
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

    // hasBreakfast: {
    //   type: Boolean,
    //   required: true
    // },

    totalCost: {
      type: Number,
      required: true
    },

    totalDays: {
      type:Number,
      required: true
    },

    status: {
      type: String,
      required: true, default: "booked"
    }

    // room: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Room',
    //   // required: true
    // }

}, {
    timestamps:true,
});

// bookingSchema
//     .populate('room')
//     .execPopulate();
//allows user to select the room and bring the same info into the booking page 

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
