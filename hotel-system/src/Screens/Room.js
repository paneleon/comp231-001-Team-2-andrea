import React from "react";
import {Link} from 'react-router-dom';
import '../App.css'; // import the CSS file

function Room({ room, checkInDate, checkOutDate }) {
  return (
    <div className="room-container">
      <div className="room-image">
        <img src={room.image} alt={room.roomType} />
      </div>
      <div className="room-details">
        <h2>Room {room._id}</h2>
        <table className="room-table">
          <tbody>
            <tr>
              <td>Room Type:</td>
              <td>{room.roomType}</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{room.description}</td>
            </tr>
            <tr>
              <td>Max Guests:</td>
              <td>{room.maxGuests}</td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>${room.price}/night</td>
            </tr>
          </tbody>
        </table>
        <Link to={`/rooms/${room._id}/${checkInDate}/${checkOutDate}`}>
          <button>Book Room</button>
        </Link>
      </div>
    </div>
  );
}

export default Room;
