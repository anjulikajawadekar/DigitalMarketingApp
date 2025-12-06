import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { submitJob } from "../features/jobs/jobsSlice";
import { blue } from "@mui/material/colors";

export default function JobForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");
  const [cv, setCv] = useState(null);

  const handleCv = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => setCv({ dataUrl: reader.result, name: f.name });
    reader.readAsDataURL(f);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cv) return alert("Attach CV (pdf/doc)");
    dispatch(
      submitJob({
        name,
        email,
        position,
        message,
        cvDataUrl: cv.dataUrl,
        cvName: cv.name,
      })
    );
    setName("");
    setEmail("");
    setPosition("");
    setMessage("");
    setCv(null);
    document.getElementById("cv-file").value = "";
    alert("Application submitted (stored locally).");
  };

  return (
    <div className="container-fluid ">
        <div className="row">
        <div className="col-6" style={{background:"white"}}>
          <img src="./DigitalMarketingApp/images/job-application2.jpg" className="img-fluid" alt="ApplicationImg"/>
          <p style={{textAlign:"center"}}>Join us and grow with a team that values talent and ambition.</p>
        
        </div>
        <div className="col-6 p-4"  >
          <h2 className="title-font">Join our team!</h2>
          <p className="mb-4">Please fill in the form below and we will email you back within 3 business days.</p>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Full name"
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
              label="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              fullWidth
              required
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
            <input
              id="cv-file"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleCv}
              className="form-control"
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </div>
      
    
  );
}
