import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
// import Logo from "../Images/logo.jpg";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar className="navbar">
    
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Digital Marketing
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Gallery
        </Button>
        <Button color="inherit" component={Link} to="/apply">
          Careers
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
}
