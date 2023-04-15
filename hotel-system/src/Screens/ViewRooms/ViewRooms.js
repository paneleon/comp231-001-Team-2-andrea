import "./ViewRooms.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Room from "../Room/Room";
import Loader from "../../Components/Loader";

function ViewRooms() {
  // const [selectedBeds, setSelectedBeds] = useState('');
  // const [selectedPrice, setSelectedPrice] = useState('');
  // const [selectedAmenities, setSelectedAmenities] = useState([]);

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

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

  //   axios.get(`http://localhost:5000/rooms`)
  //   .then(res => setRooms(res.data))
  //   .catch(err => console.error(err))
  // }, []);

  // const handleBedsChange = (event) => {
  //   setSelectedBeds(event.target.value);
  // };

  // const handlePriceChange = (event) => {
  //   setSelectedPrice(event.target.value);
  // };

  // const handleAmenitiesChange = (event) => {
  //   const selectedAmenity = event.target.value;
  //   if (selectedAmenities.includes(selectedAmenity)) {
  //     setSelectedAmenities((prevSelectedAmenities) =>
  //       prevSelectedAmenities.filter((amenity) => amenity !== selectedAmenity)
  //     );
  //   } else {
  //     setSelectedAmenities((prevSelectedAmenities) => [
  //       ...prevSelectedAmenities,
  //       selectedAmenity,
  //     ]);
  //   }
  // };

  // sample room data
  // const rooms = [
  //   {
  //     imgSrc: 'https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=',
  //     beds: 1,
  //     price: '$100',
  //     description: 'Lorem ipsum dolor sit amet',
  //     amenities: ['pool', 'gym'],
  //   },
  //   {
  //     imgSrc: 'https://via.placeholder.com/150',
  //     beds: 2,
  //     price: '$200',
  //     description: 'Lorem ipsum dolor sit amet',
  //     amenities: ['pool', 'spa'],
  //   },
  //   {
  //     imgSrc: 'https://via.placeholder.com/150',
  //     beds: 3,
  //     price: '$300',
  //     description: 'Lorem ipsum dolor sit amet',
  //     amenities: ['gym', 'spa'],
  //   },
  // ];

  // filter rooms based on selected options
  // const filteredRooms = rooms.filter((room) => {
  //   if (selectedBeds && room.beds !== parseInt(selectedBeds)) {
  //     return false;
  //   }
  //   if (selectedPrice) {
  //     const [minPrice, maxPrice] = selectedPrice.split('-');
  //     const roomPrice = parseInt(room.price.slice(1));
  //     if (roomPrice < minPrice || roomPrice > maxPrice) {
  //       return false;
  //     }
  //   }
  //   if (selectedAmenities.length) {
  //     const hasSelectedAmenities = selectedAmenities.every((amenity) =>
  //       room.amenities.includes(amenity)
  //     );
  //     if (!hasSelectedAmenities) {
  //       return false;
  //     }
  //   }
  //   return true;
  // });

  return (
    <>
      <div className="viewrooms-main-container">
        <div className="viewrooms-header-container">
          <h2>
            Rooms
          </h2>
        </div>
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
        <div className="viewrooms-roomlist-container">
          {loading ? (
            <h1>
              <Loader />
            </h1>
          ) : rooms.length > 1 ? (
            rooms.map((room) => {
              return (
                <div>
                  <Room room={room} />
                </div>
              );
            })
          ) : (
            <h1>Error</h1>
          )}
        </div>
      </div>

    </>
  );
}

export default ViewRooms;
