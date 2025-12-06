import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { submitContact } from "../features/contacts/contactsSlice";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handle = (e) => {
    e.preventDefault();
    dispatch(submitContact({ name, email, subject, message }));
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    alert("Message saved (locally).");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6" style={{ background: "white" }}>
          <img
            src="./DigitalMarketingApp/images/contact-img2.png"
            className="img-fluid"
            alt="ApplicationImg"
          />
          
        </div>

        <div className="col-6 p-4 ">
          <h2 className="title-font">Contact Us</h2>
          <p className="mb-4">
            Let’s start a conversation that leads to solutions.
          </p>
          <form onSubmit={handle}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
              multiline
              rows={4}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
