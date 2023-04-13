import '../App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [inquiries, setInquiries] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        // Send the form data to the backend or do some other logic
        console.log(`Name: ${name}\nEmail: ${email}\nInquiries: ${inquiries}`);
        window.alert('Thank you for your message! We will get back to you shortly.');
        navigate("/");
    }


    return (
        <>
            <form className='contactform' onSubmit={handleSubmit}>
                <div>
                    <h2>Contact Us</h2>
                    <p>Email: abc@gmail.com</p>
                    <p>Phone: +14372773737</p>
                    <p>Or fill in the form and we will get back to you.</p>
                </div>
                <div className='contactdetails'>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='contactdetails'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='contactdetails'>
                    <label htmlFor="inquiries">Inquiries:</label>
                    <textarea
                        id="inquiries"
                        value={inquiries}
                        onChange={(e) => setInquiries(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default ContactUs;