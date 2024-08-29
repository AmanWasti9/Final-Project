import React from "react";
import Hero from "../components/Hero/Hero";
import { Container } from "@mui/material";
import FeatSlider from "../components/FeatSlider/FeatSlider";
// import Signup from "../components/Signup/form";

export default function HomePage() {
  return (
    <Container>
      <Hero />
      <br />
      <br />
      <FeatSlider />
      <br />
      <br />
    </Container>
  );
}
