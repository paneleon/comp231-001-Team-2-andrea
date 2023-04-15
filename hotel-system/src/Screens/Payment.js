import React from "react";
import Nav from "../Nav";
import {Link} from "react-router-dom";
import Footer from "../Footer";

function Payment() {

    return(
        <>
        <Nav/>
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
            <button type="submit" className="btn btn-primary">Confirm Payment</button>
        </Link>
        </form>
        <Footer/>
        </>
    )

}

export default Payment;