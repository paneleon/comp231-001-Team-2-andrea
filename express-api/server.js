require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

const bookingsDb = mongoose.createConnection('mongodb://127.0.0.1:27017/bookings', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const roomsDb = mongoose.createConnection('mongodb://127.0.0.1:27017/rooms', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));
bookingsDb.on('error', (error) => console.error(error));
bookingsDb.once('open', () => console.log('Connected to Bookings Database'));
roomsDb.on('error', (error) => console.error(error));
roomsDb.once('open', () => console.log('Connected to Rooms Database'));

app.use(express.json());
app.use(cors());


// const usersRouter = require('./routes/users.js');
const bookingsRouter = require('./routes/bookings');
const roomsRouter = require('./routes/rooms');

// app.use('/users', usersRouter);
app.use('/bookings', bookingsRouter);
app.use('/rooms', roomsRouter);

app.listen(5000, () => console.log('Server Started'));
