import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function BookRoom() {

  //personal information here
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numOfGuests, setNumOfGuests] = useState("");


  //room details here 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = (
          await axios.post("http://localhost:5000/rooms/getroombyid", {
            roomId: id,
          })
        ).data;
        setRoom(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);


    const handleSubmit = (event) => {
      event.preventDefault();
      const data = {guestName, email, phone, checkInDate, checkOutDate, numOfGuests, room}
      axios.post(`http://localhost:5000/bookings`, data)
      .then(() => {
          navigate("/payment");
      })
      
      // console.log(data)
    };

  return (
    <>
      <p>Room ID: {id}</p>
      <div>
        {loading ? (
          <h1><Loader/></h1>
        ) : room ? (
          <div>
            <div>
              <div className="img-form">
                <h3>{room.roomType}</h3>
                <img src={room.image} />
              </div>
              {/* <div className="booking-details"> */}
              <div className="bookroom-main">
                <h3>Booking Details</h3>
                <div>
                  <label htmlFor="guestName">Name:</label>
                  <input
                    type="text"
                    id="guestName"
                    name="guestName"
                    value={guestName}
                    onChange={(e) => {setGuestName (e.target.value)}}
                  />
                </div>

                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {setEmail (e.target.value)}}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => {setPhone (e.target.value)}}
                  />
                </div>
                <div>
                  <label htmlFor="numOfGuests">Number of Guests:</label>
                  <input
                    type="number"
                    id="numOfGuests"
                    name="numOfGuests"
                    value={numOfGuests}
                    onChange={(e) => {setNumOfGuests (e.target.value)}}
                  />
                </div>
                <div>
                  <label htmlFor="checkInDate">Check In Date:</label>
                  <input
                    type="date"
                    id="checkInDate"
                    name="checkInDate"
                    value={checkInDate}
                    onChange={(e) => {setCheckInDate (e.target.value)}}
                  />
                </div>
                <div>
                  <label htmlFor="checkOutDate">Check Out Date:</label>
                  <input
                    type="date"
                    id="checkOutDate"
                    name="checkOutDate"
                    value={checkOutDate}
                    onChange={(e) => {setCheckOutDate (e.target.value)}}
                  />
                </div>
                <div style={{ textAlign: "right" }}>
                  <h3>Room Details</h3>
                  <p>Room Type: {room.roomType} </p>
                  <p>Max Guests: {room.maxGuests}</p>
                  <p>Price: ${room.price} per day</p>
                  <p>Total Cost: </p>
                </div>
                <button type="submit" onClick={handleSubmit}>Pay Now</button>
              </div>
            </div>
          </div>
        ) : (<h3>Something went wrong, pelase try again later</h3>)}
      </div>
      
    </>
  );
}

export default BookRoom;
