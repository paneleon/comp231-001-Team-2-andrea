// routes/bookings.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const Room = require('../models/room');

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find()
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific booking by ID
router.get('/:id', getBooking, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('room');
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new booking
router.post('/', async (req, res) => {
  const booking = new Booking({
    guestName: req.body.guestName,
    email: req.body.email,
    phone: req.body.phone,
    numOfGuests: req.body.numOfGuests,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate,
    hasBreakfast: req.body.hasBreakfast,
    totalCost: req.body.totalCost,
    room: req.body.room // this should be the ID of the corresponding room document
  });

  try {
    const newBooking = await booking.save();
    // Populate the room document
    // await newBooking.populate('room').execPopulate();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a booking by ID
router.patch('/:id', getBooking, async (req, res) => {
  if (req.body.guestName != null) {
    res.booking.guestName = req.body.guestName;
  }
  if (req.body.email != null) {
    res.booking.email = req.body.email;
  }
  if (req.body.phone != null) {
    res.booking.phone = req.body.phone;
  }
  if (req.body.numOfGuests != null) {
    res.booking.numOfGuests = req.body.numOfGuests;
  }
  if (req.body.checkInDate != null) {
    res.booking.checkInDate = req.body.checkInDate;
  }
  if (req.body.checkOutDate != null) {
    res.booking.checkOutDate = req.body.checkOutDate;
  }
  if (req.body.hasBreakfast != null) {
    res.booking.hasBreakfast = req.body.hasBreakfast;
  }
  if (req.body.totalCost != null) {
    res.booking.totalCost = req.body.totalCost;
  }
  if (req.body.room != null) {
    res.booking.room = req.body.room;
  }

  try {
    const updatedBooking = await res.booking.save();
    // Populate the room document
    await updatedBooking.populate('room').execPopulate();
    res.json(updatedBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a booking by ID
router.delete('/:id', getBooking, async (req, res) => {
  try {
    await res.booking.remove();
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    
    res.status(400).json({ message: err.message });
}
});

// Middleware function to get a specific booking by ID
async function getBooking(req, res, next) {
    try {
    const booking = await Booking.findById(req.params.id);
    if (booking == null) {
    return res.status(404).json({ message: 'Booking not found' });
    }
    res.booking = booking;
    next();
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
    }
    
module.exports = router;