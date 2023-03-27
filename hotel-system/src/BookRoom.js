import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookRoom() {
  const [roomName, setRoomName] = useState('');
  const [image, setImage] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [description, setDescription] = useState('');
  const [amenities, setAmenities] = useState('');
  const [numGuests, setNumGuests] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [totalCost, setTotalCost] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/payment');
    
  }

  return (
    <div className="book-room-page">
      <h2>{roomName}</h2>
      <img src={image} alt={roomName} />
      <form onSubmit={handleSubmit}>
        <div className="booking-info">
          <h3>Booking Information:</h3>
          <div className="booking-field">
            <label htmlFor="checkInDate">Check-in Date:</label>
            <input type="date" id="checkInDate" name="checkInDate" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />
          </div>
          <div className="booking-field">
            <label htmlFor="checkOutDate">Check-out Date:</label>
            <input type="date" id="checkOutDate" name="checkOutDate" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />
          </div>
        </div>
        <div className="room-details">
          <h3>Room Details:</h3>
          <p>{description}</p>
          <p>Amenities: {amenities}</p>
        </div>
        <div className="personal-info">
          <h3>Personal Information:</h3>
          <div className="personal-field">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="personal-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="personal-field">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="personal-field">
            <label htmlFor="numGuests">Number of Guests:</label>
            <input type="number" id="numGuests" name="numGuests" min="1" max="4" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} required />
          </div>
          <div className="personal-field">
            <label htmlFor="totalCost">Total Cost:</label>
            <input type="text" id="totalCost" name="totalCost" value={totalCost} onChange={(e) => setTotalCost(e.target.value)} readOnly />
          </div>
        </div>
        <button type="submit">Book Room</button>
        </form>
    </div>
  )
}

export default BookRoom;
