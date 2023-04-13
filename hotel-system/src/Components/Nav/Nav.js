import React from "react";
import './Nav.css';

function Nav() {
  return (
    <nav>
      <a href="/">Home page</a>
      <a href="/contact-us">Contact Us</a>
      <a href="/view-rooms">View Rooms</a>
      <a href="/my-profile">My Profile</a>
    </nav>
  );
}

export default Nav;