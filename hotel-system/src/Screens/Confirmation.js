import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Confirmation({ room }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [recipient, setRecipient] = useState("");

  const [info, setInfo] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const roomData = await axios.get(`http://localhost:5000/rooms/bookings`);
      // setRooms(roomData.data);
      // setName(name);
      setInfo(roomData);
      console.log(roomData.data);
    } catch (error) {
      console.log(error);
    }
  };

  function handleRecipientChange(e) {
    setRecipient(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (recipient) {
      window.alert("Receipt sent!");
      navigate("/");
    } else {
      window.alert("Please enter an email for your receipt to be sent.");
    }
  }

  return (
    <>
      <div className="confirmation-page">
        <h2>Confirmation Page</h2>
        {/* <div className="booking-details">
        <p>Room Name: {room.roomType}</p>
        <p>Maximum Number of Guests or Number of Beds: {room.numGuests}</p>
        <p>Price: {room.price}</p>
        <p>Description: {room.description}</p>
        <p>Amenities: {room.amenities}</p>
      </div> */}
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
        <div>
          <p>
            Send to recipient:
            <input
              type="text"
              name="recipient"
              value={recipient}
              placeholder="abc@gmail.com"
              onChange={handleRecipientChange}
            ></input>
          </p>
          <button value="Submit" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
