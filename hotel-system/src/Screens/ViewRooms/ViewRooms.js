import React, { useEffect, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import axios from "axios";
import Room from "../Room/Room";
import Loader from "../../Components/Loader";
import { DatePicker } from "antd";
import moment from "moment";
import Footer from "../../Components/Footer/Footer";
import './ViewRooms.css'

//added Antd date range picker
const { RangePicker } = DatePicker;

function ViewRooms() {
 
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();


  //adding date values
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();

  //filter by booked rooms
  const [duplicateRooms, setDuplicateRooms] = useState([]);


  //search key
  const [searchKey, setSearchKey] = useState("")
  const [roomType, setRoomType] = useState("all")

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const roomData = await axios.get(
          `http://localhost:5000/rooms/allrooms`
        );
        setRooms(roomData.data);
        setDuplicateRooms(roomData.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function filterByDate(dates) {
    //from date
    console.log(dates[0].format("DD-MM-YYYY"));
    setCheckInDate(dates[0].format("DD-MM-YYYY"));
    //to date
    console.log(dates[1].format("DD-MM-YYYY"));
    setCheckOutDate(dates[1].format("DD-MM-YYYY"));
  
    //tempRooms
    var tempRooms = [];
  
    for (const room of duplicateRooms) {
      var availability = false;
  
      if (room.currentBookings.length > 0) {
        for ( const booking of room.currentBookings) {
          //check between or equal to dates
          if (
            !moment(moment(dates[0]).format("DD-MM-YYYY")).isBetween(
              booking.checkInDate,
              booking.checkOutDate
            ) &&
            !moment(moment(dates[1]).format("DD-MM-YYYY")).isBetween(
              booking.checkInDate,
              booking.checkOutDate
            )
          ) {
            if (
              dates[0].format("DD-MM-YYYY") !== booking.checkInDate &&
              dates[0].format("DD-MM-YYYY") !== booking.checkOutDate &&
              dates[1].format("DD-MM-YYYY") !== booking.checkInDate &&
              dates[1].format("DD-MM-YYYY") !== booking.checkOutDate
            ) {
              availability = true;
            }
          }
        }
      } else {
        availability = true;
      }
  
      if (availability === true) {
        tempRooms.push(room);
      }
    }
  
    setRooms(tempRooms);
  }

  //filter by search of room name or price value
  function filterBySearch() {
    const tempRooms = duplicateRooms.filter(room =>
      room.roomType.toLowerCase().includes(searchKey.toLowerCase()) ||
      room.price.toString().includes(searchKey)
    );
    setRooms(tempRooms);
  }


  //filter by type All, Single, Double
  function filterByType(e) {
    setRoomType(e)
    if(e !== 'all') {
      const tempRooms = duplicateRooms.filter(room => room.roomType.toLowerCase()===e.toLowerCase())
      setRooms(tempRooms);
    }
    else {
      setRooms(duplicateRooms)
    }
  } 

  return (
    <>
      <Nav />
      
      {/* Room List */}
      <div className="viewrooms-roomlist-container">        
      <div className="row mt-5">

          {/* search filter */}
          <div className="col-md-4" style={{marginLeft:"30px"}}>
            <input type="text" className="form-control" placeholder="Search Rooms by type or price"
            value={searchKey} onChange={(e) => {setSearchKey(e.target.value)}} onKeyUp={filterBySearch} />
          
          </div>


          {/* filter by date */}
          <div className="col-md-3" style={{marginLeft:"60px"}}>
            <RangePicker  format="DD-MM-YYYY" onChange={filterByDate} />
          </div>



           {/* Based on selection */}
          <div className="col-md-4" >
            <select className="form-control" value={roomType} onChange={(e)=>{filterByType(e.target.value)}}>
                <option value="all">All </option>
                <option value="single">Single </option>
                <option value="double">Double </option>
                <option value="suite">Suite </option>
            </select>
          </div>

        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>
            <Loader />
          </h1>
        ) : (
          rooms.map((room) => {
            return (
              <div className="col-md-10 mt-2">
                <Room
                  room={room}
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                />
              </div>
            );
          })
        )}      
      </div>
      <Footer />
    </>
  );
}

export default ViewRooms;
