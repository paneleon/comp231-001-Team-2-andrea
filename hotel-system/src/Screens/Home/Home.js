import React from 'react';
import './Home.css';


function Home() {
    return (
        <>
            <div className='home-main-container'>
                <div className='home-intro-container'>
                    <div className='home-intro-title-container'>
                        <p className='home-intro-title'>
                            The Grand Hotel
                        </p>
                    </div>
                    <div className='home-intro-description-container'>
                        <p className='home-intro-description'>
                            Welcome to our beautiful hotel located in the heart of the city. <br />
                            We offer luxurious accommodations and exceptional service to make your stay unforgettable
                        </p>
                    </div>
                </div>
                <div className='home-room-container'>
                    <div className='home-room-title-container'>
                        <p className='home-room-title'>
                            Our Rooms
                        </p>
                    </div>
                    <div className='home-room-description-container'>
                        <p className='home-room-description'>
                            We offer a variety of room types to suit your needs, from cozy single rooms to spacious suites.
                            All of our rooms are equipped with high-speed internet, flat-screen TVs,
                            and premium bedding for a comfortable night's sleep
                        </p>

                    </div>
                    <a href='/view-rooms' className='home-room-link'>

                        <div className='home-room-link-container'>
                            View Rooms
                        </div>
                    </a>

                </div>
            </div >
            {/*
            <div className="hero">
                <div className='title-container'>
                    <p>The Grand Hotel</p>
                    <div className='description-container'>
                        <p className="description">Welcome to our beautiful hotel located in the heart of the city.
                            We offer luxurious accommodations and exceptional service to make your stay unforgettable.</p>
                    </div>
                </div>


            </div>
            <div className="room-section">
                <h2 className="room-section-title">Our Rooms</h2>
                <p className="room-section-description">We offer a variety of room types to suit your needs, from cozy single rooms to spacious suites. All of our rooms are equipped with high-speed internet, flat-screen TVs, and premium bedding for a comfortable night's sleep.</p>
            </div>
            */}
        </>
    )
}



export default Home;