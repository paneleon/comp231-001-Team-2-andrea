import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import moment from "moment";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import './BookRoom.css'

function BookRoom() {
  //personal information here
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //room details here
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState();
  const { id, checkInDate, checkOutDate } = useParams();

  const firstdate = moment(checkInDate, "DD-MM-YYYY");
  const lastdate = moment(checkOutDate, "DD-MM-YYYY");
  const totalDays = moment.duration(lastdate.diff(firstdate)).asDays() + 1;

  const [totalAmount, setTotalAmount] = useState();

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
        setTotalAmount(data.price * totalDays);
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
  }, [id, totalDays]);

  async function handleSubmit() {
    const bookingDetails = {
      guestName,
      email,
      phone,
      checkInDate,
      checkOutDate,
      totalAmount,
      totalDays,
      room,
    };

    try {
      setLoading(true);
      const result = await axios
        .post("http://localhost:5000/bookings/bookroom", bookingDetails)
        .then(() => {
          navigate("/payment");
        });
        setLoading(false);
    } catch (error) {
      setLoading(false)
    }  
  }


  return (
    <>
      <Nav />
      <div>
        {loading ? (
          <h1><Loader /></h1>
        ) : room ? (
          <div className="bookroom-container">
            <div className="img-container">
              <h3>{room.roomType}</h3>
              <img src={room.image} />
            </div>
            <div className="form-container">
              <h4>Booking Details</h4>
              <div>
                <label htmlFor="guestName">Name:</label>
                <input type="text" id="guestName" name="guestName" value={guestName} onChange={(e) => setGuestName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <h4>Room Details</h4>
                <div>
                  <div>Room Type: {room.roomType}</div>
                  <div>Max Guests: {room.maxGuests}</div>
                  <div>Number of Days: {totalDays}</div>
                  <div>Price: ${room.price} per day</div>
                  <div>Total Cost: ${totalAmount}</div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Pay Now</button>
            </div>
          </div>
        ) : <div>Something went wrong, please try again later</div>}
      </div>
      <Footer />
    </>
  );
};

export default BookRoom;
