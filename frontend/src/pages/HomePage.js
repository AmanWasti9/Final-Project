import React from "react";
import Hero from "../components/Hero/Hero";
import { Container } from "@mui/material";
import FeatSlider from "../components/FeatSlider/FeatSlider";
import Card from "../components/Card/Card";
import NewHero from "../components/NewHero/NewHero";
// import Signup from "../components/Signup/form";

export default function HomePage() {
  return (
    <Container>
      <NewHero />
      <br />
      <br />
      <Card /> 
      <br />
      <br />
      <FeatSlider />
      <br />
      <br />
    </Container>
  );
}
