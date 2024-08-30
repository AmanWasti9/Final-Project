// src/components/FeatSlider.js
import React from "react";
import "./NewHero.css";

const NewHero = () => {
  return (
    <div className="container">
      <ul id="cards">
        <li className="card" id="card1">
          <div className="card_body">
            <div
              className="card_div1"
              style={{
                fontSize: "20px",
              }}
            >
              <p className="text-font text-center">
                Tired of sifting through endless articles or scrolling through
                Wikipedia pages to find the information you need?{" "}
              </p>
            </div>
          </div>
        </li>

        <li className="card" id="card2">
          <div className="card_body">
            <div className="card_div1">
              <p
                className="text-font text-center"
                style={{
                  fontSize: "20px",
                }}
              >
                We get it—it's frustrating.
                <br /> That's why we created Cogni!{" "}
              </p>
            </div>
          </div>
        </li>
        <li className="card" id="card3">
          <div className="card_body">
            <div className="card_div1">
              <h2 className="header_font text-center">
                Revolutionizing The Study
              </h2>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NewHero;
