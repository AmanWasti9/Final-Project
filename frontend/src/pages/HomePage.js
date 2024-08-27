import React from "react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import { Container } from "@mui/material";
import About from "../components/About/About";

export default function HomePage() {
  return (
    <Container>
      <Hero />
      <br />
      <br />
      <Features />
      <br />
      <br />

      <About />
    </Container>
  );
}