import "../App.css";
import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import axios from "axios";
import Room from "./Room";
import Loader from "../Components/Loader";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { useStyleRegister } from "antd/es/theme/internal";
import Footer from "../Footer";

//added Antd date range picker
const { RangePicker } = DatePicker;

function ViewRooms() {
  // const [selectedBeds, setSelectedBeds] = useState('');
  // const [selectedPrice, setSelectedPrice] = useState('');
  // const [selectedAmenities, setSelectedAmenities] = useState([]);

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  //adding date values
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();

  function filterByDate(dates) {
    //from date
    console.log(dates[0].format("DD-MM-YYYY"));
    setCheckInDate(dates[0].format("DD-MM-YYYY"));
    //to date
    console.log(dates[1].format("DD-MM-YYYY"));
    setCheckOutDate(dates[1].format("DD-MM-YYYY"));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const roomData = await axios.get(`http://localhost:5000/rooms/allrooms`);
      setRooms(roomData.data);
      console.log(roomData.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
    }
  };


  return (
    <>
      <Nav />
      {/* <div className='filter'>
        <div className='filter-select'>
          <select value={selectedBeds} onChange={handleBedsChange}>
            <option value='' hidden>Number of Beds</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </div>
        <div className='filter-select'>
          <select value={selectedPrice} onChange={handlePriceChange}>
            <option value='' hidden>Price</option>
            <option value='0-100'>$0 - $100</option>
            <option value='100-200'>$100 - $200</option>
            <option value='200-300'>$200 - $300</option>
            <option value='300-400'>$300 - $400</option>
            <option value='400-500'>$400 - $500</option>
            <option value='500+'>$500+</option>
          </select>
        </div>
        <div className='filter-select'>
          <label>Amenities:</label>
          <div className='filter-checkboxes'>
            <label>
              <input
                type='checkbox'
                name='amenities'
                value='pool'
                checked={selectedAmenities.includes('pool')}
                onChange={handleAmenitiesChange}
              />
              Pool
            </label>
            <label>
              <input
                type='checkbox'
                name='amenities'
                value='gym'
                checked={selectedAmenities.includes('gym')}
                onChange={handleAmenitiesChange}
              />
              Gym
            </label>
            <label>
              <input
                type='checkbox'
                name='amenities'
                value='spa'
                checked={selectedAmenities.includes('spa')}
                onChange={handleAmenitiesChange}
              />
              Spa
            </label>
          </div>
        </div>
        <button className='filter-button'>Filter</button>
      </div> */}

      {/* Room List */}
      <div className="row mt-4 justify-content-center">
        <div className="col-md-5" style={{ width: "auto" }}>
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1>
            <Loader />
          </h1>
        ) : rooms.length > 1 ? (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-3">
                <Room
                  room={room}
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                />
              </div>
            );
          })
        ) : (
          <h1>Error</h1>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ViewRooms;
