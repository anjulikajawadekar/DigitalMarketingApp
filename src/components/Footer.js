import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#1c5e87",
        color: "white",
        padding: "40px 20px",
        marginTop: "50px",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Contact Info */}
        <Grid item xs={12} md={2}>       

          <p>📍 Pune, Maharashtra | 📧 info@digitalmarketing.com | 📞 +91 98765 43210</p>
         
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Digital Marketing. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
