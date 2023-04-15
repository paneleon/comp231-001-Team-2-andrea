import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import moment from 'moment';
import Nav from "../Nav";
import Footer from "../Footer";


function BookRoom() {

  //personal information here
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [checkInDate, setCheckInDate] = useState("");
  // const [checkOutDate, setCheckOutDate] = useState("");
  const [numOfGuests, setNumOfGuests] = useState("");


  //room details here 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState();
  const { id, checkInDate, checkOutDate } = useParams();

  const firstdate = moment(checkInDate , 'DD-MM-YYYY')
  const lastdate = moment(checkOutDate , 'DD-MM-YYYY')
  const totalDays = moment.duration(lastdate.diff(firstdate)).asDays()+1

  const [totalAmount, setTotalAmount] = useState()

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
        setTotalAmount(data.price * totalDays)
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
      const data = {guestName, email, phone, numOfGuests, checkInDate, checkOutDate, roomId: room._id}
      axios.post(`http://localhost:5000/bookings`, data)
      .then(() => {
          navigate("/payment");
      })
      
      // console.log(data)
    };

  return (
    <>
    <Nav/>
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
                {/* <div>
                  <label htmlFor="checkInDate">Check In Date:</label>
                  <input
                    type="date"
                    id="checkInDate"
                    name="checkInDate"
                    value={checkInDate}
                    onChange={(e) => {setCheckInDate (e.target.value)}}
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="checkOutDate">Check Out Date:</label>
                  <input
                    type="date"
                    id="checkOutDate"
                    name="checkOutDate"
                    value={checkOutDate}
                    onChange={(e) => {setCheckOutDate (e.target.value)}}
                  />
                </div> */}
                <p>Check In Date: {checkInDate}</p>
                <p>Check Out Date: {checkOutDate}</p>
                <p>Total Days: {totalDays}</p>
                <div style={{ textAlign: "right" }}>
                  <h3>Room Details</h3>
                  <p>Room Type: {room.roomType} </p>
                  <p>Max Guests: {room.maxGuests}</p>
                  <p>Price: ${room.price} per day</p>
                  <p>Total Cost: ${totalAmount}</p>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Pay Now</button>
              </div>
            </div>
          </div>
        ) : (<h3>Something went wrong, please try again later</h3>)}
      </div>
      <Footer/>
    </>
  );
}

export default BookRoom;
