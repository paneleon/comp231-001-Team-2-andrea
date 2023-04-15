import React from "react";
import { Link } from 'react-router-dom';
import './Room.css'; // import the CSS file

function Room({ room }) {
  return (
    <div className="room-main-container">
      <div className="room-image-container">
        <img src={room.image} alt={room.roomType} />
      </div>
      <div className="room-details-container">
        <h2>Room {room._id}</h2>
        <table className="room-table">
          <tbody>
            <tr>
              <td className="room-table-rowname">Room Type:</td>
              <td>{room.roomType}</td>
            </tr>
            <tr>
              <td className="room-table-rowname">Description:</td>
              <td>{room.description}</td>
            </tr>
            <tr>
              <td className="room-table-rowname">Max Guests:</td>
              <td>{room.maxGuests}</td>
            </tr>
            <tr>
              <td className="room-table-rowname">Price:</td>
              <td>${room.price}/night</td>
            </tr>
          </tbody>
        </table>
        <div className="room-bookbutton-container">
          <Link to={`/book-room/${room._id}`}>
            <button className="room-bookbutton">Book Room</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Room;
