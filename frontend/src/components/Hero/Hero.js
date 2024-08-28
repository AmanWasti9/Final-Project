import React from "react";
import "./Hero.css";
import hero from "../../Images/hero.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Revolutionize Your Research</h1>
        <p className="hero-description">
          Enter the URL of any research paper to get a concise summary and
          interactive flashcards that help you retain key information.
        </p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Research tool" />
      </div>
    </section>
  );
}
