import './App.css';
import React, {useState} from 'react';
import Nav from './Nav';


function MyProfile() {
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [email, setEmail] = useState('johndoe@gmail.com');
    const [phone, setPhone] = useState('+1234567890');
    const [country, setCountry] = useState('United States');
    const [address, setAddress] = useState('123 Main St');
    const [city, setCity] = useState('New York');
    const [bookings, setBookings] = useState([
        {
          id: 1,
          checkInDate: '2022-04-15',
          checkOutDate: '2022-04-20',
          roomType: 'Double Room',
          status: 'Confirmed',
        },
        {
          id: 2,
          checkInDate: '2022-05-10',
          checkOutDate: '2022-05-14',
          roomType: 'Suite',
          status: 'Pending',
        },
      ]);
    
      const handleEdit = () => {
        // Handle edit button click
      };
    
      return (
        <>
        <Nav/>
        <div className='profilepage'>
          <h1>Profile</h1>
          <div>
            <label>First Name:</label>
            <span>{firstName}</span>
          </div>
          <div>
            <label>Last Name:</label>
            <span>{lastName}</span>
          </div>
          <div>
            <label>Email:</label>
            <span>{email}</span>
          </div>
          <div>
            <label>Phone:</label>
            <span>{phone}</span>
          </div>
          <div>
            <label>Country:</label>
            <span>{country}</span>
          </div>
          <div>
            <label>Address:</label>
            <span>{address}</span>
          </div>
          <div>
            <label>City:</label>
            <span>{city}</span>
          </div>
          <button onClick={handleEdit}>Edit</button>
          <h2>Bookings</h2>
          {bookings.length > 0 ? (
            <ul>
              {bookings.map((booking) => (
                <li key={booking.id}>
                  <div>
                    <label>Check-in Date:</label>
                    <span>{booking.checkInDate}</span>
                  </div>
                  <div>
                    <label>Check-out Date:</label>
                    <span>{booking.checkOutDate}</span>
                  </div>
                  <div>
                    <label>Room Type:</label>
                    <span>{booking.roomType}</span>
                  </div>
                  <div>
                    <label>Status:</label>
                    <span>{booking.status}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (<p>No bookings found.</p>)}
        </div>
        </>
      );
    }
export default MyProfile;