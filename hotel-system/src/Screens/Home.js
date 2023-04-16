import "../App.css";
import React from "react";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Nav />
      <div className="hero">
        <h1 className="title">Grand Hotel</h1>
        <p className="description">
          Welcome to our beautiful hotel located in the heart of the city. We
          offer luxurious accommodations and exceptional service to make your
          stay unforgettable.
        </p>
        <p className="description">
            The Grand Hotel offers the finest in comfort and convenience. Book
            your stay today!
          </p>
      </div>

      <section id="rooms" className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="display-4">Our Rooms</h2>
              <p className="room-section-description">
                We offer a variety of room types to suit your needs, from cozy single
                rooms to spacious suites. All of our rooms are equipped with
                high-speed internet, flat-screen TVs, and premium bedding for a
                comfortable night's sleep. 
            </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  src="https://th.bing.com/th/id/R.549508f8465fb0668706225fdfbb5537?rik=eQ8%2fo4W3jfzXmw&pid=ImgRaw&r=0/300x200.png?text=Room+2"
                  alt="Room 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Superior Room</h5>
                  <p className="card-text">
                    This luxurious room features a queen-sized bed, a balcony,
                    and a mini-fridge.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Starting from $249/night</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  src="https://th.bing.com/th/id/R.96ec51af9a534165c83592651fb551fb?rik=eVj8T63rZmtT8w&pid=ImgRaw&r=0/300x200.png?text=Room+3"
                  alt="Room 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Executive Suite</h5>
                  <p className="card-text">
                    This spacious suite features a king-sized bed, a separate
                    living room, and a mini-bar.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Starting from $399/night</small>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  src="https://th.bing.com/th/id/R.21740a06b580e49fb86d9cb944706eee?rik=77A9zjSyq9x9yw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-GrLveYYE4pE%2fUcLMkDLHuvI%2fAAAAAAAABew%2fhwDN3vgRfG0%2fs1600%2f6-livingrm-print_558457.jpg&ehk=VOuCAhxDxm7A3VWPARe2gWYPkYg6FeT%2b6xFT%2faW3cA0%3d&risl=&pid=ImgRaw&r=0/300x200.png?text=Room+3"
                  alt="Room 4 "
                />
                <div className="card-body">
                  <h5 className="card-title">Family Room</h5>
                  <p className="card-text">
                    This spacious room features two queen-sized beds and a
                    seating area.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Starting from $249/night</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="display-4">Special Events</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  src="https://th.bing.com/th/id/OIP.7g8Q3lFcdgAdOmdfuDCtawHaFj?pid=ImgDet&rs=1/300x200.png?text=Event+1"
                  alt="Event 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Wine Tasting</h5>
                  <p className="card-text">
                    Join us on March 31st for an evening of wine tasting with
                    local vineyards.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">March 31, 2023</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  src="https://cdn3.vectorstock.com/i/1000x1000/48/92/neon-signboard-nightclub-with-live-music-vector-19374892.jpg/300x200.png?text=Event+2"
                  alt="Event 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Live Music</h5>
                  <p className="card-text">
                    Enjoy live music on April 5th from local bands and
                    musicians.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">April 5, 2023</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  src="https://th.bing.com/th/id/R.d3f30b25ecf412c9b176fc40217c992f?rik=6dApsM%2fIuYdshQ&pid=ImgRaw&r=0/300x200.png?text=Event+3"
                  alt="Event 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Trivia Night</h5>
                  <p className="card-text">
                    Join us for a fun night of trivia and prizes on April 10th.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">April 10, 2023</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="display-4">Photo Gallery</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://th.bing.com/th/id/OIP.IAfW3Uyo9LUn0Zx7qu-rfgHaE6?pid=ImgDet&rs=1/300x200.png?text=Image+1"
                  alt="Image 1"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://th.bing.com/th/id/OIP.9d2EGzMMrXsafviTkmxweQHaFj?pid=ImgDet&rs=1/300x200.png?text=Image+2"
                  alt="Image 2"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://th.bing.com/th/id/OIP.R5E8GhFwTko5Nt3QO1u8VQHaEb?pid=ImgDet&w=474&h=283&rs=1/300x200.png?text=Image+3"
                  alt="Image 3"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://th.bing.com/th/id/R.cdf79fd6f1faf527ca751c3e6d8718fa?rik=fOiZbehf8M0MmA&pid=ImgRaw&r=0/300x200.png?text=Image+4"
                  alt="Image 4"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://th.bing.com/th/id/R.11e615426ae5e806ffb8ac962c51e062?rik=FnmVnQd8AG0XwA&pid=ImgRaw&r=0/300x200.png?text=Image+5"
                  alt="Image 5"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://th.bing.com/th/id/R.3342e70c9facf82bf599c5ca4c0aa116?rik=Vx0Qkkf1hGL8Ng&riu=http%3a%2f%2fwww.grandhotel.gr%2fimages%2fgallery%2flarge6.jpg&ehk=UaT7Q439XuJoAaVWVPyoU1Yx9GArgAQ2z7rGFzj%2fH0c%3d&risl=&pid=ImgRaw&r=0/300x200.png?text=Image+6"
                  alt="Image 6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-separator">
        <section id="reviews" className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="display-4">Customer Reviews</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <div className="card-body">
                    <p className="card-text">
                      "The Grand Hotel exceeded all of our expectations! The
                      staff were incredibly friendly and accommodating, the
                      rooms were spacious and well-appointed, and the amenities
                      were top-notch. We can't wait to come back!"
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">- Jane D.</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <div className="card-body">
                    <p className="card-text">
                      "My stay at The Grand Hotel was fantastic. The room was
                      clean and comfortable, the food was delicious, and the
                      location was perfect. I would definitely recommend this
                      hotel to anyone looking for a luxurious getaway."
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">- John S.</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <div className="card-body">
                    <p className="card-text">
                      "I was blown away by the level of service and attention to
                      detail at The Grand Hotel. The staff went above and beyond
                      to make sure I had everything I needed, and the facilities
                      were truly first-className. I can't wait to come back!"
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">- Sarah T.</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer/>
    </>
  );
}

export default Home;
