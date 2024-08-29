import React, { useState } from "react";
import "./Hero.css";
import forum from "../../Images/forum.jpg";
import one from "../../Images/one.jpg";
import url from "../../Images/url.jpg";
import { Alert, Box, Snackbar, TextField } from "@mui/material";
import { firestore } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import ImageSlider from "../ImageSlider/ImageSlider";
import Card from "../Card/card";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [showCard, setShowCard] = useState(false); // New state for showing Card

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
        setShowCard(true); // Show the Card component after snackbar closes
      }, 3000);
    } catch (error) {
      console.log(error.message);
      setSnackbarMessage("Registration failed. Please try again.");
      setSnackbarOpen(true);
    }
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-info">
            {" "}
            <span className="hero-title">Cogni,</span> Revolutionizing The Study
            Plan.{" "}
          </span>
          <p className="hero-description text-font">
            Tired of sifting through endless articles or scrolling through
            Wikipedia pages to find the information you need? We get it—it's
            frustrating. That's why we created Cogni!
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

        <div>
          <div style={{ height: "100vh", width: "100vh" }}>
            {/* Conditionally render the Card component */}
            {showCard && <Card />}
          </div>
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
    </div>
  );
}
