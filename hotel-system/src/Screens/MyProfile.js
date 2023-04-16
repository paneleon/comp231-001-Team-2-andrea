import "../App.css";
import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import Loader from "../Components/Loader";
import axios from "axios";
import { Tabs, Table } from "antd";
import { useParams, useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

function MyProfile({userId}) {
  const {id} = useParams();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/bookings", {
          params: { guestName: userId }
      });
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    }

    getBookings();
  }, [userId]);

  const columns = [
    {
      title: 'Guest Name',
      dataIndex: 'guestName',
      key: 'guestName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone No.',
      dataIndex: 'phone',
      key: 'phone',
    }
  ];

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Something went wrong, please try again later.</p>;
  }

  return (
    <>
      <Nav />
      <div className="my-profile mt-3 ml-3">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Profile" key="1">
            <Table dataSource={bookings} columns={columns} />
          </TabPane>
          <TabPane tab="Bookings" key="2">
            <MyBookings userId={id} />
          </TabPane>
        </Tabs>
      </div>
      <Footer />
    </>
  );
}

export default MyProfile;

function MyBookings({ userId }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [recipient, setRecipient] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/bookings", {
          params: { guestName: userId }
      });
        setBookings(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    }

    getBookings();
  }, [userId]);


  async function cancelBooking(bookingId, roomid) {
    try {
      // setLoading(true);
      const result = await axios.post("http://localhost:5000/bookings/cancelbooking", {
        bookingId,
        roomid,
      });
      console.log(result.data);
      setLoading(false);
      window.alert("Booking cancelled successfully!");
      window.location.reload()
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  //send email receipt
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

  const columns = [
    {
      title: 'Room',
      dataIndex: 'room',
      key: 'room',
    },
    {
      title: 'Check-In Date',
      dataIndex: 'checkInDate',
      key: 'checkInDate',
    },
    {
      title: 'Check-out Date',
      dataIndex: 'checkOutDate',
      key: 'checkOutDate',
    },
    {
      title: 'Total Days',
      dataIndex: 'totalDays',
      key: 'totalDays',
    },
   
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      render: (value) => `$${value}`
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      
      key: 'action',
      render: (_text, booking) => (
        booking.status !== "Cancelled" && (
          <button className="btn btn-primary" onClick={() => {cancelBooking(booking._id, booking.roomid)}}> Cancel Booking</button>
        )
      )
      
    },
    
  ];

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Something went wrong, please try again later.</p>;
  }

  return (
    <>
      <Table dataSource={bookings} columns={columns} />
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
          <button className="btn btn-primary" value="Submit" onClick={handleSubmit}>
            Send
          </button>
        </div>
    </>
  )
}
