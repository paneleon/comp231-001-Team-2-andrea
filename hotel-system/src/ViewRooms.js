import './App.css';
import React, { useState } from 'react';
import Nav from './Nav';

function RoomBox(props) {
    const { imgSrc, beds, price, description, amenities } = props;
    return (
      <div className='room-box'>
        <img src={imgSrc} alt='room' />
        <div className='room-details'>
          <p>Beds: {beds}</p>
          <p>Price: {price}</p>
          <p>Description: {description}</p>
          <p>Amenities: {amenities.join(', ')}</p>
        </div>
        <button className='view-room-button'>View Room</button>
      </div>
    );
  }
  
  function ViewRooms() {
    const [selectedBeds, setSelectedBeds] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedAmenities, setSelectedAmenities] = useState([]);
  
    const handleBedsChange = (event) => {
      setSelectedBeds(event.target.value);
    };
  
    const handlePriceChange = (event) => {
      setSelectedPrice(event.target.value);
    };
  
    const handleAmenitiesChange = (event) => {
      const selectedAmenity = event.target.value;
      if (selectedAmenities.includes(selectedAmenity)) {
        setSelectedAmenities((prevSelectedAmenities) =>
          prevSelectedAmenities.filter((amenity) => amenity !== selectedAmenity)
        );
      } else {
        setSelectedAmenities((prevSelectedAmenities) => [
          ...prevSelectedAmenities,
          selectedAmenity,
        ]);
      }
    };
  
    // sample room data
    const rooms = [
      {
        imgSrc: 'https://via.placeholder.com/150',
        beds: 1,
        price: '$100',
        description: 'Lorem ipsum dolor sit amet',
        amenities: ['pool', 'gym'],
      },
      {
        imgSrc: 'https://via.placeholder.com/150',
        beds: 2,
        price: '$200',
        description: 'Lorem ipsum dolor sit amet',
        amenities: ['pool', 'spa'],
      },
      {
        imgSrc: 'https://via.placeholder.com/150',
        beds: 3,
        price: '$300',
        description: 'Lorem ipsum dolor sit amet',
        amenities: ['gym', 'spa'],
      },
    ];
  
    // filter rooms based on selected options
    const filteredRooms = rooms.filter((room) => {
      if (selectedBeds && room.beds !== parseInt(selectedBeds)) {
        return false;
      }
      if (selectedPrice) {
        const [minPrice, maxPrice] = selectedPrice.split('-');
        const roomPrice = parseInt(room.price.slice(1));
        if (roomPrice < minPrice || roomPrice > maxPrice) {
          return false;
        }
      }
      if (selectedAmenities.length) {
        const hasSelectedAmenities = selectedAmenities.every((amenity) =>
          room.amenities.includes(amenity)
        );
        if (!hasSelectedAmenities) {
          return false;
        }
      }
      return true;
    });

  return (
    <>
      <Nav />
      <div className='filter'>
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
      </div>
      <div className='room-list'>
        {filteredRooms.map((room) => (
          <div className='room' key={room.id}>
            <img src={room.image} alt={`Room ${room.id}`} />
            <h2>Room {room.id}</h2>
            <p>Beds: {room.beds}</p>
            <p>Price: ${room.price}/night</p>
            <p>{room.description}</p>
            <p>Amenities: {room.amenities.join(', ')}</p>
            <button>View Room</button>
          </div>
        ))}
      </div>
    </>
  );
}


export default ViewRooms;
