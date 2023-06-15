import React, { useState } from "react";
import {
  IconBrandInstagram,
  IconBrandFacebookFilled,
  IconBrandTwitterFilled,
  IconBrandGoogle,
  IconHome2,
  IconPhoneCall,
  IconMailFilled,
} from "@tabler/icons-react";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-container  row">
        <div className="col-12 col-sm-6 p-2">
          <div>
            <div>
              <h2>1 SHOP</h2>
              <p>
                DailyShop Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Rerum modi dolor facilis! Nihil error, eius.
              </p>
            </div>
            <div className="d-flex flex-column">
              <div className="mb-2">
                <IconHome2 /> <span>Huntsville, AL 35813, USA</span>
              </div>
              <div className="mb-2">
                {" "}
                <IconPhoneCall /> <span>+ 021.343.7575</span>
              </div>
              <div className="mb-2">
                <IconMailFilled /> <span>Email: support@dailyshop.com</span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h2>follow us</h2>
            <span className="pe-2">
              <IconBrandFacebookFilled />
            </span>
            <span className="pe-2">
              <IconBrandTwitterFilled />
            </span>
            <span className="pe-2">
              <IconBrandInstagram />
            </span>
            <span className="pe-2">
              <IconBrandGoogle />
            </span>
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <form className="contact-form  p-2" onSubmit={handleSubmit}>
            <h2>Contact-Us </h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <div className="w-100 d-flex justify-content-center">
              <button type="submit" className="btn btn-success ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;