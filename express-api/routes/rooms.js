// routes/rooms.js
const express = require('express');
const router = express.Router();
const Room = require('../models/room');

// Get all rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific room by ID
router.get('/:id', getRoom, (req, res) => {
  res.json(res.room);
});

// Create a new room
router.post('/', async (req, res) => {
  const room = new Room({
    roomType: req.body.roomType,
    roomNumber: req.body.roomNumber,
    description: req.body.description,
    price: req.body.price,
    maxGuests: req.body.maxGuests,
    imageUrl: req.body.imageUrl
});
    try {
    const newRoom = await room.save();
    res.status(201).json(newRoom);
    } catch (err) {
    res.status(400).json({ message: err.message });
    }
    });

// Update a room by ID
router.patch('/:id', getRoom, async (req, res) => {
    if (req.body.name != null) {
        res.room.name = req.body.name;
    }
    if (req.body.description != null) {
        res.room.description = req.body.description;
    }
    if (req.body.price != null) {
        res.room.price = req.body.price;
    }
    if (req.body.maxGuests != null) {
        res.room.maxGuests = req.body.maxGuests;
    }
    if (req.body.imageUrl != null) {
        res.room.imageUrl = req.body.imageUrl;
    }
    try {
    const updatedRoom = await res.room.save();
    res.json(updatedRoom);
    } catch (err) {
    res.status(400).json({ message: err.message });
    }
});

// Delete a room by ID
router.delete('/:id', getRoom, async (req, res) => {
    try {
    await res.room.remove();
    res.json({ message: 'Room deleted' });
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
});


async function getRoom(req, res, next) {
    let room
    try {
      room = await Room.findById(req.params.id)
      if (room == null) {
        return res.status(404).json({ message: 'Cannot find room' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.room = room
    next()
  }
  

module.exports = router;
