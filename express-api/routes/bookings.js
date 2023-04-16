// routes/bookings.js
const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Room = require("../models/room");
const moment = require("moment");

// Get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific booking by ID
router.get("/:id", getBooking, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("room");
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post("/bookroom", async (req, res) => {
  const {
    guestName,
    email,
    phone,
    checkInDate,
    checkOutDate,
    totalAmount,
    totalDays,
    room,
  } = req.body;

  try {
    const newBooking = new Booking({
      guestName: req.body.guestName,
      email: req.body.email,
      phone: req.body.phone,
      checkInDate,
      checkOutDate,
      totalAmount,
      totalDays,
      room: room.roomType,
      roomid: room._id, // this should be the ID of the corresponding room document
    });

    const booking = await newBooking.save();

    //update currentBookings[]
    const roomTemp = await Room.findOne({ _id: room._id });
    roomTemp.currentBookings.push({
      bookingId: booking._id,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      status: booking.status
    });
    //updating after pushing current bookings
    await roomTemp.save()

    res.send("Room booked successfully!");
  } catch (error) {
    res.status(400).json({ error });
  }
});


router.post("/getbookingsbyuser", async(req, res) => {
  const guestName = req.body.guestName;

  try{
    const bookings = await Booking.find({guestName: guestName})
    res.send(bookings)

  } catch (error) {
    res.status(400).json({ error });
  }
});


//cancel booking
router.post("/cancelbooking", async(req, res) => {
  const {bookingId, roomid} = req.body
  console.log("bookingId:", bookingId);
  console.log("roomId:", roomid);
  try{

    //find booking and cancel it, then set status to cancelled
    const bookingItem = await Booking.findOne({_id: bookingId})
    console.log("bookingItem:", bookingItem);
    bookingItem.status = "Cancelled"
    await bookingItem.save()

    //update the rooms availability
    const room = await Room.findOne({_id: roomid})
    console.log("room:", room);
    const bookings = room.currentBookings
    const tempBookings = bookings.filter(booking => booking.bookingId.toString() !== bookingId)
    room.currentBookings = tempBookings

    await room.save()
    res.send("Booking cancelled successfully!")
  }
  catch(error) {
    console.log(error);
    res.status(400).json({ error });
  }
})


// Middleware function to get a specific booking by ID
async function getBooking(req, res, next) {
  try {
    const booking = await Booking.findById(req.params.id);
    if (booking == null) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.booking = booking;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = router;
