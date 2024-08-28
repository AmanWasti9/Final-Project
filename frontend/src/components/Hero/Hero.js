import React, { useState } from "react";
import "./Hero.css";
import forum from "../../Images/forum.jpg";
import one from "../../Images/one.jpg";
import url from "../../Images/url.jpg";
// import three from "../../Images/three.png";
import { Alert, Box, Snackbar, TextField } from "@mui/material";
import { firestore } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import ImageSlider from "../ImageSlider/ImageSlider";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleJoin = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(firestore, "waitlist", email), {
        email: email,
      });
      setEmail("");

      setSnackbarMessage("Joined Our Waitlist successfully!");
      setSnackbarOpen(true);

      // Delay the Snackbar closing to show the message
      setTimeout(() => {
        setSnackbarOpen(false);
      }, 3000);
    } catch (error) {
      console.log(error.message);
      setSnackbarMessage("Registration failed. Please try again.");
      setSnackbarOpen(true);
    }
  };

  const slides = [
    { url: one, title: "Image One" },
    { url: url, title: "Image Two" },
    { url: forum, title: "Image Three" },
  ];

  const containerStyles = {
    width: "100%",
    height: "300px",
    margin: "10px auto",
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-title">Cogni,</span> 
          <span className="hero-info">Revolutionizing The Study Plan.</span>
          <p className="hero-description">
Tired of sifting through endless articles or scrolling through Wikipedia pages to find the information you need?
We get it—it's frustrating. That's why we created Cogni!
          </p>
          <Box
            className="fluid-gradient"
            component="form"
            onSubmit={handleJoin}
          >
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#5218fa",
                  },
                  "&:hover fieldset": {
                    borderColor: "#5218fa",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#5218fa",
                  },
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "#5218fa",
                  fontFamily: '"Merriweather", serif',
                  fontWeight: "300",
                  fontStyle: "normal",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white",
                  fontFamily: '"Merriweather", serif',
                  fontWeight: "300",
                  fontStyle: "normal",
                },
                "& .MuiOutlinedInput-input": {
                  color: "white",
                },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              InputProps={{
                style: { color: "white" },
              }}
            />
            <button className="hero-button" type="submit">
              Join
            </button>
          </Box>
        </div>
        {/* <div className="hero-image">
          <img src={hero} alt="Research tool" />
        </div> */}
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity={
              snackbarMessage === "Joined Our Waitlist successfully!"
                ? "success"
                : "error"
            }
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </section>
      {/* <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div> */}
    </div>
  );
}
