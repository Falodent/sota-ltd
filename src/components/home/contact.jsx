import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    emailjs.init("n2eipiJfn_aJ4im6O");
  }, []);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputEmail || !regex.test(inputEmail)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    emailjs
      .send("service_cmevzoj", "template_3x9hijk", {
        name: name,
        email: email,
        message: message,
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "Message sent successully",
          timer: 2000,
        });
        setName("");
        setMessage("");
        setEmail("");
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error sending message",
          timer: 2000,
        });
        setLoad(false);
      });
  };

  return (
    <div className="contact">
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <p className="prof-title headFont">Contact Us</p>
        <label htmlFor="Name">
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="Email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleEmailChange}
            value={email}
            required
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </label>
        <label htmlFor="Message">
          Message
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </label>
        <button
          disabled={
            name === "" || email === "" || message === "" ? true : false
          }
          className={name === "" || email === "" || message === "" ? 'secBtn': 'pryBtn'}
        >
          {load ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
