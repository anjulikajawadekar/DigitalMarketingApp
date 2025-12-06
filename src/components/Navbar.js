import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
// import Logo from "../Images/logo.jpg";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar className="navbar">
        <img
          src="/DigitalMarketingApp/images/logo1.png"
          alt="Company Logo"
          style={{
            width: "80px",
            height: "60px",
            marginRight: "10px",
            borderRadius: "5px",
          }}
        />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Digital Marketing
        </Typography>
        <Button
          color="inherit"
          component={NavLink}
          to="/"
          className={({ isActive }) => (isActive ? "active-btn" : "")}
        >
          Gallery
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/apply"
          className={({ isActive }) => (isActive ? "active-btn" : "")}
        >
          Careers
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/contact"
          className={({ isActive }) => (isActive ? "active-btn" : "")}
        >
          Contact
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active-btn" : "")}
        >
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
}
