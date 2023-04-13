import React from "react";
import { Link } from "react-router-dom";

function Payment() {

    return (
        <>
            <form className="paymentform">
                <h2>Type of Card:</h2>
                <label>
                    <input type="radio" name="cardType" value="visa" checked />
                    Visa
                    <input type="radio" name="cardType" value="mastercard" />
                    Mastercard
                </label>

                <h2>Card Information:</h2>
                <label>
                    Name on Card:
                    <input type="text" name="cardName" />
                </label>
                <label>
                    Expiration Date:
                    <input type="text" name="expirationDate" placeholder="MM/YY" />
                </label>
                <label>
                    Card Number:
                    <input type="text" name="cardNumber" />
                </label>
                <label>
                    CVV:
                    <input type="text" name="cvv" />
                </label>
                <Link to="/confirmation">
                    <button type="submit">Confirm Payment</button>
                </Link>
            </form>
        </>
    )

}

export default Payment;