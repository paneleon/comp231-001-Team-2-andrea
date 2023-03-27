import React, { useState } from 'react';
import Nav from './Nav';

function Confirmation(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [numGuests, setNumGuests] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [totalCost, setTotalCost] = useState('');

  return (
    <>
    <Nav/>
    <div className="confirmation-page">
      <h2>Confirmation Page</h2>
      <div className="booking-details">
        <p>Room Name: {props.roomName}</p>
        <p>Maximum Number of Guests or Number of Beds: {props.maxGuestsOrBeds}</p>
        <p>Price: {props.price}</p>
        <p>Description: {props.description}</p>
        <p>Amenities: {props.amenities}</p>
      </div>
      <div className="personal-info">
      <h3>Personal Information:</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Number of Guests: {numGuests}</p>
        <p>Check-in Date: {checkInDate}</p>
        <p>Check-out Date: {checkOutDate}</p>
        <p>Total Cost: {totalCost}</p>
      </div>
    </div>
    </>
  );
}

export default Confirmation;
