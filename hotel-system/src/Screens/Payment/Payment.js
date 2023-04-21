import React, { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import "./Payment.css";

function Payment() {
  const [cardType, setCardType] = useState("visa");
  const [cardName, setCardName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");

  function handleSubmit() {
    window.alert("Booking Successful!");
  }

  return (
    <>
      <Nav />
      <div className="payment-container">
        <form className="paymentform">
          <h2>Type of Card:</h2>
          <label>
            <div>
              <input
                type="radio"
                name="cardType"
                value="visa"
                checked={cardType === "visa"}
                onChange={(e) => setCardType(e.target.value)}
              />
              Visa
            </div>
          </label>
          <label>
            <div>
              <input
                type="radio"
                name="cardType"
                value="mastercard"
                checked={cardType === "mastercard"}
                onChange={(e) => setCardType(e.target.value)}
              />
              Mastercard
            </div>
          </label>

          <h2>Card Information:</h2>
          <label>
            Name on Card:
            <input
              type="text"
              name="cardName"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </label>
          <label>
            Expiration Date:
            <input
              type="text"
              name="expirationDate"
              placeholder="MM/YY"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
          </label>
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </label>
          <Link to="/my-profile">
            <button
              type="submit"
              className="payment-submit-button"
              nClick={handleSubmit}
            >
              Confirm Payment
            </button>
          </Link>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Payment;
