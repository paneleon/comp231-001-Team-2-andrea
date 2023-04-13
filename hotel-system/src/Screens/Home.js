import '../App.css';
import React from 'react';


function Home() {
    return (
        <>
            <div className="hero">
                <h1 className="title">Grand Hotel</h1>
                <p className="description">Welcome to our beautiful hotel located in the heart of the city. We offer luxurious accommodations and exceptional service to make your stay unforgettable.</p>
            </div>
            <div className="room-section">
                <h2 className="room-section-title">Our Rooms</h2>
                <p className="room-section-description">We offer a variety of room types to suit your needs, from cozy single rooms to spacious suites. All of our rooms are equipped with high-speed internet, flat-screen TVs, and premium bedding for a comfortable night's sleep.</p>
            </div>
        </>
    )
}



export default Home;