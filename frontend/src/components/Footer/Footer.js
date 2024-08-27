import React from "react";
import "./Footer.css";
import { Container } from "@mui/material";

export default function Footer() {
  return (
    <Container>
      <hr />
      <br />

      <p className="text-center">
        Contact Us on Our GitHub
        <br />
      </p>
      <p className="text-center">
        <a
          href="https://www.linkedin.com/in/aman-wasti/"
          target="_blank"
          rel="noopener noreferrer"
          className="txt-dec color-black"
        >
          Amanullah
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/ahmed-bashaar-200197225/"
          target="_blank"
          rel="noopener noreferrer"
          className="txt-dec color-black"
        >
          Ahmed
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/mirza-asfandyar-baig-44abb6218/"
          target="_blank"
          rel="noopener noreferrer"
          className="txt-dec color-black"
        >
          Asfandyar
        </a>
      </p>
    </Container>
  );
}