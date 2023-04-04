import React from "react";
import {Link} from 'react-router-dom';

function Room({ room }) {
  return (
    <div>
      <div className="room-image">
        <img src={room.image} />
      </div>
      <div className="room-details">
        <h2>Room {room._id}</h2>
        <h3>Room Type: {room.roomType}</h3>
        <p>{room.description}</p>
        <p>Max Number of guests: {room.maxGuests}</p>
        <p>Price: ${room.price}/night</p>
        <Link to={`/book-room/${room._id}`}>
              <div>
                <button>Book Room</button>
              </div>
        </Link>
      </div>
    </div>
  );
}

export default Room;
